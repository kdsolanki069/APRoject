using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography.X509Certificates;
using System.Net.Security;

namespace AP.Common.Helper
{
    public class EmailManager
    {
        /// <summary>
        /// This Method is using for send mail
        /// </summary>
        /// <param name="to">Pass email address for To</param>
        /// <param name="subject">Pass email subject details</param>
        /// <param name="body">Pass email body in html format, write your content directly in body tag, but dont write body tag. it's already defined.</param>
        /// <param name="empLoginFK">Pass User Loging PK</param>
        /// <param name="projectFK">Pass project FK for HR, Purchase etc..</param>
        /// <param name="error">Get error description</param>
        /// <returns>Boolean (True/False) as output</returns>
        public static bool SendMail(string to, string subject, string body, int empLoginFK, int projectFK, out string error)
        {
            try
            {
                MailMessage msg = new MailMessage();

                MailAddressCollection TO_addressList = new MailAddressCollection();

                MessageFormat(subject, body, msg);

                if (string.IsNullOrEmpty(to))
                {
                    error = "To Email Address is required";
                    return false;
                }
                else
                {
                    foreach (var curr_address in to.Split(new[] { ";" }, StringSplitOptions.RemoveEmptyEntries))
                    {
                        MailAddress mytoAddress = new MailAddress(curr_address);
                        TO_addressList.Add(mytoAddress);
                    }
                    msg.To.Add(TO_addressList.ToString());
                    SmtpMail(msg);

                    error = "";
                    return true;
                }
            }
            catch (Exception ex)
            {
                error = ex.Message;

                return false;
            }
        }
        /// <summary>
        /// This method is using for common message parameter
        /// </summary>
        /// <param name="subject"></param>
        /// <param name="body"></param>
        /// <param name="msg"></param>
        /// <param name="uniquenumber"></param>
        private static void MessageFormat(string subject, string body, MailMessage msg)
        {
            // msg.From = new MailAddress(ConfigurationManager.AppSettings["FromAddress"].ToString());
            msg.From = new MailAddress("osgcsr@gmail.com");
            msg.Subject = subject;
            msg.Body = msgFormat(body);
            msg.IsBodyHtml = Convert.ToBoolean(true);
        }
        /// <summary>
        /// Thid method is using for email message format
        /// </summary>
        /// <param name="body"></param>


        static string msgFormat(string body)
        {
            string msg = string.Empty;

            msg = "<html><head></head><body>" + body + "</body></html>";

            return msg;
        }

        /// <summary>
        /// Common method for SMTP object
        /// </summary>
        /// <param name="msg">object of <code>  MailMessage </code> Class.</param>
        private static void SmtpMail(MailMessage msg)
        {
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com"; //ConfigurationManager.AppSettings["Host"].ToString();
            smtp.EnableSsl = true;//Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSSL"].ToString());
            ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };
            NetworkCredential cred = new NetworkCredential();
            cred.UserName = "osgcsr@gmail.com";//ConfigurationManager.AppSettings["FromAddress"].ToString();
            cred.Password = "P@ssword@123";//ConfigurationManager.AppSettings["frompass"].ToString();

            smtp.Port = 587;// Convert.ToInt32(ConfigurationManager.AppSettings["Port"].ToString());
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.UseDefaultCredentials = false;//Convert.ToBoolean(ConfigurationManager.AppSettings["useDefaultCredential"].ToString());
            smtp.Credentials = cred;

            smtp.Send(msg);
        }

    }
}
