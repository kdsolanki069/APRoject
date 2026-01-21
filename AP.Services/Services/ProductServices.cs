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
   public class ProductServices : IProductServices
    {
        ProductRepositories _productRepositories;
        public ProductServices(ProductRepositories productRepositories)
        {
            _productRepositories = productRepositories;

        }
        public ProductServices()
        {
            _productRepositories = new ProductRepositories ();
        }

        #region Property

        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        templateName templateName = new templateName();
        Common.Helper.RandomString randomString = new Common.Helper.RandomString();
        UserEmailNotification userEmailNotification = new UserEmailNotification();
        #endregion

        /// <summary>
        /// Get Product Services Call
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>
        public ProductModelList GetProduct(ProductModel productModel)
        {
            ProductModelList productModelList = new ProductModelList();
            productModelList = _productRepositories.GetProduct(productModel);
            return productModelList;
        }

        /// <summary>
        /// Insert Updat Product Services Call
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>
        public ProductModelList InsertUpdateProduct(ProductModel productModel)
        {
            ProductModelList productModelList = new ProductModelList();
            productModelList = _productRepositories.InsertUpdateProduct(productModel);
            return productModelList;
        }

      
    }
}
