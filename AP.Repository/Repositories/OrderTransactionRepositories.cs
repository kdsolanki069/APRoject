using AP.Entity;
using AP.Model;
using AP.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Repository.Repositories
{
  public class OrderTransactionRepositories : IOrderTransactionRepositories
    {
        /// <summary>
        /// Get Order Transaction
        /// </summary>
        /// <param name="orderTransactionModel"></param>
        /// <returns></returns>
        public OrderTransactionModelList GetOrderTransaction(OrderTransactionModel orderTransactionModel)
        {

            OrderTransactionModelList orderTransactionModelList = new OrderTransactionModelList();
            List<OrderTransactionModel> orderTransactionModellistData = new List<OrderTransactionModel>();
            OrderTransactionModel orderTransactionModels = new OrderTransactionModel();
            int Count = 0;
            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetOrderTransaction(orderTransactionModel.OrderID, orderTransactionModel.OrderDetailID, orderTransactionModel.Flag);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            orderTransactionModels = new OrderTransactionModel();
                            orderTransactionModels.OrderID = Convert.ToInt32(item.OrderID);
                            orderTransactionModels.OrderDetailID = Convert.ToInt32(item.OrderDetailID);                          
                            orderTransactionModels.ProductDetail = Convert.ToString(item.ProductDetail);
                            orderTransactionModels.Quantity = Convert.ToInt32(item.Quantity);
                            orderTransactionModels.RemainingQuantity = Convert.ToInt32(item.RemainingQuantity);
                            orderTransactionModels.SupplyQuantity = Convert.ToInt32(item.SupplyQuantity);
                            orderTransactionModels.BillNo = Convert.ToString(item.BillNo);
                            orderTransactionModels.Date = Convert.ToString(item.Date);
                            orderTransactionModels.ProductPrice = Convert.ToInt32(item.ProductPrice);
                           
                            orderTransactionModellistData.Add(orderTransactionModels);
                            Count = Count + 1;
                        }
                    }
                    orderTransactionModelList.OrderTransactionModelListData = orderTransactionModellistData;
                    orderTransactionModelList.Status = "True";
                    orderTransactionModelList.Message = String.Format("{0} record Found", Count);

                }
                catch (Exception ex)
                {
                    orderTransactionModelList.OrderTransactionModelListData = orderTransactionModellistData;                    
                    orderTransactionModelList.Status = "False";
                    orderTransactionModelList.Message = String.Format("{0} ", ex.Message);
                }
            }

            return orderTransactionModelList;
        }

        /// <summary>
        /// Insert Update Order Transaction
        /// </summary>
        /// <param name="orderTransactionModels"></param>
        /// <param name="Createdby"></param>
        /// <param name="Flag"></param>
        /// <returns></returns>
        public OrderTransactionModelList InsertUpdateOrderTransaction(List<OrderTransactionModel> orderTransactionModels, int Createdby, string Flag)
        {
            OrderTransactionModelList baseModelClass = new OrderTransactionModelList();
            try
            {
                var OrderTransactionModelDatatable = new DataTable();
                OrderTransactionModelDatatable.Columns.Add("OrderTransactionId", typeof(int));
                OrderTransactionModelDatatable.Columns.Add("OrderID", typeof(int));
                OrderTransactionModelDatatable.Columns.Add("OrderDetailID", typeof(int));
                OrderTransactionModelDatatable.Columns.Add("BillNo", typeof(string));
                OrderTransactionModelDatatable.Columns.Add("Date", typeof(string));
                OrderTransactionModelDatatable.Columns.Add("Quantity", typeof(int));
                OrderTransactionModelDatatable.Columns.Add("Createdby", typeof(int));


                foreach (var item in orderTransactionModels)
                {
                    OrderTransactionModelDatatable.NewRow();
                    OrderTransactionModelDatatable.Rows.Add(new Object[] { item.OrderTransactionId, item.OrderID, item.OrderDetailID, item.BillNo, item.Date, item.Quantity, Createdby });
                }
                OrderTransactionModelDatatable.AcceptChanges();

                SqlParameter[] parameter = new SqlParameter[3];
                parameter[0] = new SqlParameter("@OrderTransaction", SqlDbType.Structured);
                parameter[0].Value = OrderTransactionModelDatatable;
                parameter[0].TypeName = "dbo.OrderTransaction";
                parameter[1] = new SqlParameter("@Flag", SqlDbType.VarChar);
                parameter[1].Value = Flag;
                parameter[2] = new SqlParameter("@Createdby", SqlDbType.Int);
                parameter[2].Value = Createdby;
              
                using (var db = new APDBEntities())
                {
                    var returnvalue = db.Database.ExecuteSqlCommand("exec dbo.usp_InsertUpdateOrderTransaction   @OrderTransaction,@Flag,@Createdby", parameter[0], parameter[1], parameter[2]);
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
    }
}


    
