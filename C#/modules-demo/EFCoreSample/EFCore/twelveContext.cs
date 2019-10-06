using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;
using EFCoreSample.Models;
using Microsoft.EntityFrameworkCore;

namespace EFCoreSample.EFCore
{
    public class twelveContext : DbContext
    {
        public DbSet<students> Students { get; set; }
        public DbSet<scores> Scores { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL(ConfigurationManager.ConnectionStrings["MySql-VM"].ConnectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<students>(entity =>
            {
                entity.ToTable("students");
                entity.HasKey(x => x.ID);

                entity
                .HasMany<scores>(x => x.Scores);
            });

            modelBuilder.Entity<scores>(entity =>
            {
                entity.HasKey(x => new { x.ID, x.Subject }); // EF Core不支持用Data annotation

                entity
                .HasOne<students>(x => x.Student)
                .WithMany(x => x.Scores)
                .HasForeignKey(x => x.ID);
            });
        }
    }
}
