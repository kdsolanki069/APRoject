using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AP.Services.Interfaces;
using AP.Services.Services;
using AP.Model;

namespace AP.API.Controllers
{
    public class UserDetailController : ApiController
    {
        IUserDetailsServices  _userDetailsServices;
        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        UserDetailController(IUserDetailsServices  userDetailsServices)
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
        UserDetailController()
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

        [Route("api/UserDetail/InsertUpdateUser")]
        [HttpPost]
        public UserDetailsModelList InsertUpdateUser(UserDetailsModel userDetailsModel)
        {
            UserDetailsModelList list = _userDetailsServices.InsertUpdateUser(userDetailsModel);
            return list;
        }

        [Route("api/UserDetail/GetUserDetail")]
        [HttpPost]
        public UserDetailsModelList GetUserDetailsModel(UserDetailsModel userDetailsModel)
        {
            UserDetailsModelList list = _userDetailsServices.GetUserDetailsModel(userDetailsModel);
            return list;
        }

    }
}
