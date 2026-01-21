using AP.Admin.Models;
using AP.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Text;
using System.Text.RegularExpressions;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AP.Admin.Controllers
{
    public class OrderController : Controller
    {
        #region "Global Variables"

        CommonConvertString.commonWebClientmethod objclient = new CommonConvertString.commonWebClientmethod();
        CommonConvertString.ApiName objapi = new CommonConvertString.ApiName();
        NameValueCollection objname = new NameValueCollection();
        string str = "";
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        #endregion
        // GET: Order
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Quotation()
        {
            return View();
        }
        public ActionResult QuotationList()
        {
            return View();
        }
        public ActionResult QuotationEdit()
        {
            return View();
        }

        public ActionResult PriceChangeQuotation()
        {
            return View();
        }
        public ActionResult PriceChangeQuotationList()
        {
            return View();
        }
        public ActionResult PriceChangeQuotationEdit()
        {
            return View();
        }
        public ActionResult ProformaList()
        {
            return View();
        }

        public ActionResult ProformaAdd()
        {
            return View();
        }
        public ActionResult ProformaEdit()
        {
            return View();
        }

        public ActionResult ChallanList()
        {
            return View();
        }
        public ActionResult ChallanAdd()
        {
            return View();
        }
        public ActionResult ChallanEdit()
        {
            return View();
        }

        public ActionResult ReplacementList()
        {
            return View();
        }
        public ActionResult ReplacementAdd()
        {
            return View();
        }
        public ActionResult ReplacementEdit()
        {
            return View();
        }

        [HttpPost()]
        public string PrintQuotation(OrderModel orderModel)
        {
            try
            {
                str = GetOrderAPICall(orderModel);
                var OrderModelList = JsonConvert.DeserializeObject<OrderModelList>(str);
               
                StringBuilder QuotationHTMLpath = new StringBuilder();
                if (orderModel.OrderType == 7)
                {
                    QuotationHTMLpath.Append(Server.MapPath("~/Content/NewQuotationHTML.html"));
                }
                else
                {
                    QuotationHTMLpath.Append(Server.MapPath("~/Content/QuotationHTML.html"));
                }

                var QuotationHTML = System.IO.File.ReadAllText(Convert.ToString(QuotationHTMLpath)).ToString();
                string finalhtmlText = string.Empty;
                string htmlText = string.Empty;
                string ProductDetialstring = string.Empty;
                foreach (var OrderModelListData in OrderModelList.OrderModelListData)
                {
                    QuotationHTML = QuotationHTML.Replace("[OrderDate]", OrderModelListData.OrderDate);
                    QuotationHTML = QuotationHTML.Replace("[OrderNo]", OrderModelListData.OrderNo);
                    QuotationHTML = QuotationHTML.Replace("[ShipVia]", OrderModelListData.ShipVia);
                    QuotationHTML = QuotationHTML.Replace("[DiliveryTime]", OrderModelListData.DiliveryTime);
                    QuotationHTML = QuotationHTML.Replace("[OrderComments]", OrderModelListData.OrderComments);


                    string Addressdata = OrderModelListData.CompanyAddress + "-" + OrderModelListData.CompanyPinCode;
                    string Phonedata = OrderModelListData.CompanyPhone;

                    Addressdata = Addressdata.Replace(",,", " ");
                    QuotationHTML = QuotationHTML.Replace("[CompanyAddress]", Addressdata);
                    QuotationHTML = QuotationHTML.Replace("[CompanyAddress1]", " (" + OrderModelListData.CompanyState + ") " + OrderModelListData.Companycountry);

                    if (!string.IsNullOrEmpty(Phonedata))
                    {
                        string[] result1 = Regex.Split(Phonedata, ",,");
                        QuotationHTML = QuotationHTML.Replace("[CompanyPhone1]", result1[0].ToString().Trim());
                        if (result1.Length > 1)
                        {
                            QuotationHTML = QuotationHTML.Replace("[CompanyPhone2]", result1[1].ToString().Trim());
                        }
                        else
                        {
                            QuotationHTML = QuotationHTML.Replace("[CompanyPhone2]", " ");
                        }

                    }
                    else
                    {
                        QuotationHTML = QuotationHTML.Replace("[CompanyPhone1]", " ");
                        QuotationHTML = QuotationHTML.Replace("[CompanyPhone2]", " ");
                    }
                    QuotationHTML = QuotationHTML.Replace("[CompanyName]", OrderModelListData.CompanyName.ToString().Trim());
                    int i = 1;
                    foreach (var orderDetailModelList in OrderModelList.OrderModelListData[0].orderDetailModelList)
                    {

                        StringBuilder ProductDetialHTMLpath = new StringBuilder();
                        if (orderModel.OrderType == 7)
                        {
                            ProductDetialHTMLpath.Append(Server.MapPath("~/Content/NewProductDetialHTML.html"));
                        }
                        else
                        {
                            ProductDetialHTMLpath.Append(Server.MapPath("~/Content/ProductDetialHTML.html"));
                        }

                        var ProductDetialHTML = System.IO.File.ReadAllText(Convert.ToString(ProductDetialHTMLpath)).ToString();
                        ProductDetialHTML = ProductDetialHTML.Replace("[No]", i.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[ProductDetail]", orderDetailModelList.ProductDetail.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[OLDProductPrice]", orderDetailModelList.OLDProductPrice.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[ProductPrice]", orderDetailModelList.ProductPrice.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[Quantity]", orderDetailModelList.Quantity.ToString().Trim());
                        int Total = orderDetailModelList.Quantity * orderDetailModelList.ProductPrice;
                        ProductDetialHTML = ProductDetialHTML.Replace("[Total]", Total.ToString().Trim());

                        ProductDetialstring = ProductDetialstring + ProductDetialHTML;
                        i = i + 1;
                    }
                    QuotationHTML = QuotationHTML.Replace("[OrderDetail]", ProductDetialstring.ToString().Trim());
                }
                string domain = Request.Url?.GetLeftPart(UriPartial.Authority);
                 QuotationHTML =  QuotationHTML.Replace("[Domain]",domain);



                ResponseModel responseModel = new ResponseModel();
                responseModel.Message = QuotationHTML;
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


        [HttpPost()]
        public string PrintProforma(OrderModel orderModel)
        {
            try
            {
                str = GetOrderAPICall(orderModel);
                var OrderModelList = JsonConvert.DeserializeObject<OrderModelList>(str);
               

                StringBuilder ProformaHTMLpath = new StringBuilder();
                if (orderModel.OrderType == 2)
                { ProformaHTMLpath.Append(Server.MapPath("~/Content/ProformaHTML.html")); }

                else if (orderModel.OrderType == 3)
                { ProformaHTMLpath.Append(Server.MapPath("~/Content/challanHTML.html")); }

                else if (orderModel.OrderType == 6)
                { ProformaHTMLpath.Append(Server.MapPath("~/Content/replacementHTML.html")); }
                var ProformaHTML = System.IO.File.ReadAllText(Convert.ToString(ProformaHTMLpath)).ToString();
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
                    ProformaHTML = ProformaHTML.Replace("[Freight]", OrderModelListData.freightcharge.ToString());



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
                        if (orderModel.OrderType == 6)
                        {
                            ProductDetialHTMLpath.Append(Server.MapPath("~/Content/NototalProductDetialHTML.html"));
                        }
                        else if (orderModel.OrderType == 7)
                        {
                            ProductDetialHTMLpath.Append(Server.MapPath("~/Content/NewProductDetialHTML.html"));
                        }
                        else
                        {
                            ProductDetialHTMLpath.Append(Server.MapPath("~/Content/ProductDetialHTML.html"));
                        }
                        var ProductDetialHTML = System.IO.File.ReadAllText(Convert.ToString(ProductDetialHTMLpath)).ToString();
                        ProductDetialHTML = ProductDetialHTML.Replace("[No]", i.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[ProductDetail]", orderDetailModelList.ProductDetail.ToString().Trim());
                        ProductDetialHTML = ProductDetialHTML.Replace("[OLDProductPrice]", orderDetailModelList.OLDProductPrice.ToString().Trim());
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
                        ProformaHTML = ProformaHTML.Replace("[GST]", OrderModelListData.CompanyGST);
                        ProformaHTML = ProformaHTML.Replace("[GSTShow]", "block");
                        ProformaHTML = ProformaHTML.Replace("[FinalTotal]", (subtotal + ((subtotal + OrderModelListData.freightcharge) * .18) + OrderModelListData.freightcharge).ToString());
                    }
                    else
                    {
                        ProformaHTML = ProformaHTML.Replace("[GSTShow]", "none");
                        ProformaHTML = ProformaHTML.Replace("[FinalTotal]", (subtotal + OrderModelListData.freightcharge).ToString());
                    }
                    if (OrderModelListData.IsPaid == true) { ProformaHTML = ProformaHTML.Replace("[PaidDisplay]", "show"); }
                    else { ProformaHTML = ProformaHTML.Replace("[PaidDisplay]", "none"); }
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



        [HttpPost()]
        public string InsertUpdateOrder(AP.Model.OrderModel orderModel)
        {
            try
            {
                objname.Add("Flag", Convert.ToString(orderModel.Flag));
                objname.Add("CompanyId", Convert.ToString(orderModel.CompanyId));
                objname.Add("OrderDate", Convert.ToString(orderModel.OrderDate));
                objname.Add("OrderType", Convert.ToString(orderModel.OrderType));
                objname.Add("DiliveryTime", Convert.ToString(orderModel.DiliveryTime));
                objname.Add("TotalAmount", Convert.ToString(orderModel.TotalAmount));
                objname.Add("TotalDue", Convert.ToString(orderModel.TotalDue));
                objname.Add("OrderNo", Convert.ToString(orderModel.OrderNo));
                objname.Add("ShipVia", Convert.ToString(orderModel.ShipVia));
                objname.Add("GSTApply", Convert.ToString(orderModel.GSTApply));
                objname.Add("OrderComments", Convert.ToString(orderModel.OrderComments));
                objname.Add("freightcharge", Convert.ToString(orderModel.freightcharge));
                objname.Add("OrderID", Convert.ToString(orderModel.OrderID));
                objname.Add("OrderStatus", Convert.ToString(orderModel.OrderStatus));
                objname.Add("IsPaid", Convert.ToString(orderModel.IsPaid));
                objname.Add("orderDetailModelListString", Convert.ToString(orderModel.orderDetailModelListString));
                str = objclient.CommonWebClient(objname, objapi.InsertUpdateOrder);
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
        public string InsertUpdateOrderDetail(AP.Model.OrderDetailModel orderDetailModel)
        {
            try
            {
                objname.Add("Flag", Convert.ToString(orderDetailModel.Flag));
                objname.Add("orderDetailModeljsonstring", Convert.ToString(orderDetailModel.orderDetailModeljsonstring));
                str = objclient.CommonWebClient(objname, objapi.InsertUpdateOrderDetail);
            }
            catch (Exception ex)
            {
                str = "-1";
                //  logger.Error(Convert.ToString(ex));
                logger.Error(Convert.ToString(ex));
            }
            return str;
        }

        public string GetOrderAPICall(OrderModel orderModel)
        {
            try
            {
                objname.Add("Flag", orderModel.Flag);
                objname.Add("OrderID", Convert.ToString(orderModel.OrderID));
                objname.Add("OrderType", Convert.ToString(orderModel.OrderType));
                objname.Add("CompanyId", Convert.ToString(orderModel.CompanyId));
                str = objclient.CommonWebClient(objname, objapi.GetOrder);
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
        public string GetOrder(AP.Model.OrderModel orderModel)
        {
            return GetOrderAPICall(orderModel);
        }


    }
}
