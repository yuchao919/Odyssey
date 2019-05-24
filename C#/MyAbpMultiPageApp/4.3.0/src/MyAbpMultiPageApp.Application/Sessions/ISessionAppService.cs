using System.Threading.Tasks;
using Abp.Application.Services;
using MyAbpMultiPageApp.Sessions.Dto;

namespace MyAbpMultiPageApp.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
