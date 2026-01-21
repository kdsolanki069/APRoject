using AP.Model;

namespace AP.Repository.Interfaces
{
    public interface IDashboardRepositories
    {
        DeshboardDetail GetDashboard();
        DeshboardDetail GetCompanyDashboard(int CompanyId);
    }
}
