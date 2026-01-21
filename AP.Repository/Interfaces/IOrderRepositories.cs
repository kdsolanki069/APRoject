using AP.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Repository.Interfaces
{
    public interface IOrderRepositories
    {

        OrderModelList InsertUpdateOrder(OrderModel orderModel);
        OrderModelList GetOrder(OrderModel orderModel);
    }
}
