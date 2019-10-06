using System.Collections.Generic;

namespace AbpDemo.Vuejs.Authentication.External
{
    public interface IExternalAuthConfiguration
    {
        List<ExternalLoginProviderInfo> Providers { get; }
    }
}
