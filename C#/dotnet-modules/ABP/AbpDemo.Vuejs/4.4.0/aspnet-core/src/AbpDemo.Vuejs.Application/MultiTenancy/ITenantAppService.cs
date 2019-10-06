using Abp.Application.Services;
using Abp.Application.Services.Dto;
using AbpDemo.Vuejs.MultiTenancy.Dto;

namespace AbpDemo.Vuejs.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

