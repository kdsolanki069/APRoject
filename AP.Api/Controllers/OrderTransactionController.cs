using AP.Model;
using AP.Services.Interfaces;
using AP.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AP.Api.Controllers
{
    public class OrderTransactionController : ApiController
    {
        IOrderTransactionServices _orderTransactionServices;
      

        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        OrderTransactionController(IOrderTransactionServices orderTransactionServices)
        {
            try
            {
                _orderTransactionServices = orderTransactionServices;              
            }
            catch (Exception ex)
            {
                logger.Error(Convert.ToString(ex));
            }
        }
        OrderTransactionController()
        {
            try
            {

                _orderTransactionServices = new OrderTransactionServices();
                
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }

        }

        [Route("api/OrderTransaction/GetOrderTransaction")]
        [HttpPost]
        public OrderTransactionModelList GetOrderTransaction(OrderTransactionModel  orderTransactionModel)
        {
            OrderTransactionModelList list = _orderTransactionServices.GetOrderTransaction(orderTransactionModel);
            return list;
        }


        [Route("api/OrderTransaction/InsertUpdateOrderTransaction")]
        [HttpPost]
        public OrderTransactionModelList InsertUpdateOrderTransaction(OrderTransactionModel orderTransactionModel)
        {
            OrderTransactionModelList list = _orderTransactionServices.InsertUpdateOrderTransaction(orderTransactionModel);
            return list;
        }
    }
}
