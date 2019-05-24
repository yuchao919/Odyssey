using System.Data.Entity;
using System.Reflection;
using Abp.Modules;
using MyAbpMultiPageApp.EntityFramework;

namespace MyAbpMultiPageApp.Migrator
{
    [DependsOn(typeof(MyAbpMultiPageAppDataModule))]
    public class MyAbpMultiPageAppMigratorModule : AbpModule
    {
        public override void PreInitialize()
        {
            Database.SetInitializer<MyAbpMultiPageAppDbContext>(null);

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}