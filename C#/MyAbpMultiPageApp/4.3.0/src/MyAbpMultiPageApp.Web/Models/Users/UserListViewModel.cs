using System.Collections.Generic;
using MyAbpMultiPageApp.Roles.Dto;
using MyAbpMultiPageApp.Users.Dto;

namespace MyAbpMultiPageApp.Web.Models.Users
{
    public class UserListViewModel
    {
        public IReadOnlyList<UserDto> Users { get; set; }

        public IReadOnlyList<RoleDto> Roles { get; set; }
    }
}