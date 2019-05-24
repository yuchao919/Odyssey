using Abp.AutoMapper;
using MyAbpMultiPageApp.Sessions.Dto;

namespace MyAbpMultiPageApp.Web.Models.Account
{
    [AutoMapFrom(typeof(GetCurrentLoginInformationsOutput))]
    public class TenantChangeViewModel
    {
        public TenantLoginInfoDto Tenant { get; set; }
    }
}