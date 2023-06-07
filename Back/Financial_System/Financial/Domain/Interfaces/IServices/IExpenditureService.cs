using Entities.Entities;

namespace Domain.Interfaces.IServices
{
    /// <summary>
    /// The expenditure service interface.
    /// </summary>
    public interface IExpenditureService 
    {
        /// <summary>
        /// Add expenditure.
        /// </summary>
        /// <param name="expenditure">The expenditure.</param>
        /// <returns>A Task.</returns>
        Task AddExpenditure(Expenditure expenditure);

        /// <summary>
        /// Updates the expenditure.
        /// </summary>
        /// <param name="expenditure">The expenditure.</param>
        /// <returns>A Task.</returns>
        Task UpdateExpenditure(Expenditure expenditure);

        /// <summary>
        /// Load chart.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        Task<object> LoadChart(string emailUser);
    }
}