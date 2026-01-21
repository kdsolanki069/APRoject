using System.Collections.Generic;

namespace AP.Model
{
    public class CompanyDetailModel : CommonModel
    {

        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanyAddress { get; set; }
        public string Companycountry { get; set; }
        public string CompanyState { get; set; }
        public string CompanyPinCode { get; set; }
        public string CompanyPhone { get; set; }
        public string CompanyEmail { get; set; }
        public string CompanyGST { get; set; }
        public string CompanyDetailModeljsonstring { get; set; }
        public string ContactPersonName { get; set; }

    }


    public class CompanyDetailModelList : ResponseModel
    {
        public List<CompanyDetailModel> CompanyDetailModelListData { get; set; }
    }




}
