using AP.Entity;
using AP.Model;
using AP.Repository.Interfaces;
using System;
using System.Collections.Generic;

namespace AP.Repository.Repositories
{
    public class OrderRepositories : IOrderRepositories
    {


        /// <summary>
        /// Get Order
        /// </summary>
        /// <param name="orderModel"></param>
        /// <returns></returns>
        public OrderModelList GetOrder(OrderModel orderModel)
        {

            OrderModelList orderModelModelList = new OrderModelList();
            List<OrderModel> orderModellistData = new List<OrderModel>();
            OrderModel orderModels = new OrderModel();
            if (orderModel.OrderStatus == 0)
            {
                orderModel.OrderStatus = -1;
            }
            int Count = 0;
            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetOrder(orderModel.OrderID, orderModel.Flag, orderModel.OrderType, orderModel.OrderStatus, orderModel.IsPaid, orderModel.CompanyId);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            orderModels = new OrderModel();
                            orderModels.CompanyId = Convert.ToInt32(item.CompanyId);
                            orderModels.CompanyName = Convert.ToString(item.CompanyName);
                            orderModels.CompanyAddress = Convert.ToString(item.CompanyAddress);
                            orderModels.Companycountry = Convert.ToString(item.Companycountry);
                            orderModels.CompanyState = Convert.ToString(item.CompanyState);
                            orderModels.CompanyPinCode = Convert.ToString(item.CompanyPinCode);
                            orderModels.CompanyPhone = Convert.ToString(item.CompanyPhone);
                            orderModels.CompanyGST = Convert.ToString(item.CompanyGST);
                            orderModels.CompanyEmail = Convert.ToString(item.CompanyEmail);
                            orderModels.OrderID = Convert.ToInt32(item.OrderID);
                            orderModels.OrderType = Convert.ToInt32(item.OrderType);
                            orderModels.DiliveryTime = Convert.ToString(item.DiliveryTime);
                            orderModels.TotalAmount = Convert.ToInt32(item.TotalAmount);
                            orderModels.TotalDue = Convert.ToInt32(item.TotalDue);
                            orderModels.OrderNo = Convert.ToString(item.OrderNo);
                            orderModels.OrderDate = Convert.ToString(item.OrderDate);
                            orderModels.ShipVia = Convert.ToString(item.ShipVia);
                            orderModels.GSTApply = Convert.ToInt32(item.GSTApply);
                            orderModels.freightcharge = Convert.ToInt32(item.freightcharge);
                            orderModels.OrderComments = Convert.ToString(item.OrderComments);
                            orderModels.OrderStatus = Convert.ToInt32(item.OrderStatus);
                            orderModels.IsPaid = Convert.ToBoolean(item.IsPaid);
                            orderModellistData.Add(orderModels);
                            Count = Count + 1;
                        }
                    }
                    orderModelModelList.OrderModelListData = orderModellistData;
                    orderModelModelList.Status = "True";
                    orderModelModelList.Message = String.Format("{0} record Found", Count);

                }
                catch (Exception ex)
                {
                    orderModelModelList.OrderModelListData = orderModellistData;
                    orderModelModelList.Status = "False";
                    orderModelModelList.Message = String.Format("{0} ", ex.Message);
                }
            }

            return orderModelModelList;
        }


        /// <summary>
        /// Insert Updat Order
        /// </summary>
        /// <param name="orderModel"></param>
        /// <returns></returns>
        public OrderModelList InsertUpdateOrder(OrderModel orderModel)
        {
            OrderModelList orderModelList = new OrderModelList();
            List<OrderModel> OrderModelListlistData = new List<OrderModel>();
            OrderModel orderModels = new OrderModel();

            using (APDBEntities db = new APDBEntities())
            {
                var data = db.usp_InsertUpdateOrder(orderModel.Flag, orderModel.CompanyId, orderModel.OrderID, orderModel.OrderDate, orderModel.OrderType,
                                                    orderModel.DiliveryTime, orderModel.TotalAmount, orderModel.TotalDue, orderModel.OrderNo, orderModel.ShipVia,
                                                    orderModel.GSTApply, orderModel.OrderComments, orderModel.freightcharge, orderModel.OrderStatus, orderModel.IsPaid, orderModel.Changeby);
                if (orderModel.Flag == "I")
                {
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            orderModel = new OrderModel();
                            orderModels.OrderID = Convert.ToInt32(item.Value);
                            OrderModelListlistData.Add(orderModels);

                        }
                    }
                }

                orderModelList.OrderModelListData = OrderModelListlistData;
                orderModelList.Status = "True";
                orderModelList.Message = "record Update Sucessfully";
            }
            return orderModelList;
        }

    }
}
