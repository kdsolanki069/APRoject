using AP.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Repository.Interfaces
{
   public interface IWorkSheetRepositories
    {
        WorkSheetModelList GetWorkSheet(WorkSheetModel workSheetModel);
        WorkSheetModelList InsertUpdateWorkSheet(WorkSheetModel workSheetModel);
    }
}
