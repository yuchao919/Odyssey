using System.Collections.Generic;
using AbpDemo.Roles.Dto;
using AbpDemo.Users.Dto;

namespace AbpDemo.Web.Models.Users
{
    public class UserListViewModel
    {
        public IReadOnlyList<UserDto> Users { get; set; }

        public IReadOnlyList<RoleDto> Roles { get; set; }
    }
}