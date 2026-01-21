using AP.Model.obj;
using APProject.Model;
using System;
using System.Collections.Specialized;
using System.Web.Mvc;

namespace APProject.Controllers
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

        public ActionResult AboutUs()
        {
            return View();
        }
        public ActionResult contactUs()
        {
            return View();
        }

        public ActionResult FAQ()
        {
            return View();
        }
        [HttpPost()]
        public string SendEmail(SendMessageModel sendMessageModel)
        {
            try
            {
                objname.Add("Name", sendMessageModel.Name);
                objname.Add("EmailId", Convert.ToString(sendMessageModel.EmailId));
                objname.Add("Subject", Convert.ToString(sendMessageModel.Subject));
                objname.Add("EmailMessage", Convert.ToString(sendMessageModel.EmailMessage));
                objname.Add("ToEmailId", Convert.ToString(sendMessageModel.ToEmailId));
                str = objclient.CommonWebClient(objname, objapi.SendMessage);
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
