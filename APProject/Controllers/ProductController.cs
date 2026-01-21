using APProject.Model;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace APProject.Controllers
{
    public class ProductController : Controller
    {

        #region "Global Variables"

        CommonConvertString.commonWebClientmethod objclient = new CommonConvertString.commonWebClientmethod();
        CommonConvertString.ApiName objapi = new CommonConvertString.ApiName();
        NameValueCollection objname = new NameValueCollection();
        string str = "";
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        #endregion
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Products()
        {
            return View();
        }
        public ActionResult Detail()
        {
            return View();
        }

        [HttpPost()]
        public string GetProduct(AP.Model.ProductModel productModel)
        {
            try
            {
                objname.Add("Flag", productModel.Flag);
                objname.Add("ProductID", Convert.ToString(productModel.ProductID));
                objname.Add("ProductTypeId", Convert.ToString(productModel.ProductTypeId));

                str = objclient.CommonWebClient(objname, objapi.GetProduct);
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
        public string GetProductType(AP.Model.ProductTypeModel productTypeModel)
        {
            try
            {
                objname.Add("Flag", productTypeModel.Flag);
                objname.Add("ProductTypeId", Convert.ToString(productTypeModel.ProductTypeId));
                objname.Add("Type", Convert.ToString(productTypeModel.Type));
                objname.Add("ProductTypeName", Convert.ToString(productTypeModel.ProductTypeName));

                str = objclient.CommonWebClient(objname, objapi.GetProductType);
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