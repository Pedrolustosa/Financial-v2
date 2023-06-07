using Entities.Entities;

namespace Domain.Interfaces.IServices
{
    /// <summary>
    /// The user financial system service interface.
    /// </summary>
    public interface IUserFinancialSystemService 
    {
        /// <summary>
        /// Add user financial system.
        /// </summary>
        /// <param name="userFinancialSystem">The user financial system.</param>
        /// <returns>A Task.</returns>
        Task AddUserFinancialSystem(UserFinancialSystem userFinancialSystem);
    }
}