using Entities.Entities;
using Domain.Interfaces.Generics;

namespace Domain.Interfaces.IUserFinancialSystem
{
    /// <summary>
    /// The user financial system interface.
    /// </summary>
    public interface IUserFinancialSystem : IGeneric<UserFinancialSystem> 
    {
        /// <summary>
        /// Gets the all user financial system asynchronously.
        /// </summary>
        /// <param name="systemId">The system id.</param>
        /// <returns><![CDATA[Task<IList<UserFinancialSystem>>]]></returns>
        Task<IList<UserFinancialSystem>> GetAllUserFinancialSystemAsync(int systemId);

        /// <summary>
        /// Removers the user.
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns>A Task.</returns>
        Task RemoverUser(List<UserFinancialSystem> user);

        /// <summary>
        /// Gets the user financial system by email asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<UserFinancialSystem>]]></returns>
        Task<UserFinancialSystem> GetUserFinancialSystemByEmailAsync(string emailUser);
    }
}