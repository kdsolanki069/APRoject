using AP.Model;
using AP.Notification.EmailNotification;
using AP.Repository.Repositories;
using AP.Services.Interfaces;

namespace AP.Services.Services
{
    public class DashboardServices : IDashboardServices
    {
        DashboardRepositories _dashboardRepositories;

        public DashboardServices(DashboardRepositories dashboardRepositories)
        {
            _dashboardRepositories = dashboardRepositories;

        }
        public DashboardServices()
        {
            _dashboardRepositories = new DashboardRepositories();
        }

        #region Property

        string st = "";
        SendinblueAPIModel sendinblueAPIModel = new SendinblueAPIModel();
        templateName templateName = new templateName();
        Common.Helper.RandomString randomString = new Common.Helper.RandomString();
        UserEmailNotification userEmailNotification = new UserEmailNotification();
        #endregion


        public DeshboardDetail GetDashboard()
        {
            DeshboardDetail deshboardDetail = new DeshboardDetail();
            deshboardDetail = _dashboardRepositories.GetDashboard();
            return deshboardDetail;
        }

        public DeshboardDetail GetCompanyDashboard(int CompanyId)
        {
            DeshboardDetail deshboardDetail = new DeshboardDetail();
            deshboardDetail = _dashboardRepositories.GetCompanyDashboard(CompanyId);
            return deshboardDetail;
        }

    }
}
