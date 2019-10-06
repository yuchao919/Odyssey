using Abp.Application.Services.Dto;

namespace AbpDemo.Vuejs.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

