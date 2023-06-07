using Entities.Entities;
using Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;
using Domain.Interfaces.IFinancialSystem;
using Infrastructure.Repository.Generics;

namespace Infrastructure.Repository
{
    /// <summary>
    /// The financial system repository.
    /// </summary>
    public class FinancialSystemRepository : GenericRepository<FinancialSystem>, IFinancialSystem
    {
        /// <summary>
        /// The context base.
        /// </summary>
        private readonly DbContextOptions<ContextBase> _contextBase;

        /// <summary>
        /// Initializes a new instance of the <see cref="FinancialSystemRepository"/> class.
        /// </summary>
        public FinancialSystemRepository()
        {
            _contextBase = new DbContextOptions<ContextBase>();
        }

        /// <summary>
        /// Gets the all financial system user asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<IList<FinancialSystem>>]]></returns>
        public async Task<IList<FinancialSystem>> GetAllUserFinancialSystemAsync(string emailUser)
        {
            using var database = new ContextBase(_contextBase);
            return await (from fs in database.FinancialSystem
                          join ufs in database.UserFinancialSystem on fs.Id equals ufs.SystemId
                          where ufs.UserEmail.Equals(emailUser)
                          select fs).AsNoTracking().ToListAsync();
        }
    }
}