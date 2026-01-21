using AP.Model;
using AP.Services.Interfaces;
using AP.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AP.Api.Controllers
{
    public class ProductController : ApiController
    {
        IProductServices _productServices;
        

        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        ProductController(IProductServices productServices)
        {
            try
            {
                _productServices = productServices;
            }
            catch (Exception ex)
            {
                logger.Error(Convert.ToString(ex));
            }
        }
        ProductController()
        {
            try
            {
                _productServices = new ProductServices();
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }

        }


        [Route("api/Product/GetProduct")]
        [HttpPost]
        public ProductModelList GetProduct(ProductModel productModel)
        {
            ProductModelList list = _productServices.GetProduct(productModel);
            return list;
        }

        [Route("api/Product/InsertUpdateProduct")]
        [HttpPost]
        public ProductModelList InsertUpdateProduct(ProductModel productModel)
        {
            ProductModelList list = _productServices.InsertUpdateProduct(productModel);
            return list;
        }
    }
}
