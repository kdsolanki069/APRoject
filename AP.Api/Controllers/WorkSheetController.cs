using AP.Model;
using AP.Services.Interfaces;
using AP.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AP.Api.Controllers
{
    public class WorkSheetController : ApiController
    {
        IWorkSheetServices _workSheetServices;
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        WorkSheetController(IWorkSheetServices  workSheetServices)
        {
            try
            {
                _workSheetServices = workSheetServices;
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }
        }
        WorkSheetController()
        {
            try
            {

                _workSheetServices = new WorkSheetServices();
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }

        }


        [Route("api/WorkSheet/GetWorkSheet")]
        [HttpPost]
        public WorkSheetModelList GetWorkSheet(WorkSheetModel workSheetModel)
        {
            WorkSheetModelList list = _workSheetServices.GetWorkSheet(workSheetModel);
            return list;
        }

        [Route("api/WorkSheet/InsertUpdateWorkSheet")]
        [HttpPost]
        public WorkSheetModelList InsertUpdateWorkSheet(WorkSheetModel workSheetModel)
        {
            WorkSheetModelList list = _workSheetServices.InsertUpdateWorkSheet(workSheetModel);
            return list;
        }

    }
}
