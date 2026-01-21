using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AP.Model;
using AP.Services.Interfaces;
using AP.Services.Services;

namespace AP.API.Controllers
{
    public class LoginController : ApiController
    {
        IUserDetailsServices _userDetailsServices;
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        LoginController(IUserDetailsServices userDetailsServices)
        {
            try
            {
                _userDetailsServices = userDetailsServices;
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }
        }
        LoginController()
        {
            try
            {

                _userDetailsServices = new UserDetailsServices();
            }
            catch (Exception ex)
            {

                logger.Error(Convert.ToString(ex));
            }

        }

        [Route("api/Login/UserLogin")]
        [HttpPost]
        public UserDetailsModelList UserLogin(UserDetailsModel userDetailsModel)
        {
            UserDetailsModelList list = _userDetailsServices.GetUserDetailsModel(userDetailsModel);
            return list;
        }

        [Route("api/Login/ForgotPassword")]
        [HttpPost]
        public UserDetailsModelList ForgotPassword(UserDetailsModel userDetailsModel)
        {
            UserDetailsModelList list = _userDetailsServices.GetUserDetailsModel(userDetailsModel);
            return list;
        }
    }
}
