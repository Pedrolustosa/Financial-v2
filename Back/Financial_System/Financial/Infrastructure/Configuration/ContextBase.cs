using Entities.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Infrastructure.Configuration
{
    /// <summary>
    /// The context base.
    /// </summary>
    public class ContextBase : IdentityDbContext<ApplicationUser>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ContextBase"/> class.
        /// </summary>
        /// <param name="options">The options.</param>
        public ContextBase(DbContextOptions options) : base(options){ }

        /// <summary>
        /// Gets or Sets the financial system.
        /// </summary>
        public DbSet<FinancialSystem> FinancialSystem { get; set; }
        /// <summary>
        /// Gets or Sets the user financial system.
        /// </summary>
        public DbSet<UserFinancialSystem> UserFinancialSystem { get; set; }
        /// <summary>
        /// Gets or Sets the category.
        /// </summary>
        public DbSet<Category> Category { get; set; }
        /// <summary>
        /// Gets or Sets the expenditure.
        /// </summary>
        public DbSet<Expenditure> Expenditure { get; set; }

        /// <summary>
        /// On configuring.
        /// </summary>
        /// <param name="optionsBuilder">The options builder.</param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(ConnectionString);
                base.OnConfiguring(optionsBuilder);
            }
            base.OnConfiguring(optionsBuilder);
        }

        /// <summary>
        /// On model creating.
        /// </summary>
        /// <param name="builder">The builder.</param>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ApplicationUser>().ToTable("AspNetUsers").HasKey(c => c.Id);

            base.OnModelCreating(builder);
        }

        /// <summary>
        /// Gets the connection string.
        /// </summary>
        /// <returns>A string.</returns>
        public static string ConnectionString => "Data Source=LAPTOP-3D5G6G45;Initial Catalog=FinancialDB;Integrated Security=true;";
    }
}