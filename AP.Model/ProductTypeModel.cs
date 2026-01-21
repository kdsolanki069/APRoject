using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
   public class ProductTypeModel :CommonModel
    {
        public int ProductTypeId { get; set; }
        public string Type { get; set; }
        public string ProductTypeName { get; set; }
        public string ProductTypeDetail { get; set; }
        public string FrontImage { get; set; }
        public string DiagramImage { get; set; }
        public string ProductTypeImage { get; set; }
        public bool ProductTypeActive { get; set; }

    }

    public class ProductTypeModelList : ResponseModel
    {
        public List<ProductTypeModel> ProductTypeModelListData { get; set; }
    }
}
