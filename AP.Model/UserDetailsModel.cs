using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
    public class UserDetailsModel : CommonModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string EncryptedPWD { get; set; }
        public string EncryptionSalt { get; set; }
        public string EmailId { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
        public string IsActive { get; set; }       
        public string Code { get; set; }

    }

    public class UserDetailsModelList : ResponseModel
    {
        public List<UserDetailsModel> UserDetailsModelListData { get; set; }
    }
}
