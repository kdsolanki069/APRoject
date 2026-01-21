using AP.Model;
using AP.Services.Interfaces;
using AP.Services.Services;
using System;
using System.Web.Http;

namespace AP.Api.Controllers
{
    public class DashboardController : ApiController
    {
        IDashboardServices _dashboardServices;

        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        DashboardController(IDashboardServices dashboardServices)
        {
            try
            {
                _dashboardServices = dashboardServices;
            }
            catch (Exception ex)
            {
                logger.Error(Convert.ToString(ex));
            }
        }
        DashboardController()
        {
            try
            {
                _dashboardServices = new DashboardServices();
            }
            catch (Exception ex)
            {
                logger.Error(Convert.ToString(ex));
            }
        }

        [Route("api/Dashboard/GetDashboard")]
        [HttpPost]
        public DeshboardDetail GetDashboard()
        {
            DeshboardDetail list = _dashboardServices.GetDashboard();
            return list;
        }

        [Route("api/Dashboard/GetCompanyDashboard")]
        [HttpPost]
        public DeshboardDetail GetCompanyDashboard(CompanyDetailModel companyDetailModel)
        {
            DeshboardDetail list = _dashboardServices.GetCompanyDashboard(companyDetailModel.CompanyId);
            return list;
        }


    }
}
