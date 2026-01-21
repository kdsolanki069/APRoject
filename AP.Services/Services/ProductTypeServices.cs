using AP.Model;
using AP.Notification.EmailNotification;
using AP.Repository.Repositories;
using AP.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Services.Services
{
   public class ProductTypeServices : IProductTypeServices
    {

        ProductTypeRepositories _productTypeRepositories;
        public ProductTypeServices(ProductTypeRepositories  productTypeRepositories)
        {
            _productTypeRepositories = productTypeRepositories;

        }
        public ProductTypeServices()
        {
            _productTypeRepositories = new ProductTypeRepositories();
        }

        #region Property

        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        templateName templateName = new templateName();
        Common.Helper.RandomString randomString = new Common.Helper.RandomString();
        UserEmailNotification userEmailNotification = new UserEmailNotification();
        #endregion
      
        /// <summary>
        /// Get Product Type
        /// </summary>
        /// <param name="productTypeModel"></param>
        /// <returns></returns>
        public ProductTypeModelList GetProductType(ProductTypeModel  productTypeModel)
        {
            ProductTypeModelList productModelList = new ProductTypeModelList();
            productModelList = _productTypeRepositories.GetProductType(productTypeModel);
            return productModelList;
        }

        /// <summary>
        /// Insert Updat Product Type
        /// </summary>
        /// <param name="productTypeModel"></param>
        /// <returns></returns>
        public ProductTypeModelList InsertUpdateProductType(ProductTypeModel productTypeModel)
        {
            ProductTypeModelList productModelList = new ProductTypeModelList();
            productModelList = _productTypeRepositories.InsertUpdateProductType(productTypeModel);
            return productModelList;
        }

    }
}
