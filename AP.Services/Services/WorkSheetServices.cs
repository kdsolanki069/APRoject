using AP.Model;
using AP.Repository.Repositories;
using AP.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Services.Services
{
   public class WorkSheetServices : IWorkSheetServices
    {

        WorkSheetRepositories _workSheetRepositories;
        public WorkSheetServices(WorkSheetRepositories workSheetRepositories)
        {
            _workSheetRepositories = workSheetRepositories;

        }
        public WorkSheetServices()
        {
            _workSheetRepositories = new WorkSheetRepositories ();
        }

        public WorkSheetModelList GetWorkSheet(WorkSheetModel workSheetModel)
        {
            WorkSheetModelList workSheetModelList = new WorkSheetModelList();
            workSheetModelList = _workSheetRepositories.GetWorkSheet(workSheetModel);
            return workSheetModelList;
        }

        public WorkSheetModelList InsertUpdateWorkSheet(WorkSheetModel workSheetModel)
        {
            WorkSheetModelList workSheetModelList = new WorkSheetModelList();
            workSheetModelList = _workSheetRepositories.InsertUpdateWorkSheet(workSheetModel);
            return workSheetModelList;
        }

   
    }
}
