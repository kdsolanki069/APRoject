using AP.Entity;
using AP.Model;
using AP.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Repository.Repositories
{
  public  class WorkSheetRepositories : IWorkSheetRepositories
    {

        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();



        /// <summary>
        /// Get Work Sheet Detail
        /// </summary>
        /// <param name="workSheetModel"></param>
        /// <returns></returns>
        public WorkSheetModelList GetWorkSheet(WorkSheetModel  workSheetModel)
        {

            WorkSheetModelList WorkSheetModelList = new WorkSheetModelList();
            List<WorkSheetModel> WorkSheetModellistData = new List<WorkSheetModel>();
            WorkSheetModel WorkSheetModel = new WorkSheetModel();
            int Count = 0;
            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetWorkSheet( workSheetModel.Flag,workSheetModel.WorkId,workSheetModel.Date,workSheetModel.CompanyId,workSheetModel.Description,workSheetModel.Status);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            WorkSheetModel = new WorkSheetModel ();
                            WorkSheetModel.CompanyId = Convert.ToInt32(item.CompanyId);
                            WorkSheetModel.CompanyName = Convert.ToString(item.CompanyName);
                            WorkSheetModel.Description = Convert.ToString(item.Description);
                            WorkSheetModel.Remark = Convert.ToString(item.Remark);
                            WorkSheetModel.Date = Convert.ToString(item.Date);
                            WorkSheetModel.Status = Convert.ToInt32(item.Status);
                            WorkSheetModel.WorkId = Convert.ToInt32(item.WorkId);
                            WorkSheetModellistData.Add(WorkSheetModel);
                            Count = Count + 1;
                        }
                    }
                    WorkSheetModelList.WorkSheetModelListData = WorkSheetModellistData;
                    WorkSheetModelList.Status = "True";
                    WorkSheetModelList.Message = String.Format("{0} record Found", Count);

                }
                catch (Exception ex)
                {
                    WorkSheetModelList.WorkSheetModelListData = WorkSheetModellistData;
                    WorkSheetModelList.Status = "False";
                    WorkSheetModelList.Message = String.Format("{0} ", ex.Message);
                }
            }

            return WorkSheetModelList;
        }
       
        public WorkSheetModelList InsertUpdateWorkSheet(WorkSheetModel workSheetModel)
        {
            WorkSheetModelList companyDetailModelList = new WorkSheetModelList();
            using (APDBEntities db = new APDBEntities())
            {
                var data = db.usp_InsertUpdateWorkSheet(workSheetModel.Flag,
                                                  workSheetModel.WorkId,
                                                  workSheetModel.CompanyId,
                                                  workSheetModel.Date,
                                                  workSheetModel.Description,
                                                  workSheetModel.Remark,
                                                  workSheetModel.Status,                                                 
                                                  workSheetModel.Changeby);

                companyDetailModelList.Status = "True";
                companyDetailModelList.Message = "record Update Sucessfully";
            }
            return companyDetailModelList;
        }
    }
}
