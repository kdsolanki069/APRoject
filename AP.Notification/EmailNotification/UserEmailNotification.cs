using AP.Model;
using AP.Model.obj;
using AP.Sendinblue;

namespace AP.Notification.EmailNotification
{
    public class UserEmailNotification
    {
        #region Property

        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        Params Params = new Params();
        SendinblueServices sendinblueServices = new SendinblueServices();
        #endregion

        public void userEmailNotification(UserDetailsModel userDetailsModel, string templateName)
        {
            sendinblueAPIModel.toname = userDetailsModel.UserName;
            sendinblueAPIModel.toemail = userDetailsModel.EmailId;
            sendinblueAPIModel.tags = templateName;
            Params.Username = userDetailsModel.UserName;
            Params.Password = userDetailsModel.Password;
            Params.Code = userDetailsModel.Code;
            sendinblueAPIModel.Params = Params;
            sendinblueAPIModel.templateId = sendinblueServices.GetAllTemplate(templateName);
            if (sendinblueAPIModel.templateId > 0)
            {
                sendinblueServices.SendAPIEmail(sendinblueAPIModel);
            }

        }

        public SendMessageModel sendEmail(SendMessageModel sendMessageModel, string templateName)
        {
            sendinblueAPIModel.toname = "ABC";
            sendinblueAPIModel.toemail = sendMessageModel.ToEmailId;
            sendinblueAPIModel.tags = templateName;
            Params.Name = sendMessageModel.Name;
            Params.Subject = sendMessageModel.Subject;
            Params.Email = sendMessageModel.EmailId;
            Params.EmailMessage = sendMessageModel.EmailMessage;
            sendinblueAPIModel.Params = Params;
            sendinblueAPIModel.templateId = sendinblueServices.GetAllTemplate(templateName);
            if (sendinblueAPIModel.templateId > 0)
            {
                sendinblueServices.SendAPIEmail(sendinblueAPIModel);
                sendMessageModel.Message = "Sucess";
            }
            return sendMessageModel;
        }
    }
}
