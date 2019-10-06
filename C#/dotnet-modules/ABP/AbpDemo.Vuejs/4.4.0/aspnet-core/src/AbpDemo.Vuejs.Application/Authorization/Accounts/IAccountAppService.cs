using System.Threading.Tasks;
using Abp.Application.Services;
using AbpDemo.Vuejs.Authorization.Accounts.Dto;

namespace AbpDemo.Vuejs.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
