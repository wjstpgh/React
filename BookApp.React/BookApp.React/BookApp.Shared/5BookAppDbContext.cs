using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace BookApp.Shared
{
    public class BookAppDbContext : DbContext
    {
        // PM > Install-Package Microsoft.EntityFrameworkCore
        // PM > Install-Package Microsoft.EntityFrameworkCore.SqlServer
        // PM > Install-Package Microsoft.EntityFrameworkCore.Tools
        // PM > Install-Package Microsoft.EntityFrameworkCore.InMemory
        // PM > Install-Package System.Configuration.ConfigurationManager
        // PM > Install-Package Microsoft.Data.SqlClient

        public BookAppDbContext()
        {
            //Empty
            //ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        public BookAppDbContext(DbContextOptions<BookAppDbContext> options)
            : base(options)
        {
            //ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string connectionString = ConfigurationManager.
                    ConnectionStrings["ConnectionString"].ConnectionString;
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Books 테이블의 Created 열 자동으로 GetDate()제약조건 부여
            modelBuilder.Entity<Book>().Property(m => m.Created).HasDefaultValueSql("GetDate()");
        }
        //[!] BookApp 솔루션 관련 모든 테이블에 대한 참조
        public DbSet<Book> Books { get; set; }
    }
}
