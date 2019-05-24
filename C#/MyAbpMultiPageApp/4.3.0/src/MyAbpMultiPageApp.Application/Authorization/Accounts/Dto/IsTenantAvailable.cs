using System.ComponentModel.DataAnnotations;
using Abp.MultiTenancy;

namespace MyAbpMultiPageApp.Authorization.Accounts.Dto
{
    public class IsTenantAvailableInput
    {
        [Required]
        [MaxLength(AbpTenantBase.MaxTenancyNameLength)]
        public string TenancyName { get; set; }
    }
}
