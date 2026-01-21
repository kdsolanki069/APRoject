using AP.Admin.Models;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AP.Admin.Controllers
{
    public class WorkSheetController : Controller
    {
        #region "Global Variables"

        CommonConvertString.commonWebClientmethod objclient = new CommonConvertString.commonWebClientmethod();
        CommonConvertString.ApiName objapi = new CommonConvertString.ApiName();
        NameValueCollection objname = new NameValueCollection();
        string str = "";
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        #endregion

        public ActionResult Detail()
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
        [HttpPost()]
        public string InsertUpdateWorkSheet(AP.Model.WorkSheetModel workSheetModel)
        {
            try
            {
                objname.Add("Flag", Convert.ToString(workSheetModel.Flag));                        
                objname.Add("Date", Convert.ToString(workSheetModel.Date));
                objname.Add("WorkId", Convert.ToString(workSheetModel.WorkId));
                objname.Add("Remark", Convert.ToString(workSheetModel.Remark));
                objname.Add("Description", Convert.ToString(workSheetModel.Description));
                objname.Add("Status", Convert.ToString(workSheetModel.Status));
                objname.Add("CompanyId", Convert.ToString(workSheetModel.CompanyId));
                str = objclient.CommonWebClient(objname, objapi.InsertUpdateWorkSheet);
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
        public string GetWorkSheet(AP.Model.WorkSheetModel workSheetModel)
        {
            try
            {
                objname.Add("Flag", "S");               
                objname.Add("Date", Convert.ToString(workSheetModel.Date));
                objname.Add("Description", Convert.ToString(workSheetModel.Description));
                objname.Add("Status", Convert.ToString(workSheetModel.Status));
                objname.Add("CompanyId", Convert.ToString(workSheetModel.CompanyId));
                objname.Add("WorkId", Convert.ToString(workSheetModel.WorkId));
                objname.Add("Remark", Convert.ToString(workSheetModel.Remark));
                str = objclient.CommonWebClient(objname, objapi.GetWorkSheet);
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