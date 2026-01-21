using AP.Model;
using AP.Notification.EmailNotification;
using AP.Repository.Repositories;
using AP.Services.Interfaces;

namespace AP.Services.Services
{
    public class UserDetailsServices : IUserDetailsServices
    {
        UserDetailsRepository _userDetailsRepository;
        public UserDetailsServices(UserDetailsRepository userDetailsRepository)
        {
            _userDetailsRepository = userDetailsRepository;

        }
        public UserDetailsServices()
        {
            _userDetailsRepository = new UserDetailsRepository();
        }

        #region Property

        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        templateName templateName = new templateName();
        Common.Helper.RandomString randomString = new Common.Helper.RandomString();
        UserEmailNotification userEmailNotification = new UserEmailNotification();
        #endregion

        #region Methods


        public UserDetailsModelList GetUserDetailsModel(UserDetailsModel userDetailsModel)
        {
            UserDetailsModelList userDetailsModelList = new UserDetailsModelList();
            userDetailsModelList = _userDetailsRepository.GetUserDetailsModel(userDetailsModel);
            if (userDetailsModel.Flag == "Login")
            {
                if (userDetailsModelList.UserDetailsModelListData != null || userDetailsModelList.UserDetailsModelListData.Count >0)
                {
                    
                    string Salt = userDetailsModelList.UserDetailsModelListData[0].EncryptionSalt;
                    string EncryptedPassword = userDetailsModelList.UserDetailsModelListData[0].EncryptedPWD;
                    string Pass = Common.Helper.EncryptionDecryption.HashPassword(userDetailsModel.Password.Trim() + Salt);
                    if (Pass != EncryptedPassword)
                    {
                        userDetailsModelList.Status = "False";
                        userDetailsModelList.Message = "Wrongpassword";
                    }
                    else
                    {
                        string IsActive = userDetailsModelList.UserDetailsModelListData[0].IsActive;
                        if (IsActive != "True")
                        {
                            userDetailsModelList.Status = "False";
                            userDetailsModelList.Message = "Locked";
                        }
                    }
                }
                else
                {
                    userDetailsModelList.Status = "False";
                    userDetailsModelList.Message = "Wrongpassword";
                }
            }
            if (userDetailsModel.Flag == "ForgotPassword")
            {
                string Code = randomString.RandomStringPassword(4);

                if (userDetailsModelList.UserDetailsModelListData != null && userDetailsModelList.UserDetailsModelListData.Count > 0)
                {

                    string IsActive = userDetailsModelList.UserDetailsModelListData[0].IsActive;
                    if (IsActive != "True")
                    {
                        userDetailsModelList.Status = "False";
                        userDetailsModelList.Message = "Locked";
                    }
                    else
                    {
                        userDetailsModelList.UserDetailsModelListData[0].Code = Code;
                        userEmailNotification.userEmailNotification(userDetailsModelList.UserDetailsModelListData[0], templateName.YogSatraForgotPassword);
                    }
                }
                else
                {
                    userDetailsModelList.Status = "False";
                    userDetailsModelList.Message = "WrongUserName";
                }


            }
            return userDetailsModelList;
        }

        public UserDetailsModelList InsertUpdateUser(UserDetailsModel userDetailsModel)
        {
            randomString = new Common.Helper.RandomString();
            sendinblueAPIModel = new SendinblueAPIModel();
            string NewPassword = randomString.RandomStringPassword(10);
            string nSalt = Common.Helper.EncryptionDecryption.getSalt();
            string nPass = Common.Helper.EncryptionDecryption.HashPassword(NewPassword.Trim() + nSalt);

            UserDetailsModelList userDetailsModelList = new UserDetailsModelList();
            userDetailsModel.Password = NewPassword.Trim();
            userDetailsModel.EncryptedPWD = nPass;
            userDetailsModel.EncryptionSalt = nSalt;

            if (userDetailsModel.Flag == "IU" && userDetailsModel.UserId <= 0)
            {
                userEmailNotification.userEmailNotification(userDetailsModel, templateName.Registraion);
            }
            else if (userDetailsModel.Flag == "ResetPassword" && userDetailsModel.UserId > 0)
            {
                userDetailsModelList = _userDetailsRepository.GetUserDetailsModel(userDetailsModel);
                userDetailsModelList.UserDetailsModelListData[0].Password = NewPassword;
                userEmailNotification.userEmailNotification(userDetailsModelList.UserDetailsModelListData[0], templateName.ResetPassword);
            }
            userDetailsModelList = _userDetailsRepository.InsertUpdateUser(userDetailsModel);
            return userDetailsModelList;
        }

        #endregion




    }

}




