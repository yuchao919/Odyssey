namespace EF6CodeFirst
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class twelveDB : DbContext
    {
        public twelveDB()
            : base("name=twelveDB")
        {
        }

        public virtual DbSet<student> students { get; set; }
        public virtual DbSet<score> scores { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
