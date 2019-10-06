using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using AbpDemo.Vuejs.Authorization.Roles;
using AbpDemo.Vuejs.Authorization.Users;
using AbpDemo.Vuejs.MultiTenancy;

namespace AbpDemo.Vuejs.EntityFrameworkCore
{
    public class VuejsDbContext : AbpZeroDbContext<Tenant, Role, User, VuejsDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public VuejsDbContext(DbContextOptions<VuejsDbContext> options)
            : base(options)
        {
        }
    }
}
