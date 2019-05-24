using MyAbpMultiPageApp.EntityFramework;
using EntityFramework.DynamicFilters;

namespace MyAbpMultiPageApp.Migrations.SeedData
{
    public class InitialHostDbBuilder
    {
        private readonly MyAbpMultiPageAppDbContext _context;

        public InitialHostDbBuilder(MyAbpMultiPageAppDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            _context.DisableAllFilters();

            new DefaultEditionsCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new HostRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();
        }
    }
}
