using System.Threading.Tasks;
using Abp.Application.Services;
using MyAbpMultiPageApp.Authorization.Accounts.Dto;

namespace MyAbpMultiPageApp.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
