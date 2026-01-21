using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AP.Model;
using AP.Sendinblue.Model;
using System.Web.Script.Serialization;

namespace AP.Sendinblue
{
    public class SendinblueMethod
    {
        #region "Global Variables"
        Common.commonWebClientmethod objclient = new Common.commonWebClientmethod();
        Common.ApiName apiName = new Common.ApiName();
        NameValueCollection objname = new NameValueCollection();
        string str = "";
        #endregion



        public string SendAPIEmail(SendinblueModel sendinblueModel)
        {            
            var json = new JavaScriptSerializer().Serialize(sendinblueModel);
            try
                {
                json= json.Replace("\"Params\"", "\"params\"");
                str = objclient.CommonWebClient(json, apiName.email);
            }
            catch (Exception ex)
            {
                str = "-1";
            }
            return str;
        }


        public string GetAllTemplate()
        {           
            try
            {  
                str = objclient.HttpGetAPICall(apiName.templates);                           
            }
            catch (Exception ex)
            {
                str = "-1";
            }
            return str;
        }
    }
}


   
    