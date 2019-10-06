using Abp.Authorization;
using AbpDemo.Vuejs.Authorization.Roles;
using AbpDemo.Vuejs.Authorization.Users;

namespace AbpDemo.Vuejs.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
