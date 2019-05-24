using System.Threading.Tasks;
using Abp.Auditing;
using Abp.AutoMapper;
using MyAbpMultiPageApp.Sessions.Dto;

namespace MyAbpMultiPageApp.Sessions
{
    public class SessionAppService : MyAbpMultiPageAppAppServiceBase, ISessionAppService
    {
        [DisableAuditing]
        public async Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations()
        {
            var output = new GetCurrentLoginInformationsOutput();

            if (AbpSession.UserId.HasValue)
            {
                output.User = (await GetCurrentUserAsync()).MapTo<UserLoginInfoDto>();
            }

            if (AbpSession.TenantId.HasValue)
            {
                output.Tenant = (await GetCurrentTenantAsync()).MapTo<TenantLoginInfoDto>();
            }

            return output;
        }
    }
}