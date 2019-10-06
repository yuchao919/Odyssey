using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using AbpDemo.Configuration.Dto;

namespace AbpDemo.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : AbpDemoAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
