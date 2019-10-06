using System.Threading.Tasks;
using Abp.Application.Services;
using AbpDemo.Vuejs.Sessions.Dto;

namespace AbpDemo.Vuejs.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
