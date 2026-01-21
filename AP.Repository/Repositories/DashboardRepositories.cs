using AP.Entity;
using AP.Model;
using AP.Repository.Interfaces;
using System;

namespace AP.Repository.Repositories
{
    public class DashboardRepositories : IDashboardRepositories
    {
        /// <summary>
        /// Get Dashboard Detail
        /// </summary>
        /// <returns></returns>
        public DeshboardDetail GetDashboard()
        {

            DeshboardDetail deshboardDetail = new DeshboardDetail();
            Deshboard deshboard = new Deshboard();

            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetDashboard();
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            deshboard = new Deshboard();
                            deshboard.QuatationCount = Convert.ToInt32(item.QuatationCount);
                            deshboard.PerfomaCount = Convert.ToInt32(item.PerfomaCount);
                            deshboard.ChallanCount = Convert.ToInt32(item.ChallanCount);
                            deshboard.POrderCount = Convert.ToInt32(item.POrderCount);
                            deshboard.SOrderCount = Convert.ToInt32(item.SOrderCount);

                        }
                    }
                    deshboardDetail.DeshboardData = deshboard;
                    deshboardDetail.Status = "True";
                    deshboardDetail.Message = String.Format("{0} record Found", 1);

                }
                catch (Exception ex)
                {
                    deshboardDetail.DeshboardData = deshboard;
                    deshboardDetail.Status = "False";
                    deshboardDetail.Message = String.Format("{0} ", ex.Message);
                }
            }

            return deshboardDetail;
        }

        public DeshboardDetail GetCompanyDashboard(int CompanyId)
        {

            DeshboardDetail deshboardDetail = new DeshboardDetail();
            Deshboard deshboard = new Deshboard();

            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetCompanyDashboard(CompanyId);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            deshboard = new Deshboard();
                            deshboard.QuatationCount = Convert.ToInt32(item.QuatationCount);
                            deshboard.PerfomaCount = Convert.ToInt32(item.PerfomaCount);
                            deshboard.ChallanCount = Convert.ToInt32(item.ChallanCount);
                            deshboard.POrderCount = Convert.ToInt32(item.POrderCount);
                            deshboard.SOrderCount = Convert.ToInt32(item.SOrderCount);

                        }
                    }
                    deshboardDetail.DeshboardData = deshboard;
                    deshboardDetail.Status = "True";
                    deshboardDetail.Message = String.Format("{0} record Found", 1);

                }
                catch (Exception ex)
                {
                    deshboardDetail.DeshboardData = deshboard;
                    deshboardDetail.Status = "False";
                    deshboardDetail.Message = String.Format("{0} ", ex.Message);
                }
            }

            return deshboardDetail;
        }
    }
}
