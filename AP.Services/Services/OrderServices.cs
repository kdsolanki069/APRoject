using AP.Model;
using AP.Repository.Repositories;
using AP.Services.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Services.Services
{
    public class OrderServices : IOrderServices
    {
        OrderRepositories _orderRepositories;
        OrderDetailRepositories _orderDetailRepositories;
        public OrderServices(OrderRepositories orderRepositories, OrderDetailRepositories orderDetailRepositories)
        {
            _orderRepositories = orderRepositories;
            _orderDetailRepositories = orderDetailRepositories;

        }
        public OrderServices()
        {
            _orderRepositories = new OrderRepositories();
            _orderDetailRepositories = new OrderDetailRepositories();
        }
      
        public OrderModelList GetOrder(OrderModel orderModel)
        {
            OrderModelList orderModelList = new OrderModelList();
            orderModelList = _orderRepositories.GetOrder(orderModel);
            if (orderModel.OrderID!=-1)
            {
                OrderDetailModel orderDetailModel = new OrderDetailModel();
                orderDetailModel.OrderID = orderModel.OrderID;
                orderDetailModel.Flag = orderModel.Flag;
                OrderDetailModelList orderDetailModelList = new OrderDetailModelList();
                orderDetailModelList = _orderDetailRepositories.GetOrderDetail(orderDetailModel);
                orderModelList.OrderModelListData[0].orderDetailModelList = orderDetailModelList.OrderDetailModelListData;
            }
            return orderModelList;
        }

        public OrderModelList InsertUpdateOrder(OrderModel orderModel)
        {
            OrderModelList orderModelList = new OrderModelList();
            orderModelList = _orderRepositories.InsertUpdateOrder(orderModel);
            OrderDetailModel orderDetailModel = new OrderDetailModel();       
            if (orderModel.Flag == "I")
            {
                orderModel.OrderID = orderModelList.OrderModelListData[0].OrderID;
                orderDetailModel.OrderID = orderModel.OrderID;
                var st = JsonConvert.DeserializeObject<List<OrderDetailModel>>(orderModel.orderDetailModelListString);
                orderDetailModel.orderDetailModelList = st;
                st[0].OrderID = orderModel.OrderID;
                 _orderDetailRepositories.InsertUpdateOrderDetail(st, -1, orderModel.Flag);
            }
           
            return orderModelList;
        }
       
    }
}
