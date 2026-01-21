using AP.Model;
using AP.Notification.EmailNotification;
using AP.Repository.Repositories;
using AP.Services.Interfaces;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace AP.Services.Services
{
    public class CompanyServices : ICompanyServices
    {
        CompanyRepositories _companyRepositories;
        public CompanyServices(CompanyRepositories companyRepositories)
        {
            _companyRepositories = companyRepositories;

        }
        public CompanyServices()
        {
            _companyRepositories = new CompanyRepositories();
        }

        #region Property

        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        templateName templateName = new templateName();
        Common.Helper.RandomString randomString = new Common.Helper.RandomString();
        UserEmailNotification userEmailNotification = new UserEmailNotification();
        #endregion


        public CompanyDetailModelList ImportCompany(CompanyDetailModel companyDetailModel)
        {
            CompanyDetailModelList companyDetailModelList = new CompanyDetailModelList();
            List<CompanyDetailModel> CompanyDetailModelListdata = new List<CompanyDetailModel>();

            var st = JsonConvert.DeserializeObject<List<CompanyDetailModel>>(companyDetailModel.CompanyDetailModeljsonstring);


            if (companyDetailModel.Flag == "Import")
            {
                companyDetailModelList = _companyRepositories.ImportCompany(st, -1);
            }

            return companyDetailModelList;
        }


        public CompanyDetailModelList GetCompanyDetails(CompanyDetailModel companyDetailModel)
        {
            CompanyDetailModelList companyDetailModelList = new CompanyDetailModelList();
            companyDetailModelList = _companyRepositories.GetCompanyDetails(companyDetailModel);
            return companyDetailModelList;
        }

        public CompanyDetailModelList InsertUpdatecompanyDetail(CompanyDetailModel companyDetailModel)
        {
            CompanyDetailModelList companyDetailModelList = new CompanyDetailModelList();
            companyDetailModelList = _companyRepositories.InsertUpdatecompanyDetail(companyDetailModel);
            return companyDetailModelList;
        }

        public OrderDetailModelList GetCompanyProduct(CompanyDetailModel companyDetailModel)
        {
            OrderDetailModelList orderDetailModelList = new OrderDetailModelList();
            orderDetailModelList = _companyRepositories.GetCompanyProduct(companyDetailModel);
            return orderDetailModelList;
        }



    }
}
