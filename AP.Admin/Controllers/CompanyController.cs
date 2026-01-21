using AP.Admin.Models;
using AP.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.Data.OleDb;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Xml;

namespace AP.Admin.Controllers
{

    public class CompanyController : Controller
    {

        #region "Global Variables"

        CommonConvertString.commonWebClientmethod objclient = new CommonConvertString.commonWebClientmethod();
        CommonConvertString.ApiName objapi = new CommonConvertString.ApiName();
        NameValueCollection objname = new NameValueCollection();
        string str = "";
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        #endregion
        // GET: Company
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult List()
        {
            return View();
        }
        public ActionResult CompanyDashboard()
        {
            return View();
        }

        [HttpPost()]
        public string GetCompanyDashboard(AP.Model.CompanyDetailModel companyDetailModel)
        {

            try
            {
                objname.Add("CompanyId", Convert.ToString(companyDetailModel.CompanyId));
                str = objclient.CommonWebClient(objname, objapi.GetCompanyDashboard);
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
        public string GetCompanyProduct(AP.Model.CompanyDetailModel companyDetailModel)
        {
            try
            {
                objname.Add("CompanyId", Convert.ToString(companyDetailModel.CompanyId));
                str = objclient.CommonWebClient(objname, objapi.GetCompanyProduct);
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
        public ActionResult ImportCompany(HttpPostedFileBase cfile)
        {
            DataSet ds = new DataSet();
            if (Request.Files["cfile"].ContentLength > 0)
            {
                string fileExtension = System.IO.Path.GetExtension(Request.Files["cfile"].FileName);

                if (fileExtension == ".xls" || fileExtension == ".xlsx")
                {
                    string fileLocation = Server.MapPath("~/Content/") + Request.Files["cfile"].FileName;
                    if (System.IO.File.Exists(fileLocation))
                    {

                        System.IO.File.Delete(fileLocation);
                    }
                    Request.Files["cfile"].SaveAs(fileLocation);
                    string excelConnectionString = string.Empty;
                    excelConnectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";
                    //connection String for xls file format.
                    if (fileExtension == ".xls")
                    {
                        excelConnectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 8.0;HDR=Yes;IMEX=2\"";
                    }
                    //connection String for xlsx file format.
                    else if (fileExtension == ".xlsx")
                    {

                        excelConnectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";
                    }
                    //Create Connection to Excel work book and add oledb namespace
                    OleDbConnection excelConnection = new OleDbConnection(excelConnectionString);
                    excelConnection.Open();
                    DataTable dt = new DataTable();

                    dt = excelConnection.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
                    if (dt == null)
                    {
                        return null;
                    }

                    String[] excelSheets = new String[dt.Rows.Count];
                    int t = 0;
                    //excel data saves in temp file here.
                    foreach (DataRow row in dt.Rows)
                    {
                        excelSheets[t] = row["TABLE_NAME"].ToString();
                        t++;
                    }
                    OleDbConnection excelConnection1 = new OleDbConnection(excelConnectionString);


                    string query = string.Format("Select * from [{0}]", excelSheets[0]);
                    using (OleDbDataAdapter dataAdapter = new OleDbDataAdapter(query, excelConnection1))
                    {
                        dataAdapter.Fill(ds);
                    }
                }
                if (fileExtension.ToString().ToLower().Equals(".xml"))
                {
                    string fileLocation = Server.MapPath("~/Content/") + Request.Files["FileUpload"].FileName;
                    if (System.IO.File.Exists(fileLocation))
                    {
                        System.IO.File.Delete(fileLocation);
                    }

                    Request.Files["FileUpload"].SaveAs(fileLocation);
                    XmlTextReader xmlreader = new XmlTextReader(fileLocation);
                    // DataSet ds = new DataSet();
                    ds.ReadXml(xmlreader);
                    xmlreader.Close();
                }

                DataTable dtImportCompany = ds.Tables[0];

                List<CompanyDetailModel> CompanyDetailList = new List<CompanyDetailModel>();
                CompanyDetailList = (from DataRow dr in dtImportCompany.Rows
                                     select new CompanyDetailModel()
                                     {
                                         CompanyName = dr["Name"].ToString(),
                                         CompanyAddress = dr["Address"].ToString(),
                                         Companycountry = dr["country"].ToString(),
                                         CompanyState = dr["State"].ToString(),
                                         CompanyGST = dr["GSTN"].ToString()
                                     }).ToList();
                var jsonSerialiser = new JavaScriptSerializer();
                var json = jsonSerialiser.Serialize(CompanyDetailList);
                try
                {
                    objname.Add("Flag", "Import");
                    objname.Add("CompanyDetailModeljsonstring", Convert.ToString(json));
                    str = objclient.CommonWebClient(objname, objapi.ImportCompany);
                }
                catch (Exception ex)
                {
                    str = "-1";
                    //  logger.Error(Convert.ToString(ex));
                    logger.Error(Convert.ToString(ex));
                }


            }
            return RedirectToAction("List");
        }



        [HttpPost()]
        public string InsertUpdatecompanyDetail(AP.Model.CompanyDetailModel companyDetailModel)
        {
            try
            {
                objname.Add("Flag", Convert.ToString(companyDetailModel.Flag));
                objname.Add("CompanyName", Convert.ToString(companyDetailModel.CompanyName));
                objname.Add("CompanyAddress", Convert.ToString(companyDetailModel.CompanyAddress));
                objname.Add("Companycountry", Convert.ToString(companyDetailModel.Companycountry));
                objname.Add("CompanyState", Convert.ToString(companyDetailModel.CompanyState));
                objname.Add("CompanyPinCode", Convert.ToString(companyDetailModel.CompanyPinCode));
                objname.Add("CompanyPhone", Convert.ToString(companyDetailModel.CompanyPhone));
                objname.Add("CompanyGST", Convert.ToString(companyDetailModel.CompanyGST));
                objname.Add("CompanyEmail", Convert.ToString(companyDetailModel.CompanyEmail));
                objname.Add("CompanyId", Convert.ToString(companyDetailModel.CompanyId));
                objname.Add("ContactPersonName", Convert.ToString(companyDetailModel.ContactPersonName));
                str = objclient.CommonWebClient(objname, objapi.InsertUpdatecompanyDetail);
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
        public string GetCompanyDetails(AP.Model.CompanyDetailModel companyDetailModel)
        {
            try
            {
                objname.Add("Flag", "S");
                objname.Add("CompanyId", Convert.ToString(companyDetailModel.CompanyId));
                str = objclient.CommonWebClient(objname, objapi.GetCompanyDetails);
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
        public string Print(PrintModel print)
        {
            try
            {
                // Deserialize company list
                var companyDetailModellist = JsonConvert.DeserializeObject<List<CompanyDetailModel>>(print.companyDetailModelliststring);
                print.companyDetailModellist = companyDetailModellist;

                // Load base HTML template
                string addressHtmlPath = Server.MapPath("~/Content/AddressHTML.html");
                string addressHTML = System.IO.File.ReadAllText(addressHtmlPath);
                StringBuilder htmlBuilder = new StringBuilder();

                int index = 0;
                int total = print.companyDetailModellist.Count;

                foreach (var companyDetail in print.companyDetailModellist)
                {
                    // Open <tr> for every 2 records
                    if (index % 2 == 0)
                    {
                        htmlBuilder.Append("<tr>");
                    }

                    // Select template
                    string itemTemplatePath =
                        print.Printtype == "1"
                            ? Server.MapPath("~/Content/AddressString.html")
                            : Server.MapPath("~/Content/Addresscover.html");

                    string itemHtml = System.IO.File.ReadAllText(itemTemplatePath);

                    // Address
                    string addressData =$"{companyDetail.CompanyAddress}-{companyDetail.CompanyPinCode}".Replace(",,", " ");

                    itemHtml = itemHtml.Replace("[CompanyAddress]", addressData);
                    itemHtml = itemHtml.Replace("[CompanyAddress1]",$"({companyDetail.CompanyState}) {companyDetail.Companycountry}");

                    // Phone
                    if (!string.IsNullOrEmpty(companyDetail.CompanyPhone))
                    {
                        var phones = Regex.Split(companyDetail.CompanyPhone, ",,");
                        itemHtml = itemHtml.Replace("[CompanyPhone1]", phones[0].Trim());
                        itemHtml = itemHtml.Replace("[CompanyPhone2]",phones.Length > 1 ? phones[1].Trim() : " ");
                    }
                    else
                    {
                        itemHtml = itemHtml.Replace("[CompanyPhone1]", " ");
                        itemHtml = itemHtml.Replace("[CompanyPhone2]", " ");
                    }

                    // Company name
                    itemHtml = itemHtml.Replace("[CompanyName]",companyDetail.CompanyName?.Trim() ?? string.Empty);

                    // Append TD HTML
                    htmlBuilder.Append(itemHtml);

                    // Close </tr> after 2 records or last record
                    if (index % 2 == 1 || index == total - 1)
                    {
                        htmlBuilder.Append("</tr>");
                    }
                    index++;
                }

                // Inject dynamic table rows
                addressHTML = addressHTML.Replace("[Address]", htmlBuilder.ToString());

                // Replace domain placeholder
                string domain = Request.Url?.GetLeftPart(UriPartial.Authority) ?? string.Empty;
                addressHTML = addressHTML.Replace("[Domain]", domain);
                // Return as JSON
                var responseModel = new ResponseModel
                {
                    Message = addressHTML
                };

                return new JavaScriptSerializer().Serialize(responseModel);
            }
            catch (Exception ex)
            {
                logger.Error(ex.ToString());
                return "-1";
            }
        }




    }
}
