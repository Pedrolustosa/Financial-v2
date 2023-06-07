using Entities.Entities;
using Domain.Interfaces.Generics;

namespace Domain.Interfaces.IFinancialSystem
{
    /// <summary>
    /// The financial system interface.
    /// </summary>
    public interface IFinancialSystem : IGeneric<FinancialSystem> 
    {
        /// <summary>
        /// Gets the all financial system user asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<IList<FinancialSystem>>]]></returns>
        Task<IList<FinancialSystem>> GetAllUserFinancialSystemAsync(string emailUser);
    }
}