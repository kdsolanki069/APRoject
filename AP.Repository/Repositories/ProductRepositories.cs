using AP.Entity;
using AP.Model;
using AP.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Repository.Repositories
{
    public class ProductRepositories : IProductRepositories
    {

        /// <summary>
        /// Get Product
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>
        public ProductModelList GetProduct(ProductModel productModel)
        {

            ProductModelList productModelList = new ProductModelList();
            List<ProductModel>  productModellistData = new List<ProductModel>();
            ProductModel ProductModel = new ProductModel();
            int Count = 0;
            using (APDBEntities db = new APDBEntities())
            {
                try
                {
                    var data = db.usp_GetProduct(productModel.Flag,productModel.ProductID, productModel.ProductTypeId, productModel.ProductTypeName);
                    if (data != null)
                    {
                        foreach (var item in data)
                        {
                            ProductModel = new ProductModel();
                            ProductModel.ProductID = Convert.ToInt32(item.ProductID);
                            ProductModel.ProductTypeId = Convert.ToInt32(item.ProductTypeId);
                            ProductModel.ProductSize = Convert.ToString(item.ProductSize);
                            ProductModel.ProductX = Convert.ToString(item.ProductX);
                            ProductModel.ProductUw = Convert.ToString(item.ProductUw);
                            ProductModel.ProductGrade = Convert.ToString(item.ProductGrade);
                            ProductModel.ProductCode = Convert.ToString(item.ProductCode);
                            ProductModel.ProductTypeName = Convert.ToString(item.ProductTypeName);
                            ProductModel.ProductPhoto = Convert.ToString(item.ProductPhoto);
                            ProductModel.ProductPrice = Convert.ToInt32(item.ProductPrice);
                            ProductModel.ProductCompany = Convert.ToString(item.ProductCompany);
                            ProductModel.ProductAbrasive = Convert.ToString(item.ProductAbrasive);
                            ProductModel.ProductWeight = Convert.ToInt32(item.ProductWeight);
                            ProductModel.ProductQuality = Convert.ToString(item.ProductQuality);
                            ProductModel.ProductMovement = Convert.ToString(item.ProductMovement);
                            ProductModel.Type = Convert.ToString(item.Type);
                            productModellistData.Add(ProductModel);
                            Count = Count + 1;
                        }
                    }
                    productModelList.ProductListData = productModellistData;
                    productModelList.Status = "True";
                    productModelList.Message = String.Format("{0} record Found", Count);

                }
                catch (Exception ex)
                {
                    productModelList.ProductListData = productModellistData;
                    productModelList.Status = "True";
                    productModelList.Message = String.Format("{0} ", ex.Message);
                }
            }

            return productModelList;
        }


        /// <summary>
        /// Insert Updat Product
        /// </summary>
        /// <param name="productModel"></param>
        /// <returns></returns>
        public ProductModelList InsertUpdateProduct(ProductModel productModel)
        {
            ProductModelList productModelList = new ProductModelList();
            List<ProductModel> productModelListlistData = new List<ProductModel>();
            ProductModel productModels = new ProductModel();
            using (APDBEntities db = new APDBEntities())
            {
                var data = db.usp_InsertUpdateProduct(productModel.Flag, productModel.ProductID, productModel.ProductTypeId, productModel.ProductSize, productModel.ProductX,
                                                     productModel.ProductUw, productModel.ProductGrade, productModel.ProductCode, productModel.ProductPhoto, productModel.ProductPrice,
                                                     productModel.ProductCompany, productModel.ProductAbrasive, productModel.ProductWeight,
                                                     productModel.ProductQuality, productModel.ProductMovement, productModel.Changeby);           

               
                productModelList.Status = "True";
                productModelList.Message = "record Update Sucessfully";
            }
            return productModelList;
        }

    }
}
