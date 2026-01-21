using AP.Model;

namespace AP.Services.Interfaces
{
    public interface IDashboardServices
    {
        DeshboardDetail GetDashboard();
        DeshboardDetail GetCompanyDashboard(int CompanyId);
    }
}
