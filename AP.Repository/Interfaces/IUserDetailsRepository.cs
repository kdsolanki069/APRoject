using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AP.Model;

namespace AP.Repository.Interfaces
{
   public interface IUserDetailsRepository
    {
        UserDetailsModelList GetUserDetailsModel(UserDetailsModel userDetailsModel);
        UserDetailsModelList InsertUpdateUser(UserDetailsModel userDetailsModel);
    }
}
