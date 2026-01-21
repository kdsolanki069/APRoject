using AP.Model.obj;

namespace AP.Services.Interfaces
{
    public interface IEmailServices
    {
        SendMessageModel SendMessage(SendMessageModel sendMessageModel);
    }
}
