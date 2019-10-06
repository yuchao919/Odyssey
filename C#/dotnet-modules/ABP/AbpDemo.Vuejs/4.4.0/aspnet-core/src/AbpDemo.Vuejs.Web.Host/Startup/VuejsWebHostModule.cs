using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using AbpDemo.Vuejs.Configuration;

namespace AbpDemo.Vuejs.Web.Host.Startup
{
    [DependsOn(
       typeof(VuejsWebCoreModule))]
    public class VuejsWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public VuejsWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(VuejsWebHostModule).GetAssembly());
        }
    }
}
