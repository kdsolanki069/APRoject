namespace AP.Model.obj
{
    public class SendMessageModel : ResponseModel
    {

        public string Name { get; set; }
        public string EmailId { get; set; }
        public string Subject { get; set; }
        public string EmailMessage { get; set; }
        public string ToEmailId { get; set; }
    }
}
