using Entities.Entities;
using Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;
using Domain.Interfaces.IExpenditure;
using Infrastructure.Repository.Generics;

namespace Infrastructure.Repository
{
    /// <summary>
    /// The expenditure repository.
    /// </summary>
    public class ExpenditureRepository : GenericRepository<Expenditure>, IExpenditure
    {
        /// <summary>
        /// The context base.
        /// </summary>
        private readonly DbContextOptions<ContextBase> _contextBase;

        /// <summary>
        /// Initializes a new instance of the <see cref="ExpenditureRepository"/> class.
        /// </summary>
        public ExpenditureRepository()
        {
            _contextBase = new DbContextOptions<ContextBase>();
        }

        /// <summary>
        /// Gets the all expenditure user asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<IList<Expenditure>>]]></returns>
        public async Task<IList<Expenditure>> GetAllExpenditureUserAsync(string emailUser)
        {
            using var database = new ContextBase(_contextBase);
            return await (from fs in database.FinancialSystem
                          join c in database.Category on fs.Id equals c.SystemId
                          join ufs in database.UserFinancialSystem on fs.Id equals ufs.SystemId
                          join ex in database.Expenditure on c.Id equals ex.CategoryId
                          where ufs.UserEmail.Equals(emailUser) && fs.Month == ex.Month && fs.Year == ex.Year
                          select ex).AsNoTracking().ToListAsync();
        }

        /// <summary>
        /// Gets the all expenditure user not paid before month asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<IList<Expenditure>>]]></returns>
        public async Task<IList<Expenditure>> GetAllExpenditureUserNotPaidBeforeMonthAsync(string emailUser)
        {
            using var database = new ContextBase(_contextBase);
            return await (from fs in database.FinancialSystem
                          join c in database.Category on fs.Id equals c.SystemId
                          join ufs in database.UserFinancialSystem on fs.Id equals ufs.SystemId
                          join ex in database.Expenditure on c.Id equals ex.CategoryId
                          where ufs.UserEmail.Equals(emailUser) && ex.Month < DateTime.Now.Month && !ex.Paid
                          select ex).AsNoTracking().ToListAsync();
        }
    }
}