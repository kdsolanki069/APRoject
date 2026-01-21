using AP.Model;

namespace AP.Services.Interfaces
{
    public interface ICompanyServices
    {
        CompanyDetailModelList ImportCompany(CompanyDetailModel companyDetailModel);
        CompanyDetailModelList GetCompanyDetails(CompanyDetailModel companyDetailModel);
        CompanyDetailModelList InsertUpdatecompanyDetail(CompanyDetailModel companyDetailModel);
        OrderDetailModelList GetCompanyProduct(CompanyDetailModel companyDetailModel);

    }
}
