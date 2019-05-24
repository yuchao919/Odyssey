using Abp.Authorization;
using MyAbpMultiPageApp.Authorization.Roles;
using MyAbpMultiPageApp.Authorization.Users;

namespace MyAbpMultiPageApp.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {

        }
    }
}
