using System.Linq;
using MyAbpMultiPageApp.EntityFramework;
using MyAbpMultiPageApp.MultiTenancy;

namespace MyAbpMultiPageApp.Migrations.SeedData
{
    public class DefaultTenantCreator
    {
        private readonly MyAbpMultiPageAppDbContext _context;

        public DefaultTenantCreator(MyAbpMultiPageAppDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateUserAndRoles();
        }

        private void CreateUserAndRoles()
        {
            //Default tenant

            var defaultTenant = _context.Tenants.FirstOrDefault(t => t.TenancyName == Tenant.DefaultTenantName);
            if (defaultTenant == null)
            {
                _context.Tenants.Add(new Tenant {TenancyName = Tenant.DefaultTenantName, Name = Tenant.DefaultTenantName});
                _context.SaveChanges();
            }
        }
    }
}
