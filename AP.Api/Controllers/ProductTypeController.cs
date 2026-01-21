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
    public class ProductTypeController : ApiController
    {

        IProductTypeServices  _productTypeServices;


        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        ProductTypeController(IProductTypeServices  productTypeServices)
        {
            try
            {
                _productTypeServices = productTypeServices;
            }
            catch (Exception ex)
            {
                logger.Error(Convert.ToString(ex));
            }
        }
        ProductTypeController()
        {
            try
            {
                _productTypeServices = new ProductTypeServices();
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }

        }


        [Route("api/Product/GetProductType")]
        [HttpPost]
        public ProductTypeModelList GetProductType(ProductTypeModel  productTypeModel)
        {
            ProductTypeModelList list = _productTypeServices.GetProductType(productTypeModel);
            return list;
        }

        [Route("api/Product/InsertUpdateProductType")]
        [HttpPost]
        public ProductTypeModelList InsertUpdateProductType(ProductTypeModel productTypeModel)
        {
            ProductTypeModelList list = _productTypeServices.InsertUpdateProductType(productTypeModel);
            return list;
        }

       
    }
}
