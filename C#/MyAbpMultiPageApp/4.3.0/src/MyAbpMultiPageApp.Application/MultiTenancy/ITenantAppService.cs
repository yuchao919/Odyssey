using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MyAbpMultiPageApp.MultiTenancy.Dto;

namespace MyAbpMultiPageApp.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
