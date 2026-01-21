using AP.Entity;
using AP.Model;
using AP.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace AP.Repository.Repositories
{
    public class CompanyRepositories : ICompanyRepositories
    {
        /// <summary>
        /// Import Company
        /// </summary>
        /// <param name="CompanyDetailModellist"></param>
        /// <param name="Createdby"></param>
        /// <returns></returns>
        public CompanyDetailModelList ImportCompany(List<CompanyDetailModel> CompanyDetailModellist, int Createdby)
        {
            CompanyDetailModelList baseModelClass = new CompanyDetailModelList();
            try
            {
                var CompanyDetailDatatable = new DataTable();
                CompanyDetailDatatable.Columns.Add("CompanyName", typeof(string));
                CompanyDetailDatatable.Columns.Add("CompanyAddress", typeof(string));
                CompanyDetailDatatable.Columns.Add("CompanyPhone", typeof(string));
                CompanyDetailDatatable.Columns.Add("CompanyEmail", typeof(string));
                CompanyDetailDatatable.Columns.Add("CompanyGST", typeof(string));
                CompanyDetailDatatable.Columns.Add("CompanyPinCode", typeof(string));
                CompanyDetailDatatable.Columns.Add("Companycountry", typeof(string));
                CompanyDetailDatatable.Columns.Add("CompanyState", typeof(string));


                foreach (var item in CompanyDetailModellist)
                {
                    CompanyDetailDatatable.NewRow();
                    CompanyDetailDatatable.Rows.Add(new Object[] { item.CompanyName, item.CompanyAddress, item.CompanyPhone, item.CompanyEmail, item.CompanyGST, item.CompanyPinCode, item.Companycountry, item.CompanyState });
                }
                CompanyDetailDatatable.AcceptChanges();

                SqlParameter[] parameter = new SqlParameter[2];
                parameter[0] = new SqlParameter("@CompanyDetail", SqlDbType.Structured);
                parameter[0].Value = CompanyDetailDatatable;
                parameter[0].TypeName = "dbo.CompanyDetail";
                parameter[1] = new SqlParameter("@Createdby", SqlDbType.Int);
                parameter[1].Value = Createdby;
                using (var db = new APDBEntities())
                {
                    var returnvalue = db.Database.ExecuteSqlCommand("exec dbo.usp_ImportCompanyDetail @CompanyDetail,@Createdby", parameter[0], parameter[1]);
                }

                baseModelClass.Status = "1";
                baseModelClass.Message = "success";
            }
            catch (Exception ex)
            {
                baseModelClass.Status = "1";
                baseModelClass.Message = Convert.ToString(ex.Message);
                //logger.Error(Convert.ToString(ex));
            }
            return baseModelClass;
        }


        /// <summary>
        /// Get Company Details
        /// </summary>
        /// <param name="companyDetailModel"></param>
        /// <returns></returns>
        public CompanyDetailModelList GetCompanyDetails(CompanyDetailModel companyDetailModel)
        {

            CompanyDetailModelList companyDetailModelList = new CompanyDetailModelList();
            List<CompanyDetailModel> CompanyDetailModellistData = new List<CompanyDetailModel>();
            CompanyDetailModel CompanyDetails = new CompanyDetailModel();
            int Count = 0;
            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetCompany(companyDetailModel.CompanyId, companyDetailModel.Flag);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            CompanyDetails = new CompanyDetailModel();
                            CompanyDetails.CompanyId = Convert.ToInt32(item.CompanyId);
                            CompanyDetails.CompanyName = Convert.ToString(item.CompanyName);
                            CompanyDetails.CompanyAddress = Convert.ToString(item.CompanyAddress);
                            CompanyDetails.Companycountry = Convert.ToString(item.Companycountry);
                            CompanyDetails.CompanyState = Convert.ToString(item.CompanyState);
                            CompanyDetails.CompanyPinCode = Convert.ToString(item.CompanyPinCode);
                            CompanyDetails.CompanyPhone = Convert.ToString(item.CompanyPhone);
                            CompanyDetails.CompanyGST = Convert.ToString(item.CompanyGST);
                            CompanyDetails.CompanyEmail = Convert.ToString(item.CompanyEmail);
                            CompanyDetails.ContactPersonName = Convert.ToString(item.ContactPersonName);
                            CompanyDetailModellistData.Add(CompanyDetails);
                            Count = Count + 1;
                        }
                    }
                    companyDetailModelList.CompanyDetailModelListData = CompanyDetailModellistData;
                    companyDetailModelList.Status = "True";
                    companyDetailModelList.Message = String.Format("{0} record Found", Count);

                }
                catch (Exception ex)
                {
                    companyDetailModelList.CompanyDetailModelListData = CompanyDetailModellistData;
                    companyDetailModelList.Status = "False";
                    companyDetailModelList.Message = String.Format("{0} ", ex.Message);
                }
            }

            return companyDetailModelList;
        }


        /// <summary>
        /// Insert Updat company Detail
        /// </summary>
        /// <param name="companyDetails"></param>
        /// <returns></returns>
        public CompanyDetailModelList InsertUpdatecompanyDetail(CompanyDetailModel companyDetails)
        {
            CompanyDetailModelList companyDetailModelList = new CompanyDetailModelList();
            using (APDBEntities db = new APDBEntities())
            {
                var data = db.usp_InsertUpdateCompanyDetail(companyDetails.Flag,
                                                  companyDetails.CompanyId,
                                                  companyDetails.CompanyName,
                                                  companyDetails.CompanyAddress,
                                                  companyDetails.Companycountry,
                                                  companyDetails.CompanyState,
                                                  companyDetails.CompanyPinCode,
                                                  companyDetails.CompanyPhone,
                                                  companyDetails.CompanyEmail,
                                                  companyDetails.CompanyGST,
                                                  companyDetails.ContactPersonName,
                                                  companyDetails.Changeby);

                companyDetailModelList.Status = "True";
                companyDetailModelList.Message = "record Update Sucessfully";
            }
            return companyDetailModelList;
        }



        public OrderDetailModelList GetCompanyProduct(CompanyDetailModel companyDetails)
        {
            var Count = 0;
            OrderDetailModelList orderDetailModelList = new OrderDetailModelList();
            OrderDetailModel orderDetailModel = new OrderDetailModel();
            List<OrderDetailModel> OrderDetailModels = new List<OrderDetailModel>();
            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetCompanyProduct(companyDetails.CompanyId);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            orderDetailModel = new OrderDetailModel();
                            orderDetailModel.CompanyId = Convert.ToInt32(item.CompanyId);
                            orderDetailModel.OrderType = Convert.ToInt32(item.OrderType);
                            orderDetailModel.ProductDetail = Convert.ToString(item.ProductDetail);
                            orderDetailModel.ProductPrice = Convert.ToInt32(item.ProductPrice);
                            orderDetailModel.OrderNo = Convert.ToString(item.OrderNo);
                            OrderDetailModels.Add(orderDetailModel);
                            Count = Count + 1;

                        }
                    }
                    orderDetailModelList.OrderDetailModelListData = OrderDetailModels;
                    orderDetailModelList.Status = "True";
                    orderDetailModelList.Message = String.Format("{0} record Found", Count);

                }
                catch (Exception ex)
                {
                    orderDetailModelList.OrderDetailModelListData = OrderDetailModels;
                    orderDetailModelList.Status = "False";
                    orderDetailModelList.Message = String.Format("{0} ", ex.Message);
                }
            }

            return orderDetailModelList;
        }
    }
}
