using Entities.Entities;
using Domain.Interfaces.IServices;
using Domain.Interfaces.IFinancialSystem;

namespace Domain.Services
{
    /// <summary>
    /// The financial system service.
    /// </summary>
    public class FinancialSystemService : IFinancialSystemService
    {

        /// <summary>
        /// The interface financial system.
        /// </summary>
        private readonly IFinancialSystem _iFinancialSystem;

        /// <summary>
        /// Initializes a new instance of the <see cref="FinancialSystemService"/> class.
        /// </summary>
        /// <param name="iFinancialSystem">The i financial system.</param>
        public FinancialSystemService(IFinancialSystem iFinancialSystem)
        {
            _iFinancialSystem = iFinancialSystem;
        }

        /// <summary>
        /// Add financial system.
        /// </summary>
        /// <param name="financialSystem">The financial system.</param>
        /// <returns>A Task.</returns>
        public async Task AddFinancialSystem(FinancialSystem financialSystem)
        {
            var date = DateTime.Now;
            var validate = financialSystem.ValidatePropiertyString(financialSystem.Name, "Name");
            if (validate)
            {
                financialSystem.ClosingDay = 1;
                financialSystem.Year = date.Year;
                financialSystem.Month = date.Month;
                financialSystem.YearCopy = date.Year;
                financialSystem.MonthCopy = date.Month;
                financialSystem.GenerateCopyDispense = true;
                await _iFinancialSystem.Add(financialSystem);
            }
        }

        /// <summary>
        /// Updates the financial system.
        /// </summary>
        /// <param name="financialSystem">The financial system.</param>
        /// <returns>A Task.</returns>
        public async Task UpdateFinancialSystem(FinancialSystem financialSystem)
        {
            var validate = financialSystem.ValidatePropiertyString(financialSystem.Name, "Name");
            if (validate)
            {
                financialSystem.ClosingDay = 1;
                await _iFinancialSystem.Update(financialSystem);
            }
        }
    }
}