using Entities.Entities;
using Domain.Interfaces.ICategory;
using Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Repository.Generics;

namespace Infrastructure.Repository
{
    /// <summary>
    /// The category repository.
    /// </summary>
    public class CategoryRepository : GenericRepository<Category>, ICategory
    {
        /// <summary>
        /// The context base.
        /// </summary>
        private readonly DbContextOptions<ContextBase> _contextBase;

        /// <summary>
        /// Initializes a new instance of the <see cref="CategoryRepository"/> class.
        /// </summary>
        public CategoryRepository()
        {
            _contextBase = new DbContextOptions<ContextBase>();
        }

        /// <summary>
        /// Gets the all categories user asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<IList<Category>>]]></returns>
        public async Task<IList<Category>> GetAllCategoriesUserAsync(string emailUser)
        {
            using var database = new ContextBase(_contextBase);
            return await (from s in database.FinancialSystem
                          join c in database.Category on s.Id equals c.SystemId
                          join us in database.UserFinancialSystem on s.Id equals us.SystemId
                          where us.UserEmail.Equals(emailUser) && us.CurrentSystem
                          select c).AsNoTracking().ToListAsync();
        }
    }
}