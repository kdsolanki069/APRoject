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
    public class OrderController : ApiController
    {
        IOrderServices _orderServices;
        IOrderDetailServices _orderDetailServices;

        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        OrderController(IOrderServices orderServices, IOrderDetailServices orderDetailServices)
        {
            try
            {
                _orderServices = orderServices;
                _orderDetailServices = orderDetailServices;
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }
        }
        OrderController()
        {
            try
            {

                _orderServices = new OrderServices();
                _orderDetailServices = new OrderDetailServices();
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }

        }


        [Route("api/Order/InsertUpdateOrder")]
        [HttpPost]
        public OrderModelList InsertUpdateOrder(OrderModel orderModel)
        {
            OrderModelList list = _orderServices.InsertUpdateOrder(orderModel);
            return list;
        }

        [Route("api/Order/GetOrder")]
        [HttpPost]
        public OrderModelList GetOrder(OrderModel orderModel)
        {
            OrderModelList list = _orderServices.GetOrder(orderModel);
            return list;
        }

        
        [Route("api/Order/InsertUpdateOrderDetail")]
        [HttpPost]
        public OrderDetailModelList InsertUpdateOrderDetail(OrderDetailModel orderDetailModel)
        {
            OrderDetailModelList list = _orderDetailServices.InsertUpdateOrderDetail(orderDetailModel);
            return list;
        }
    }
}
