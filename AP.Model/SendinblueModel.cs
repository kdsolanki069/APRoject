namespace AP.Model
{
    public class SendinblueModel
    {
        public Email[] sender { get; set; }
        public Params Params { get; set; }
        public Email[] to { get; set; }
        public int templateId { get; set; }
        public string[] tags { get; set; }

    }
    public class Params
    {
        public string Username { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Code { get; set; }
        public string Subject { get; set; }
        public string EmailMessage { get; set; }

    }

    public class Email
    {
        public string email { get; set; }
        public string name { get; set; }

    }

    public class SendinblueAPIModel
    {
        public string senderemail { get; set; }
        public string sendername { get; set; }
        public string toemail { get; set; }
        public string toname { get; set; }
        public int templateId { get; set; }
        public string tags { get; set; }
        public Params Params { get; set; }
    }


    public class templateData
    {
        public int count { get; set; }
        public template[] templates { get; set; }
    }
    public class template
    {
        public int id { get; set; }
        public string name { get; set; }
        public string subject { get; set; }
        public bool isActive { get; set; }
        public bool testSent { get; set; }
        public Email sender { get; set; }
        public string replyTo { get; set; }
        public string toField { get; set; }
        public string tag { get; set; }
        public string htmlContent { get; set; }
        public string createdAt { get; set; }
        public string modifiedAt { get; set; }
    }

    public class templateName
    {
        public string Registraion = "YogSatra_Account_Activate";
        public string ResetPassword = "YogSatra_ResetPassword";
        public string YogSatraForgotPassword = "YogSatra_ForgotPassword";
        public string SendMail = "SendMail";
    }





}
