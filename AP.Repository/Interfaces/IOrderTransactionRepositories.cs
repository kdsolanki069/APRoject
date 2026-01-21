using AP.Model;
using System.Collections.Generic;

namespace AP.Repository.Interfaces
{
    public interface IOrderTransactionRepositories
    {
        OrderTransactionModelList GetOrderTransaction(OrderTransactionModel orderTransactionModel);
        OrderTransactionModelList InsertUpdateOrderTransaction(List<OrderTransactionModel> orderTransactionModels, int Createdby, string Flag);

    }
}
