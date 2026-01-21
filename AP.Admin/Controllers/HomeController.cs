using AP.Admin.Models;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AP.Admin.Controllers
{     
    public class HomeController : Controller
    {

        #region "Global Variables"

        CommonConvertString.commonWebClientmethod objclient = new CommonConvertString.commonWebClientmethod();
        CommonConvertString.ApiName objapi = new CommonConvertString.ApiName();
        NameValueCollection objname = new NameValueCollection();
        string str = "";
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        #endregion
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

         [HttpPost()]
         public string GetDashboard()
        {
            try
            {               
                str = objclient.CommonWebClient(objname, objapi.GetDashboard);
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