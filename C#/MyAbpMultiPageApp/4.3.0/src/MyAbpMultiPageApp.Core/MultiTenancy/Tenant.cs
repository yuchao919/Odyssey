using Abp.MultiTenancy;
using MyAbpMultiPageApp.Authorization.Users;

namespace MyAbpMultiPageApp.MultiTenancy
{
    public class Tenant : AbpTenant<User>
    {
        public Tenant()
        {
            
        }

        public Tenant(string tenancyName, string name)
            : base(tenancyName, name)
        {
        }
    }
}