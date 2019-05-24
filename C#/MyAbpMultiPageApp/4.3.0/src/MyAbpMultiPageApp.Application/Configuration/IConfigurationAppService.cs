using System.Threading.Tasks;
using Abp.Application.Services;
using MyAbpMultiPageApp.Configuration.Dto;

namespace MyAbpMultiPageApp.Configuration
{
    public interface IConfigurationAppService: IApplicationService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}