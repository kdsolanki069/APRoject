using AP.Model;
using AP.Services.Interfaces;
using AP.Services.Services;
using System;
using System.Web.Http;

namespace AP.Api.Controllers
{
    public class CompanyController : ApiController
    {

        ICompanyServices _companyServices;
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        CompanyController(ICompanyServices companyServices)
        {
            try
            {
                _companyServices = companyServices;
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }
        }
        CompanyController()
        {
            try
            {

                _companyServices = new CompanyServices();
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }

        }

        [Route("api/Company/ImportCompany")]
        [HttpPost]
        public CompanyDetailModelList ImportCompany(CompanyDetailModel companyDetailModel)
        {
            CompanyDetailModelList list = _companyServices.ImportCompany(companyDetailModel);
            return list;
        }

        [Route("api/Company/GetCompanyDetails")]
        [HttpPost]
        public CompanyDetailModelList GetCompanyDetails(CompanyDetailModel companyDetailModel)
        {
            CompanyDetailModelList list = _companyServices.GetCompanyDetails(companyDetailModel);
            return list;
        }

        [Route("api/Company/InsertUpdatecompanyDetail")]
        [HttpPost]
        public CompanyDetailModelList InsertUpdatecompanyDetail(CompanyDetailModel companyDetailModel)
        {
            CompanyDetailModelList list = _companyServices.InsertUpdatecompanyDetail(companyDetailModel);
            return list;
        }

        [Route("api/Company/GetCompanyProduct")]
        [HttpPost]
        public OrderDetailModelList GetCompanyProduct(CompanyDetailModel companyDetailModel)
        {
            OrderDetailModelList list = _companyServices.GetCompanyProduct(companyDetailModel);
            return list;
        }



    }
}
