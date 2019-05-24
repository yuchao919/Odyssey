using System.Collections.Generic;
using MyAbpMultiPageApp.Roles.Dto;

namespace MyAbpMultiPageApp.Web.Models.Roles
{
    public class RoleListViewModel
    {
        public IReadOnlyList<RoleDto> Roles { get; set; }

        public IReadOnlyList<PermissionDto> Permissions { get; set; }
    }
}