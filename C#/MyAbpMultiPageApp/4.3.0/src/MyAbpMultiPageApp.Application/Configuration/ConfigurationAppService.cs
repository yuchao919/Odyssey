using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using MyAbpMultiPageApp.Configuration.Dto;

namespace MyAbpMultiPageApp.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : MyAbpMultiPageAppAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
