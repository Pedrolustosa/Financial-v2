using Entities.Entities;

namespace Domain.Interfaces.IServices
{
    /// <summary>
    /// The financial system service interface.
    /// </summary>
    public interface IFinancialSystemService 
    {
        /// <summary>
        /// Add financial system.
        /// </summary>
        /// <param name="financialSystem">The financial system.</param>
        /// <returns>A Task.</returns>
        Task AddFinancialSystem(FinancialSystem financialSystem);
        /// <summary>
        /// Updates the financial system.
        /// </summary>
        /// <param name="financialSystem">The financial system.</param>
        /// <returns>A Task.</returns>
        Task UpdateFinancialSystem(FinancialSystem financialSystem);

    }
}