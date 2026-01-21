using AP.Common.Helper;
using System;
using System.Collections.Specialized;
using System.Net;

namespace AP.Admin.Models
{
    public class CommonConvertString
    {
        public class basemodel
        {
            public int status { get; set; }
            public string message { get; set; }
        }
        public class TokenModel
        {
            public string access_token { get; set; }
            public string token_type { get; set; }
        }

        public class UserLoginDetails
        {
            public string Userstatus { get; set; }
            public string UserMessage { get; set; }

        }
        public class accessBillDetail
        {
            public accessbill accessBillDetails { get; set; }

        }
        public class accessbill
        {
            public string CustomerID { get; set; }
            public string ClientID { get; set; }
            public string AccountNumber { get; set; }
            public string LastName { get; set; }
            public string AllowPaymentBy { get; set; }
            public string AllowConvenienceFee { get; set; }
            public string Username { get; set; }
            public string State { get; set; }
            public string InvoiceType { get; set; }
        }
        public class Branding
        {
            public clientBranding clientBranding { get; set; }

        }
        public class clientBranding
        {
            public string Logo { get; set; }
            public string Logourl { get; set; }
            public string ForegroundColor { get; set; }
            public string BackgroundColor { get; set; }
            public string BackgroundImage { get; set; }
            public string Font { get; set; }
            public string FontColor { get; set; }
        }

        /// <summary>
        /// Class Having Methods
        /// </summary>
        public class commonWebClientmethod
        {
            /// <summary>
            /// Common Method to Call WEB API Methods
            /// </summary>
            /// <param name="obj"></param>
            /// <param name="apipatth"></param>
            /// <param name="token"></param>
            /// <returns></returns>
            public string CommonWebClient(NameValueCollection obj, string apipatth)
            {
                string str = null;
                string url = System.Configuration.ConfigurationManager.AppSettings["apiURL"].ToString();
                try
                {
                    WebClient client = new WebClient();
                    byte[] response = client.UploadValues(url + apipatth, obj);
                    str = System.Text.Encoding.UTF8.GetString(response);
                }
                catch (Exception ex)
                {
                    NLogHelper.LogErrorMessage(Convert.ToString(ex));
                    str = "-1";
                }
                return str;
            }


        }

        /// <summary>
        /// Class To Keep API Names
        /// </summary>
        public class ApiName
        {
            #region "User Controller"
            public string GetUserDetail = "api/UserDetail/GetUserDetail";
            public string InsertUpdatUser = "api/UserDetail/InsertUpdatUser";
            public string UserLogin = "api/Login/UserLogin";
            public string ForgotPassword = "api/Login/ForgotPassword";
            #endregion

            #region "Company Controller"
            public string ImportCompany = "api/Company/ImportCompany";
            public string GetCompanyDetails = "api/Company/GetCompanyDetails";
            public string InsertUpdatecompanyDetail = "api/Company/InsertUpdatecompanyDetail";
            public string GetCompanyProduct = "api/Company/GetCompanyProduct";

            #endregion

            #region "WorkSheet Controller"
            public string InsertUpdateWorkSheet = "api/WorkSheet/InsertUpdateWorkSheet";
            public string GetWorkSheet = "api/WorkSheet/GetWorkSheet";
            #endregion

            #region "Order Controller"
            public string InsertUpdateOrder = "api/Order/InsertUpdateOrder";
            public string GetOrder = "api/Order/GetOrder";
            public string InsertUpdateOrderDetail = "api/Order/InsertUpdateOrderDetail";

            #endregion

            #region "Product Controller"
            public string GetProduct = "api/Product/GetProduct";
            public string InsertUpdateProduct = "api/Product/InsertUpdateProduct";
            #endregion

            #region "Product Type Controller"
            public string GetProductType = "api/Product/GetProductType";
            public string InsertUpdateProductType = "api/Product/InsertUpdateProductType";
            #endregion

            #region "Order Transaction"
            public string GetOrderTransaction = "api/OrderTransaction/GetOrderTransaction";
            public string InsertUpdateOrderTransaction = "api/OrderTransaction/InsertUpdateOrderTransaction";
            #endregion

            #region "Dashboard"
            public string GetDashboard = "api/Dashboard/GetDashboard";
            public string GetCompanyDashboard = "api/Dashboard/GetCompanyDashboard";

            #endregion


        }

        public class JobResult
        {
            public bool IsSuccess { get; set; }
            public string Code { get; set; }
            public string Message { get; set; }
        }

        public class ClientData
        {

            public string FTP_URI { get; set; }
            public string FTP_Username { get; set; }
            public string FTP_Password { get; set; }
            public string FTP_ExportDirectory { get; set; }
            public bool Export_IsFileEncrypted { get; set; }
            public string Export_FileFormat { get; set; }
            public string Export_FileDatePartFormat { get; set; }
            public string Export_FileType { get; set; }
            public string Export_FileDocumentType { get; set; }
            public string PGP_KeysDirectory { get; set; }
            public string PGP_PassPhrase { get; set; }
            public string Local_UploadDirectory { get; set; }
            public string PGP_PRIVATE_KEY_FILENAME { get; set; }
            public string PGP_PUBLIC_KEY_FILENAME { get; set; }
            public string PGP_CLIENT_PUBLIC_KEY_FILENAME { get; set; }
        }

    }
}
