using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace AbpDemo.Vuejs.Controllers
{
    public abstract class VuejsControllerBase: AbpController
    {
        protected VuejsControllerBase()
        {
            LocalizationSourceName = VuejsConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
