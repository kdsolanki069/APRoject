using AP.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Repository.Interfaces
{
    public interface IOrderDetailRepositories
    {
         OrderDetailModelList GetOrderDetail(OrderDetailModel orderDetailModel);
         OrderDetailModelList InsertUpdateOrderDetail(List<OrderDetailModel> orderDetailModel, int Createdby, string Flag);

    }
}
