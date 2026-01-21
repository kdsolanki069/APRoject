using RestSharp;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace AP.Sendinblue.Model
{
    public class Common
    {
        /// <summary>
        /// Class Having Methods
        /// </summary>
        public class commonWebClientmethod
        {


           /// <summary>
           /// 
           /// </summary>
           /// <param name="obj"></param>
           /// <param name="ApiName"></param>
           /// <returns></returns>
            public string CommonWebClient(string jsonstring,string ApiName)
            {
                string str = null;
                string SendinblueAPIKEY = ConfigurationSettings.AppSettings["SendinblueAPIKEY"].ToString();
                string SendinblueURL = ConfigurationSettings.AppSettings["SendinblueURL"].ToString();


                try
                {
                    RestClient client = new RestClient(SendinblueURL + ApiName);
                    var request = new RestRequest(SendinblueURL + ApiName ,Method.Post);
                    request.AddHeader("api-key", SendinblueAPIKEY);
                    request.AddHeader("Content-Type", "application/json");
                    request.AddParameter("undefined", jsonstring, ParameterType.RequestBody);
                    var response = client.Execute(request);
                    str = response.Content;

                    //WebClient client = new WebClient();
                    //client.Headers.Add("api-key", SendinblueAPIKEY);
                    //client.Headers.Add("Accept", "application/json");
                    //byte[] response = client.UploadValues(SendinblueURL + ApiName, "POST", obj);
                    //str = System.Text.Encoding.UTF8.GetString(response);
                }
                catch (Exception ex)
                {

                }
                return str;
            }


            /// <summary>
            /// Get Call
            /// </summary>
            /// <param name="apipatth"></param>
            /// <returns></returns>
            public string HttpGetAPICall(string apipatth)
            {
                string str = String.Empty;
                try
                {
                 
                    string SendinblueAPIKEY = ConfigurationSettings.AppSettings["SendinblueAPIKEY"].ToString();
                    string SendinblueURL = ConfigurationSettings.AppSettings["SendinblueURL"].ToString();
                    WebClient webClient = new WebClient();
                                       
                        webClient.Headers.Add("api-key", SendinblueAPIKEY);
                    str = webClient.DownloadString(SendinblueURL + apipatth);
                }
                catch (Exception ex)
                {
                    //str = "-1";
                    throw ex;
                }

                return str;
            }

        }

      
        public class ApiName
        {
            #region "Sendinblue SMTP"
            public string email = "/smtp/email";
            public string templates = "/smtp/templates";
            #endregion
        }




    }
       
    
}
