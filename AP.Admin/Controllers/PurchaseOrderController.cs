using AP.Admin.Models;
using AP.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AP.Admin.Controllers
{
    public class PurchaseOrderController : Controller
    {

        #region "Global Variables"

        CommonConvertString.commonWebClientmethod objclient = new CommonConvertString.commonWebClientmethod();
        CommonConvertString.ApiName objapi = new CommonConvertString.ApiName();
        NameValueCollection objname = new NameValueCollection();
        string str = "";
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        #endregion
        // GET: PurchaseOrder
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult List()
        {
            return View();
        }

        public ActionResult Add()
        {
            return View();
        }
        public ActionResult Edit()
        {
            return View();
        }


        public ActionResult SaleList()
        {
            return View();
        }

        public ActionResult SaleAdd()
        {
            return View();
        }

        public ActionResult SaleEdit()
        {
            return View();
        }

       
        [HttpPost()]
        public string InsertUpdatePurchaseOrder(OrderModel orderModel)
        {
            try
            {
                str = "";
                OrderController orderController = new OrderController();
                str = orderController.InsertUpdateOrder(orderModel);

            }
            catch (Exception ex)
            {
                str = "-1";
                //  logger.Error(Convert.ToString(ex));
                logger.Error(Convert.ToString(ex));
            }
            return str;
        }

        [HttpPost()]
        public string PrintPurchaseOrder(OrderModel orderModel)
        {
            try
            {
                OrderController orderController = new OrderController();
                str = orderController.GetOrderAPICall(orderModel);
                var OrderModelList = JsonConvert.DeserializeObject<OrderModelList>(str);
               
                StringBuilder PurchaseOrderHTMLpath = new StringBuilder();
                if (orderModel.OrderType == 4)
                { PurchaseOrderHTMLpath.Append(Server.MapPath("~/Content/PurchaseOrderHTML.html")); }

                else if (orderModel.OrderType == 5)
                { PurchaseOrderHTMLpath.Append(Server.MapPath("~/Content/SellOrderHTML.html")); }
                var ProformaHTML = System.IO.File.ReadAllText(Convert.ToString(PurchaseOrderHTMLpath)).ToString();
                string finalhtmlText = string.Empty;
                string htmlText = string.Empty;
                string ProductDetialstring = string.Empty;
                foreach (var OrderModelListData in OrderModelList.OrderModelListData)
                {
                    ProformaHTML = ProformaHTML.Replace("[OrderDate]", OrderModelListData.OrderDate);
                    ProformaHTML = ProformaHTML.Replace("[OrderNo]", OrderModelListData.OrderNo);
                    ProformaHTML = ProformaHTML.Replace("[ShipVia]", OrderModelListData.ShipVia);
                    ProformaHTML = ProformaHTML.Replace("[DiliveryTime]", OrderModelListData.DiliveryTime);
                    ProformaHTML = ProformaHTML.Replace("[OrderComments]", OrderModelListData.OrderComments);
                    //ProformaHTML = ProformaHTML.Replace("[Freight]", OrderModelListData.freightcharge.ToString());



                    string Addressdata = OrderModelListData.CompanyAddress + "-" + OrderModelListData.CompanyPinCode;
                    string Phonedata = OrderModelListData.CompanyPhone;

                    Addressdata = Addressdata.Replace(",,", " ");
                    ProformaHTML = ProformaHTML.Replace("[CompanyAddress]", Addressdata);
                    ProformaHTML = ProformaHTML.Replace("[CompanyAddress1]", " (" + OrderModelListData.CompanyState + ") " + OrderModelListData.Companycountry);

                    if (!string.IsNullOrEmpty(Phonedata))
                    {
                        string[] result1 = Regex.Split(Phonedata, ",,");
                        ProformaHTML = ProformaHTML.Replace("[CompanyPhone1]", result1[0].ToString().Trim());
                        if (result1.Length > 1)
                        {
                            ProformaHTML = ProformaHTML.Replace("[CompanyPhone2]", result1[1].ToString().Trim());
                        }
                        else
                        {
                            ProformaHTML = ProformaHTML.Replace("[CompanyPhone2]", " ");
                        }

                    }
                    else
                    {
                        ProformaHTML = ProformaHTML.Replace("[CompanyPhone1]", " ");
                        ProformaHTML = ProformaHTML.Replace("[CompanyPhone2]", " ");
                    }
                    ProformaHTML = ProformaHTML.Replace("[CompanyName]", OrderModelListData.CompanyName.ToString().Trim());
                    int i = 1;
                    int subtotal = 0;
                    foreach (var orderDetailModelList in OrderModelList.OrderModelListData[0].orderDetailModelList)
                    {

                        StringBuilder ProductDetialHTMLpath = new StringBuilder();
                        ProductDetialHTMLpath.Append(Server.MapPath("~/Content/ProductDetialHTML.html"));
                        var ProductDetialHTML = System.IO.File.ReadAllText(Convert.ToString(ProductDetialHTMLpath)).ToString();
                        ProductDetialHTML = ProductDetialHTML.Replace("[No]", i.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[ProductDetail]", orderDetailModelList.ProductDetail.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[ProductPrice]", orderDetailModelList.ProductPrice.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[Quantity]", orderDetailModelList.Quantity.ToString().Trim());
                        int Total = orderDetailModelList.Quantity * orderDetailModelList.ProductPrice;
                        ProductDetialHTML = ProductDetialHTML.Replace("[Total]", Total.ToString().Trim());
                        subtotal = subtotal + Total;
                        ProductDetialstring = ProductDetialstring + ProductDetialHTML;
                        i = i + 1;
                    }
                    ProformaHTML = ProformaHTML.Replace("[SUBTOTAL]", subtotal.ToString().Trim());

                    if (OrderModelListData.GSTApply == 1)
                    {
                        ProformaHTML = ProformaHTML.Replace("[TOTALGST]", ((subtotal + OrderModelListData.freightcharge) * .18).ToString());
                        ProformaHTML = ProformaHTML.Replace("[Display]", "block");
                        ProformaHTML = ProformaHTML.Replace("[FinalTotal]", (subtotal + ((subtotal + OrderModelListData.freightcharge) * .18) + OrderModelListData.freightcharge).ToString());
                    }
                    else
                    {
                        ProformaHTML = ProformaHTML.Replace("[Display]", "none");
                        ProformaHTML = ProformaHTML.Replace("[FinalTotal]", (subtotal + OrderModelListData.freightcharge).ToString());
                    }

                    ProformaHTML = ProformaHTML.Replace("[OrderDetail]", ProductDetialstring.ToString().Trim());

                }

                 string domain = Request.Url?.GetLeftPart(UriPartial.Authority);
                 ProformaHTML =  ProformaHTML.Replace("[Domain]",domain);
                ResponseModel responseModel = new ResponseModel();
                responseModel.Message = ProformaHTML;
                var jsonSerialiser = new JavaScriptSerializer();
                var json = jsonSerialiser.Serialize(responseModel);
                return json;
            }
            catch (Exception ex)
            {
                str = "-1";
                //  logger.Error(Convert.ToString(ex));
                logger.Error(Convert.ToString(ex));
            }
            return str;
        }






    }
}