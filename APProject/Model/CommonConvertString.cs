using AP.Common.Helper;
using System;
using System.Collections.Specialized;
using System.Net;

namespace APProject.Model
{
    public class CommonConvertString
    {
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
            public string InsertUpdateProductType = "api/Product/InsertUpdatProductType";
            public string SendMessage = "api/Email/SendMessage";


            #endregion


        }
    }
}
