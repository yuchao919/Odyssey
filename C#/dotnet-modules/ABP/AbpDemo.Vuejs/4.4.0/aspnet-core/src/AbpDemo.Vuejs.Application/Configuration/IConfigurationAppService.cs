using System.Threading.Tasks;
using AbpDemo.Vuejs.Configuration.Dto;

namespace AbpDemo.Vuejs.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
