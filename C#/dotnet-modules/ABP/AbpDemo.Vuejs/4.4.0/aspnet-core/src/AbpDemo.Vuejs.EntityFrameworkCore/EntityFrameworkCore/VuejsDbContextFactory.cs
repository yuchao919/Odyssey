using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using AbpDemo.Vuejs.Configuration;
using AbpDemo.Vuejs.Web;

namespace AbpDemo.Vuejs.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class VuejsDbContextFactory : IDesignTimeDbContextFactory<VuejsDbContext>
    {
        public VuejsDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<VuejsDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            VuejsDbContextConfigurer.Configure(builder, configuration.GetConnectionString(VuejsConsts.ConnectionStringName));

            return new VuejsDbContext(builder.Options);
        }
    }
}
