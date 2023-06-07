using Entities.Entities;
using Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Repository.Generics;
using Domain.Interfaces.IUserFinancialSystem;

namespace Infrastructure.Repository
{
    /// <summary>
    /// The user financial system repository.
    /// </summary>
    public class UserFinancialSystemRepository : GenericRepository<UserFinancialSystem>, IUserFinancialSystem
    {

        /// <summary>
        /// The context base.
        /// </summary>
        private readonly DbContextOptions<ContextBase> _contextBase;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserFinancialSystemRepository"/> class.
        /// </summary>
        public UserFinancialSystemRepository()
        {
            _contextBase = new DbContextOptions<ContextBase>();
        }

        /// <summary>
        /// Gets the all user financial system asynchronously.
        /// </summary>
        /// <param name="systemId">The system id.</param>
        /// <returns><![CDATA[Task<IList<UserFinancialSystem>>]]></returns>
        public async Task<IList<UserFinancialSystem>> GetAllUserFinancialSystemAsync(int systemId)
        {
            using var banco = new ContextBase(_contextBase);
            return await banco.UserFinancialSystem.Where(s => s.SystemId == systemId)
                                                  .AsNoTracking()
                                                  .ToListAsync();
        }

        /// <summary>
        /// Gets the user financial system by email asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<UserFinancialSystem>]]></returns>
        public async Task<UserFinancialSystem> GetUserFinancialSystemByEmailAsync(string emailUser)
        {
            using var banco = new ContextBase(_contextBase);
            return await banco?.UserFinancialSystem?.AsNoTracking()
                                                    .FirstOrDefaultAsync(x => x.UserEmail.Equals(emailUser));
        }

        /// <summary>
        /// Removers the user.
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns>A Task.</returns>
        public async Task RemoverUser(List<UserFinancialSystem> user)
        {
            using var banco = new ContextBase(_contextBase);
            banco.UserFinancialSystem.RemoveRange(user);
            await banco.SaveChangesAsync();
        }
    }
}