using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using AbpDemo.Vuejs.Configuration.Dto;

namespace AbpDemo.Vuejs.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : VuejsAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
