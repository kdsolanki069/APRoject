using AP.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Services.Interfaces
{
  public interface IProductServices
    {
        ProductModelList GetProduct(ProductModel productModel);
        ProductModelList InsertUpdateProduct(ProductModel productModel);

    }
}
