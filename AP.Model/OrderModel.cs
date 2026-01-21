using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
    public class OrderModel : CompanyDetailModel
    {
        public int OrderID { get; set; }
        public string OrderDate { get; set; }       
        public int OrderType { get; set; }
        public string DiliveryTime { get; set; }
        public int TotalAmount { get; set; }
        public int TotalDue { get; set; }
        public string OrderNo { get; set; }
        public string ShipVia { get; set; }
        public int GSTApply { get; set; }
        public string OrderComments { get; set; }
        public int freightcharge { get; set; }
        public bool IsPaid { get; set; }        
        public int OrderStatus { get; set; } 
        public List<OrderDetailModel> orderDetailModelList { get; set; }
        public string orderDetailModelListString { get; set; }
    }






    public class OrderModelList : ResponseModel
    {
        public List<OrderModel> OrderModelListData { get; set; }
    }

    
}
