using AP.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Services.Interfaces
{
  public  interface IOrderDetailServices
    {
        OrderDetailModelList InsertUpdateOrderDetail(OrderDetailModel orderDetailModel);
        OrderDetailModelList GetOrderDetail(OrderDetailModel orderDetailModel);
       
    }
}
