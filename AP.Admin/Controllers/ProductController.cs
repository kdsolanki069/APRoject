using AP.Admin.Models;
using AP.Common.Helper;
using FluentFTP;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.FtpClient;
using System.Web;
using System.Web.Mvc;
using static AP.Admin.Models.CommonConvertString;
using FtpClient = FluentFTP.FtpClient;

namespace AP.Admin.Controllers
{
    public class ProductController : Controller
    {
        #region "Global Variables"

        CommonConvertString.commonWebClientmethod objclient = new CommonConvertString.commonWebClientmethod();
        CommonConvertString.ApiName objapi = new CommonConvertString.ApiName();
        NameValueCollection objname = new NameValueCollection();
        string str = "";
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        #endregion

        // GET: Product
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Add()
        {
            return View();
        }
        public ActionResult Type()
        {
            return View();
        }
        public ActionResult TypeAdd()
        {
            return View();
        }
        public ActionResult TypeEdit()
        {
            return View();
        }
        public ActionResult Edit()
        {
            return View();
        }
        public ActionResult List()
        {
            return View();
        }

        [HttpPost()]
        public string InsertUpdateProduct(AP.Model.ProductModel productModel)
        {
            try
            {
                objname.Add("Flag", Convert.ToString(productModel.Flag));
                objname.Add("ProductID", Convert.ToString(productModel.ProductID));
                objname.Add("ProductTypeId", Convert.ToString(productModel.ProductTypeId));
                objname.Add("ProductSize", Convert.ToString(productModel.ProductSize));
                objname.Add("ProductX", Convert.ToString(productModel.ProductX));
                objname.Add("ProductUw", Convert.ToString(productModel.ProductUw));
                objname.Add("ProductGrade", Convert.ToString(productModel.ProductGrade));
                objname.Add("ProductCode", Convert.ToString(productModel.ProductCode));                
                objname.Add("ProductPhoto", Convert.ToString(productModel.ProductPhoto));
                objname.Add("ProductPrice", Convert.ToString(productModel.ProductPrice));
                objname.Add("ProductCompany", Convert.ToString(productModel.ProductCompany));
                objname.Add("ProductAbrasive", Convert.ToString(productModel.ProductAbrasive));
                objname.Add("ProductWeight", Convert.ToString(productModel.ProductWeight));
                objname.Add("ProductQuality", Convert.ToString(productModel.ProductQuality));
                objname.Add("ProductMovement", Convert.ToString(productModel.ProductMovement));               
                objname.Add("ProductActive", Convert.ToString(productModel.ProductActive));
                objname.Add("Changeby", Convert.ToString(productModel.Changeby));            
                str = objclient.CommonWebClient(objname, objapi.InsertUpdateProduct);
            }
            catch (Exception ex)
            {
                str = "-1";
                //  logger.Error(Convert.ToString(ex));
                logger.Error(Convert.ToString(ex));
            }
            return str;
        }


        [HttpPost()]
        public string GetProduct(AP.Model.ProductModel productModel)
        {
            try
            {
                objname.Add("Flag", productModel.Flag);
                objname.Add("ProductID", Convert.ToString(productModel.ProductID));
               
                str = objclient.CommonWebClient(objname, objapi.GetProduct);
            }
            catch (Exception ex)
            {
                str = "-1";
                //  logger.Error(Convert.ToString(ex));
                logger.Error(Convert.ToString(ex));
            }
            return str;
        }


        [HttpPost()]
        public string GetProductType(AP.Model.ProductTypeModel productTypeModel)
        {
            try
            {
                objname.Add("Flag", productTypeModel.Flag);
                objname.Add("ProductTypeId", Convert.ToString(productTypeModel.ProductTypeId));
                objname.Add("Type", Convert.ToString(productTypeModel.Type));
                objname.Add("ProductTypeName", Convert.ToString(productTypeModel.ProductTypeName));

                str = objclient.CommonWebClient(objname, objapi.GetProductType);
            }
            catch (Exception ex)
            {
                str = "-1";
                //  logger.Error(Convert.ToString(ex));
                logger.Error(Convert.ToString(ex));
            }
            return str;
        }


        [HttpPost()]
        public string InsertUpdateProductType(AP.Model.ProductTypeModel productTypeModel)
        {
            try
            {
                objname.Add("Flag", Convert.ToString(productTypeModel.Flag));
                objname.Add("ProductTypeId", Convert.ToString(productTypeModel.ProductTypeId));
                objname.Add("Type", Convert.ToString(productTypeModel.Type));
                objname.Add("ProductTypeName", Convert.ToString(productTypeModel.ProductTypeName));
                objname.Add("FrontImage", Convert.ToString(productTypeModel.FrontImage));
                objname.Add("DiagramImage", Convert.ToString(productTypeModel.DiagramImage));
                objname.Add("ProductTypeImage", Convert.ToString(productTypeModel.ProductTypeImage));
                objname.Add("ProductTypeDetail", Convert.ToString(productTypeModel.ProductTypeDetail));
                objname.Add("Changeby", Convert.ToString(productTypeModel.Changeby));
                objname.Add("ProductTypeActive", Convert.ToString(productTypeModel.ProductTypeActive));
                str = objclient.CommonWebClient(objname, objapi.InsertUpdateProductType);
            }
            catch (Exception ex)
            {
                str = "-1";
                //  logger.Error(Convert.ToString(ex));
                logger.Error(Convert.ToString(ex));
            }
            return str;
        }

        [HttpPost]
        public string ProductTypePhoto()
        {
            string ProductType = Request["ProductType"];
            string FileType = Request["FileType"];
            string filename = "";
            string FilePath = "~/Content/ProductType/" + ProductType; 
            if (Request.Files.Count > 0)
            {
                try
                {
                    HttpFileCollectionBase files = Request.Files;
                    filename= UploadFiles(files,FilePath,FileType, ProductType);
                }
                catch (Exception ex)
                {
                    str = "-1";
                    logger.Error(Convert.ToString(ex));
                }
            }
            return filename;
        }



        public string UploadFiles(HttpFileCollectionBase files,string FilePath,string FileType, string ProductType)
        {
            bool folderExists = Directory.Exists(Server.MapPath(FilePath));
            if (!folderExists) { 
              Directory.CreateDirectory(Server.MapPath(FilePath));
            }
            
            files = Request.Files;
            int FileenameCount = 0;
            string Finename = "";
            if (FileType =="F")
            {
                FileenameCount = 1;
            }
            if (FileType == "D")
            {
                FileenameCount = 2;
            }
            if (FileType == "P")
            {
                FileenameCount = 3;
            }
            for (int i = 0; i < files.Count; i++)
            {
                HttpPostedFileBase file = files[i];
                string fname;
                string filename = FileenameCount + ".jpg";
                          
                // Get the complete folder path and store the file inside it.      
                fname = Path.Combine(Server.MapPath(FilePath), filename);
                file.SaveAs(fname);

                UploadeFiletoftp(filename, FilePath, ProductType);
                if (Finename=="")
                {
                    Finename = FileenameCount + ".jpg";                   
                }
                else
                {
                    Finename = Finename + "," + FileenameCount + ".jpg";
                }
                FileenameCount = FileenameCount + 1;
            }
            return Finename;
        }


        public JobResult UploadeFiletoftp( string Filename, string FilePath, string ProductType)
        {
            JobResult res = new JobResult();
            try
            {               
               
                FtpClient client = new FtpClient();
                client.Host =  "your Host";
                client.Credentials = new NetworkCredential("your User", "Your Pass");
                client.Connect();

                // upload a file

                string Filepath = "/Content/ProductType/" + ProductType;
               if (!client.DirectoryExists(Filepath))
                {
                    client.CreateDirectory(Filepath);
                }
                string localpath = Path.Combine(Server.MapPath(FilePath), Filename);
                string serverpath = "/Content/ProductType/"+ ProductType+"/"+ Filename;
               
                    
                    client.UploadFile(localpath, serverpath);
            }
            catch (Exception ex)
            {

                NLogHelper.Log(LOG_LEVEL.WARNING, string.Format("Issue uploading eSuppression file in UploadeFiletoFTP().Error msg:{0}.", ex.Message));

            }
            return res;
        }
    }
}
