using AP.Model;
using AP.Model.obj;
using AP.Notification.EmailNotification;
using AP.Services.Interfaces;

namespace AP.Services.Services
{
    public class EmailServices : IEmailServices
    {
        #region Property
        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        templateName templateName = new templateName();
        Common.Helper.RandomString randomString = new Common.Helper.RandomString();
        UserEmailNotification userEmailNotification = new UserEmailNotification();
        #endregion

        public SendMessageModel SendMessage(SendMessageModel sendMessageModel)
        {
            SendMessageModel list = userEmailNotification.sendEmail(sendMessageModel, templateName.SendMail);
            return list;
        }

    }
}
