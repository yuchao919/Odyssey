using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace AbpDemo.Vuejs.EntityFrameworkCore
{
    public static class VuejsDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<VuejsDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<VuejsDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
