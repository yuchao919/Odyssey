using System.Data.Entity;
using System.Reflection;
using Abp.Modules;
using Abp.Zero.EntityFramework;
using MyAbpMultiPageApp.EntityFramework;

namespace MyAbpMultiPageApp
{
    [DependsOn(typeof(AbpZeroEntityFrameworkModule), typeof(MyAbpMultiPageAppCoreModule))]
    public class MyAbpMultiPageAppDataModule : AbpModule
    {
        public override void PreInitialize()
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<MyAbpMultiPageAppDbContext>());

            Configuration.DefaultNameOrConnectionString = "Default";
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}
