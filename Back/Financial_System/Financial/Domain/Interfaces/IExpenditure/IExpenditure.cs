using Entities.Entities;
using Domain.Interfaces.Generics;

namespace Domain.Interfaces.IExpenditure
{
    /// <summary>
    /// The expenditure interface.
    /// </summary>
    public interface IExpenditure : IGeneric<Expenditure> 
    {
        /// <summary>
        /// Gets the all expenditure user asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<IList<Expenditure>>]]></returns>
        Task<IList<Expenditure>> GetAllExpenditureUserAsync(string emailUser);

        /// <summary>
        /// Gets the all expenditure user not paid before month asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<IList<Expenditure>>]]></returns>
        Task<IList<Expenditure>> GetAllExpenditureUserNotPaidBeforeMonthAsync(string emailUser);
    }
}