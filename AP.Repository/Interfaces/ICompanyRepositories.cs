using AP.Model;
using System.Collections.Generic;

namespace AP.Repository.Interfaces
{
    public interface ICompanyRepositories
    {
        CompanyDetailModelList ImportCompany(List<CompanyDetailModel> CompanyDetailModellist, int Createdby);
        CompanyDetailModelList GetCompanyDetails(CompanyDetailModel companyDetailModel);
        CompanyDetailModelList InsertUpdatecompanyDetail(CompanyDetailModel companyDetails);
        OrderDetailModelList GetCompanyProduct(CompanyDetailModel companyDetails);
    }
}
