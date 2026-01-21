using AP.Model;
using AP.Notification.EmailNotification;
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
   public class OrderDetailServices : IOrderDetailServices
    {

        OrderDetailRepositories _orderDetailRepositories;
        public OrderDetailServices(OrderDetailRepositories orderDetailRepositories)
        {
            _orderDetailRepositories = orderDetailRepositories;

        }
        public OrderDetailServices()
        {
            _orderDetailRepositories = new OrderDetailRepositories();
        }

        #region Property

        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        templateName templateName = new templateName();
        Common.Helper.RandomString randomString = new Common.Helper.RandomString();
        UserEmailNotification userEmailNotification = new UserEmailNotification();
        #endregion

        public OrderDetailModelList InsertUpdateOrderDetail(OrderDetailModel  orderDetailModel)
        {
            OrderDetailModelList orderDetailModelList = new OrderDetailModelList();
            List<CompanyDetailModel> CompanyDetailModelListdata = new List<CompanyDetailModel>();

            var st = JsonConvert.DeserializeObject<List<OrderDetailModel>>(orderDetailModel.orderDetailModeljsonstring);           
            orderDetailModelList = _orderDetailRepositories.InsertUpdateOrderDetail(st, -1, orderDetailModel.Flag);
          

            return orderDetailModelList;
        }


        public OrderDetailModelList GetOrderDetail(OrderDetailModel orderDetailModel)
        {
            OrderDetailModelList orderDetailModelList = new OrderDetailModelList();
            orderDetailModelList = _orderDetailRepositories.GetOrderDetail(orderDetailModel);
            return orderDetailModelList;
        }
       


    }
}
