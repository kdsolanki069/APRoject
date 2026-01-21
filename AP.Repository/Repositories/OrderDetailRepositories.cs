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
    public class OrderDetailRepositories : IOrderDetailRepositories
    {
        /// <summary>
        /// Get Order Detail
        /// </summary>
        /// <param name="orderDetailModel"></param>
        /// <returns></returns>
        public OrderDetailModelList GetOrderDetail(OrderDetailModel orderDetailModel)
        {

            OrderDetailModelList orderDetailModelList = new OrderDetailModelList();
            List<OrderDetailModel> orderDetailModellistData = new List<OrderDetailModel>();
            OrderDetailModel orderDetailModels = new OrderDetailModel();
            int Count = 0;
            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetOrderDetail(orderDetailModel.OrderID, orderDetailModel.Flag);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            orderDetailModels = new OrderDetailModel();
                            orderDetailModels.OrderDetailID = Convert.ToInt32(item.OrderDetailID);
                            orderDetailModels.OrderID = Convert.ToInt32(item.OrderID);
                            orderDetailModels.ProductDetail = Convert.ToString(item.ProductDetail);
                            orderDetailModels.Quantity = Convert.ToInt32(item.Quantity);
                            orderDetailModels.ProductPrice = Convert.ToInt32(item.ProductPrice);
                            orderDetailModels.RemainingQuantity = Convert.ToInt32(item.RemainingQuantity);
                            orderDetailModels.OLDProductPrice = Convert.ToInt32(item.OLDProductPrice);

                            orderDetailModellistData.Add(orderDetailModels);
                            Count = Count + 1;
                        }
                    }
                    orderDetailModelList.OrderDetailModelListData = orderDetailModellistData;
                    orderDetailModelList.Status = "True";
                    orderDetailModelList.Message = String.Format("{0} record Found", Count);

                }
                catch (Exception ex)
                {
                    orderDetailModelList.OrderDetailModelListData = orderDetailModellistData;
                    orderDetailModelList.Status = "False";
                    orderDetailModelList.Message = String.Format("{0} ", ex.Message);
                }
            }

            return orderDetailModelList;
        }

        /// <summary>
        /// Insert Updat Order Detail
        /// </summary>
        /// <param name="orderDetailModel"></param>
        /// <param name="Createdby"></param>
        /// <param name="Flag"></param>
        /// <returns></returns>
        public OrderDetailModelList InsertUpdateOrderDetail(List<OrderDetailModel> orderDetailModel, int Createdby, string Flag)
        {
            OrderDetailModelList baseModelClass = new OrderDetailModelList();
            try
            {
                var OrderDetailModelDatatable = new DataTable();
                OrderDetailModelDatatable.Columns.Add("OrderID", typeof(int));
                OrderDetailModelDatatable.Columns.Add("OrderDetailID", typeof(int));
                OrderDetailModelDatatable.Columns.Add("ProductDetail", typeof(string));
                OrderDetailModelDatatable.Columns.Add("Quantity", typeof(int));
                OrderDetailModelDatatable.Columns.Add("RemainingQuantity", typeof(int));
                OrderDetailModelDatatable.Columns.Add("ProductPrice", typeof(int));
                OrderDetailModelDatatable.Columns.Add("OLDProductPrice", typeof(int));
                OrderDetailModelDatatable.Columns.Add("Createdby", typeof(int));


                foreach (var item in orderDetailModel)
                {
                    OrderDetailModelDatatable.NewRow();
                    OrderDetailModelDatatable.Rows.Add(new Object[] { item.OrderID, item.OrderDetailID, item.ProductDetail, item.Quantity, item.RemainingQuantity, item.ProductPrice, item.OLDProductPrice, item.Changeby });
                }
                OrderDetailModelDatatable.AcceptChanges();

                SqlParameter[] parameter = new SqlParameter[4];
                parameter[0] = new SqlParameter("@OrderDetail", SqlDbType.Structured);
                parameter[0].Value = OrderDetailModelDatatable;
                parameter[0].TypeName = "dbo.OrderDetail";
                parameter[1] = new SqlParameter("@Flag", SqlDbType.VarChar);
                parameter[1].Value = Flag;
                parameter[2] = new SqlParameter("@Createdby", SqlDbType.Int);
                parameter[2].Value = Createdby;
                parameter[3] = new SqlParameter("@OrderID", SqlDbType.Int);
                parameter[3].Value = orderDetailModel[0].OrderID;
                using (var db = new APDBEntities())
                {
                    var returnvalue = db.Database.ExecuteSqlCommand("exec dbo.usp_InsertUpdateOrderDetail @OrderDetail,@Flag,@Createdby,@OrderID", parameter[0], parameter[1], parameter[2], parameter[3]);
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
