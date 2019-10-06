using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using AbpDemo.Vuejs.Authorization;

namespace AbpDemo.Vuejs
{
    [DependsOn(
        typeof(VuejsCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class VuejsApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<VuejsAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(VuejsApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddProfiles(thisAssembly)
            );
        }
    }
}
