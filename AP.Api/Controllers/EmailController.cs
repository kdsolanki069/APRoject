using AP.Model.obj;
using AP.Services.Interfaces;
using AP.Services.Services;
using System;
using System.Web.Http;

namespace AP.Api.Controllers
{
    public class EmailController : ApiController
    {

        IEmailServices _emailServices;


        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        EmailController(IEmailServices emailServices)
        {
            try
            {
                _emailServices = emailServices;
            }
            catch (Exception ex)
            {
                logger.Error(Convert.ToString(ex));
            }
        }
        EmailController()
        {
            try
            {
                _emailServices = new EmailServices();
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }

        }


        [Route("api/Email/SendMessage")]
        [HttpPost]
        public SendMessageModel SendMessage(SendMessageModel sendMessageModel)
        {
            SendMessageModel list = _emailServices.SendMessage(sendMessageModel);
            return list;
        }
    }
}
