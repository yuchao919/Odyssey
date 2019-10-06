using Abp.MultiTenancy;
using AbpDemo.Vuejs.Authorization.Users;

namespace AbpDemo.Vuejs.MultiTenancy
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
