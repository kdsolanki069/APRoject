using AP.Entity;
using AP.Model;
using AP.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace AP.Repository.Repositories
{
    public class UserDetailsRepository : IUserDetailsRepository
    {

        private static NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();
        /// <summary>
        /// Get User Detail 
        /// </summary>
        /// <param name="userDetailsModel"></param>
        /// <returns></returns>
        public UserDetailsModelList GetUserDetailsModel(UserDetailsModel userDetailsModel)
        {
            
            UserDetailsModelList userDetailsModelList = new UserDetailsModelList(); 
            List<UserDetailsModel> UserDetailsModellistData = new List<UserDetailsModel>();
            UserDetailsModel userDetails = new UserDetailsModel();
            int Count = 0;
            using (APDBEntities db = new APDBEntities())
            {
                try {
                    var data = UserDetailsModellistData; /*db.usp_SearchUser(userDetailsModel.UserId, userDetailsModel.UserName, userDetailsModel.Flag);*/
                if (data != null)
                {
                    foreach (var item in data)
                    {
                        userDetails = new UserDetailsModel();
                        userDetails.UserId = Convert.ToInt32(item.UserId);
                        userDetails.UserName = Convert.ToString(item.UserName);
                        userDetails.EmailId = Convert.ToString(item.EmailId);
                        userDetails.EncryptedPWD = Convert.ToString(item.EncryptedPWD);
                        userDetails.EncryptionSalt = Convert.ToString(item.EncryptionSalt);
                        userDetails.Password = Convert.ToString(item.Password);
                        userDetails.PhoneNumber = Convert.ToString(item.PhoneNumber);
                        userDetails.IsActive = Convert.ToString(item.IsActive);
                        //userDetails.Changeby = Convert.ToString(item.UpdatedBy);
                        UserDetailsModellistData.Add(userDetails);
                        Count = Count + 1;
                    }
                }               
                userDetailsModelList.UserDetailsModelListData = UserDetailsModellistData;
                userDetailsModelList.Status = "True";
                userDetailsModelList.Message = String.Format("{0} record Found",Count);

                }
                catch(Exception ex)
                {
                    userDetailsModelList.UserDetailsModelListData = UserDetailsModellistData;
                    userDetailsModelList.Status = "False";
                    userDetailsModelList.Message = String.Format("{0} ", ex.Message);
                }
            }
          
            return userDetailsModelList;
        }


        /// <summary>
        /// Get User Detail 
        /// </summary>
        /// <param name="userDetailsModel"></param>
        /// <returns></returns>
        public UserDetailsModelList InsertUpdateUser(UserDetailsModel userDetailsModel)
        {
            UserDetailsModelList userDetailsModelList = new UserDetailsModelList();
            using (APDBEntities db = new APDBEntities())
            {
                //var data = db.usp_InsertUpdateUser(userDetailsModel.Flag,
                //                                  userDetailsModel.UserId,
                //                                  userDetailsModel.UserName,
                //                                  userDetailsModel.EncryptedPWD,
                //                                  userDetailsModel.EncryptionSalt,
                //                                  userDetailsModel.EmailId,
                //                                  userDetailsModel.PhoneNumber,
                //                                  userDetailsModel.Password,
                //                                  Convert.ToBoolean(userDetailsModel.IsActive),
                //                                  Convert.ToInt32(userDetailsModel.Changeby));
                userDetailsModelList.Status = "True";
                userDetailsModelList.Message = "record Update Sucessfully";
            }
            return userDetailsModelList;
        }



    }
}
