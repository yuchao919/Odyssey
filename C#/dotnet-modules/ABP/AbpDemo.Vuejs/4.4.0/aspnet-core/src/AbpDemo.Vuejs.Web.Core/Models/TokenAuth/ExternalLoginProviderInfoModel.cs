using Abp.AutoMapper;
using AbpDemo.Vuejs.Authentication.External;

namespace AbpDemo.Vuejs.Models.TokenAuth
{
    [AutoMapFrom(typeof(ExternalLoginProviderInfo))]
    public class ExternalLoginProviderInfoModel
    {
        public string Name { get; set; }

        public string ClientId { get; set; }
    }
}
