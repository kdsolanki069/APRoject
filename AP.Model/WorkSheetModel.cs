using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
  public class WorkSheetModel : CompanyDetailModel
    {

        public int WorkId { get; set; }
        public string Date { get; set; }     
        public string Description { get; set; }
        public int Status { get; set; }
        public string Remark { get; set; }
    }

    public class WorkSheetModelList : ResponseModel
    {
        public List<WorkSheetModel> WorkSheetModelListData { get; set; }
    }
}
