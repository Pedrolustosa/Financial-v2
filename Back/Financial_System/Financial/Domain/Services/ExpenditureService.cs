using Entities.Entities;
using Domain.Interfaces.IServices;
using Domain.Interfaces.IExpenditure;

namespace Domain.Services
{
    /// <summary>
    /// The expenditure service.
    /// </summary>
    public class ExpenditureService : IExpenditureService
    {

        /// <summary>
        /// The interface expenditure.
        /// </summary>
        private readonly IExpenditure _iExpenditure;

        /// <summary>
        /// Initializes a new instance of the <see cref="ExpenditureService"/> class.
        /// </summary>
        /// <param name="iExpenditure">The i expenditure.</param>
        public ExpenditureService(IExpenditure iExpenditure)
        {
            _iExpenditure = iExpenditure;
        }

        /// <summary>
        /// Add expenditure.
        /// </summary>
        /// <param name="expenditure">The expenditure.</param>
        /// <returns>A Task.</returns>
        public async Task AddExpenditure(Expenditure expenditure)
        {
            var date = DateTime.Now;
            expenditure.RegistrationDate = date;
            expenditure.Year = date.Year;
            expenditure.Month = date.Month;

            var validate = expenditure.ValidatePropiertyString(expenditure.Name, "Name");
            if (validate)
                await _iExpenditure.Add(expenditure);
        }

        /// <summary>
        /// Load chart.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        public async Task<object> LoadChart(string emailUser)
        {
            var expenditureUser = await _iExpenditure.GetAllExpenditureUserAsync(emailUser);
            var expenditureBefore = await _iExpenditure.GetAllExpenditureUserNotPaidBeforeMonthAsync(emailUser);
            var expenditureNotPaidMonthBefore = expenditureBefore.Any() ? 
                                                expenditureBefore.AsEnumerable().Sum(x => x.Value) : 
                                                0;
            var expenditurePaid = expenditureUser.Where(x => x.Paid && x.TypeDipense == Entities.Enums.EnumTypeExpenditure.Account)
                                                 .Sum(x => x.Value);
            var expenditurePendent = expenditureUser.Where(x => !x.Paid && x.TypeDipense == Entities.Enums.EnumTypeExpenditure.Account)
                                                 .Sum(x => x.Value);
            var investiment = expenditureUser.Where(x => x.TypeDipense == Entities.Enums.EnumTypeExpenditure.Investment)
                                                 .Sum(x => x.Value);
            return new
            {
                Success = "Okay",
                ExpenditurePaid = expenditurePaid,
                ExpenditurePendent = expenditurePendent,
                ExpenditureNotPaidMonthBefore = expenditureNotPaidMonthBefore,
                Investiment = investiment
            };
        }

        /// <summary>
        /// Updates the expenditure.
        /// </summary>
        /// <param name="expenditure">The expenditure.</param>
        /// <returns>A Task.</returns>
        public async Task UpdateExpenditure(Expenditure expenditure)
        {
            var date = DateTime.Now;
            expenditure.DateChange = date;

            if(expenditure.Paid)
                expenditure.PaymentDate = date;

            var validate = expenditure.ValidatePropiertyString(expenditure.Name, "Name");
            if (validate)
                await _iExpenditure.Update(expenditure);
        }
    }
}