using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AP.Model;

namespace AP.Services.Interfaces
{
   public interface IUserDetailsServices
    {
        UserDetailsModelList GetUserDetailsModel(UserDetailsModel userDetailsModel);
        UserDetailsModelList InsertUpdateUser(UserDetailsModel userDetailsModel);
    }
}
