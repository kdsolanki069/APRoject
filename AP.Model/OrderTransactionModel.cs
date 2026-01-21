using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
  public class OrderTransactionModel : OrderDetailModel
    {
        
        public string OrderTransactionId { get; set; }
        public string BillNo { get; set; }
        public string Date { get; set; }
        public int SupplyQuantity { get; set; }
        public string OrderTransactionJson { get; set; }
        
    }

  public class OrderTransactionModelList : ResponseModel
    {
        public List<OrderTransactionModel> OrderTransactionModelListData { get; set; }
    }
}


     