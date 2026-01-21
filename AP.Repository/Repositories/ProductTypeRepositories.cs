using AP.Entity;
using AP.Model;
using AP.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AP.Repository.Repositories
{
   public class ProductTypeRepositories : IProductTypeRepositories
    {
        /// <summary>
        /// Get Product Type
        /// </summary>
        /// <param name="productTypeModel"></param>
        /// <returns></returns>
        public ProductTypeModelList GetProductType(ProductTypeModel productTypeModel)
        {

            ProductTypeModelList productTypeModelList = new ProductTypeModelList();
            List<ProductTypeModel> productTypeModellistData = new List<ProductTypeModel>();
            ProductTypeModel productTypeModels = new ProductTypeModel();
            int Count = 0;
            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetProductType(productTypeModel.Flag,productTypeModel.ProductTypeId, productTypeModel.Type, productTypeModel.ProductTypeName);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            productTypeModels = new ProductTypeModel();
                            productTypeModels.ProductTypeId = Convert.ToInt32(item.ProductTypeId);
                            productTypeModels.Type = Convert.ToString(item.Type);
                            productTypeModels.ProductTypeDetail = Convert.ToString(item.ProductTypeDetail);
                            productTypeModels.ProductTypeName = Convert.ToString(item.ProductTypeName);
                            productTypeModels.FrontImage = Convert.ToString(item.FrontImage);
                            productTypeModels.DiagramImage = Convert.ToString(item.DiagramImage);
                            productTypeModels.ProductTypeImage = Convert.ToString(item.ProductTypeImage);                           
                            productTypeModellistData.Add(productTypeModels);
                            Count = Count + 1;
                        }
                    }
                    productTypeModelList.ProductTypeModelListData = productTypeModellistData;
                    productTypeModelList.Status = "True";
                    productTypeModelList.Message = String.Format("{0} record Found", Count);

                }
                catch (Exception ex)
                {
                    productTypeModelList.ProductTypeModelListData = productTypeModellistData;
                    productTypeModelList.Status = "True";
                    productTypeModelList.Message = String.Format("{0} ", ex.Message);
                }
            }

            return productTypeModelList;
        }


        /// <summary>
        /// Insert Updat Product Type
        /// </summary>
        /// <param name="productTypeModels"></param>
        /// <returns></returns>
        public ProductTypeModelList InsertUpdateProductType(ProductTypeModel productTypeModels)
        {
            ProductTypeModelList productTypeModelList = new ProductTypeModelList();
            List<ProductTypeModel> productModelListlistData = new List<ProductTypeModel>();
            ProductTypeModel productTypeModel = new ProductTypeModel();
            using (APDBEntities db = new APDBEntities())
            {
                var data = db.usp_InsertUpdateProductType(productTypeModels.Flag, productTypeModels.ProductTypeId, productTypeModels.Type,
                                                        productTypeModels.ProductTypeName, productTypeModels.ProductTypeDetail, productTypeModels.FrontImage,
                                                        productTypeModels.DiagramImage, productTypeModels.ProductTypeImage, productTypeModels.Changeby);


                productTypeModelList.Status = "True";
                productTypeModelList.Message = "record Update Sucessfully";
            }
            return productTypeModelList;
        }       
    }
}