using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
     public class ProductModel : ProductTypeModel
    {   
        public int ProductID { get; set; }  
        public string ProductSize { get; set; }
        public string ProductX { get; set; }
        public string ProductUw { get; set; }
        public string ProductGrade { get; set; }
        public string ProductCode { get; set; }        
        public string ProductPhoto { get; set; }
        public int ProductPrice { get; set; }
        public string ProductCompany { get; set; }
        public string ProductAbrasive { get; set; }
        public int ProductWeight { get; set; }
        public string ProductQuality { get; set; }
        public string ProductMovement { get; set; }
        public bool ProductActive { get; set; }
    }


    public class ProductModelList : ResponseModel
    {
        public List<ProductModel> ProductListData { get; set; }
    }
}    
