using AP.Model;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web.Script.Serialization;

namespace AP.Sendinblue
{
    public class SendinblueServices
    {
        SendinblueMethod sendinblueMethod = new SendinblueMethod();
        string str = string.Empty;

        public string SendAPIEmail(SendinblueAPIModel sendinblueAPIModel)
        {
            SendinblueModel sendinblueModel = new SendinblueModel();
            sendinblueModel = SendinblueAPIToEmail(sendinblueAPIModel);
            str = sendinblueMethod.SendAPIEmail(sendinblueModel);
            return str;
        }


        public int GetAllTemplate(string TemplateName)
        {
            templateData templateData = new templateData();
            List<template> templates = new List<template>();
            str = sendinblueMethod.GetAllTemplate();
            JavaScriptSerializer oJS = new JavaScriptSerializer();
            templateData = oJS.Deserialize<templateData>(str);
            templates = templateData.templates.Where(N => (N.name.ToUpper() == TemplateName.ToUpper())).ToList();
            if (templates != null)
            {
                if (templates.Count > 0)
                {
                    return templates[0].id;
                }
                else
                {
                    return 0;
                }
            }
            else
            {
                return 0;
            }

        }


        public SendinblueModel SendinblueAPIToEmail(SendinblueAPIModel sendinblueAPIModel)
        {
            string SENDEREMAIL = ConfigurationSettings.AppSettings["SENDEREMAIL"].ToString();
            string SENDERUSERNAME = ConfigurationSettings.AppSettings["SENDERUSERNAME"].ToString();

            SendinblueModel sendinblueModel = new SendinblueModel();
            sendinblueModel.templateId = sendinblueAPIModel.templateId;
            sendinblueModel.to = strtoarry(sendinblueAPIModel.toname, sendinblueAPIModel.toemail);
            sendinblueModel.sender = null;
            sendinblueModel.tags = strtoarry(sendinblueAPIModel.tags);
            sendinblueModel.Params = sendinblueAPIModel.Params;

            return sendinblueModel;
        }

        public Email[] strtoarry(string Name, string Email)
        {
            Email email = new Email();
            List<Email> emails = new List<Email>();
            var Namearray = Name.Split(',');
            var Emailarray = Email.Split(',');
            for (int i = 1; i <= Emailarray.Length; i++)
            {
                email.email = Emailarray[i - 1];
                email.name = Namearray[i - 1];
                emails.Add(email);
            }
            return emails.ToArray();

        }


        public string[] strtoarry(string tags)
        {
            List<string> str = new List<string>();
            string data = string.Empty;
            var tagsarray = tags.Split(',');
            for (int i = 1; i <= tagsarray.Length; i++)
            {
                data = tagsarray[i - 1];
                str.Add(data);
            }
            return str.ToArray();

        }

    }
}
