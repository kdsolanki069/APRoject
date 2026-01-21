using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
    public class OrderDetailModel : OrderModel
    {
        public int OrderDetailID { get; set; }
        public string ProductDetail { get; set; }
        public int Quantity { get; set; }
        public int RemainingQuantity { get; set; }

        public int ProductPrice { get; set; }
        public int OLDProductPrice { get; set; }

        public string orderDetailModeljsonstring { get; set; }


    }

    public class OrderDetailModelList : ResponseModel
    {
        public List<OrderDetailModel> OrderDetailModelListData { get; set; }
    }
}
