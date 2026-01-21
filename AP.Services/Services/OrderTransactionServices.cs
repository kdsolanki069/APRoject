using AP.Model;
using AP.Notification.EmailNotification;
using AP.Services.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AP.Repository;
using AP.Repository.Repositories;
using AP.Repository.Interfaces;

namespace AP.Services.Services
{
    public class OrderTransactionServices : IOrderTransactionServices
    {

        OrderTransactionRepositories _orderTransactionRepositories;
        public OrderTransactionServices(OrderTransactionRepositories orderTransactionRepositories)
        {
            _orderTransactionRepositories = orderTransactionRepositories;

        }
        public OrderTransactionServices()
        {
            _orderTransactionRepositories = new OrderTransactionRepositories();
        }

        #region Property

        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        templateName templateName = new templateName();
        Common.Helper.RandomString randomString = new Common.Helper.RandomString();
        UserEmailNotification userEmailNotification = new UserEmailNotification();
        #endregion

        /// <summary>
        /// Insert Update Order Transaction Service
        /// </summary>
        /// <param name="orderTransactionModel"></param>
        /// <returns></returns>
        public OrderTransactionModelList InsertUpdateOrderTransaction(OrderTransactionModel orderTransactionModel)
        {
            OrderTransactionModelList orderTransactionModelList = new OrderTransactionModelList();         
            var st = JsonConvert.DeserializeObject<List<OrderTransactionModel>>(orderTransactionModel.OrderTransactionJson);
            orderTransactionModelList = _orderTransactionRepositories.InsertUpdateOrderTransaction(st, -1, orderTransactionModel.Flag);
            return orderTransactionModelList;
        }

        /// <summary>
        /// Get Order Transaction Service
        /// </summary>
        /// <param name="orderTransactionModel"></param>
        /// <returns></returns>
        public OrderTransactionModelList GetOrderTransaction(OrderTransactionModel orderTransactionModel)
        {
            OrderTransactionModelList orderTransactionModelList = new OrderTransactionModelList();
            orderTransactionModelList = _orderTransactionRepositories.GetOrderTransaction(orderTransactionModel);
            return orderTransactionModelList;
        }
    

    }
}
