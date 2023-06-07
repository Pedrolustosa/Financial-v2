using Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using Domain.Interfaces.IServices;
using Domain.Interfaces.IExpenditure;

namespace WebApi.Controllers
{
    /// <summary>
    /// The expenditure controller.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenditureController : ControllerBase
    {
        /// <summary>
        /// The i expenditure.
        /// </summary>
        private readonly IExpenditure _iExpenditure;
        /// <summary>
        /// The i expenditure service.
        /// </summary>
        private readonly IExpenditureService _iExpenditureService;

        /// <summary>
        /// Initializes a new instance of the <see cref="ExpenditureController"/> class.
        /// </summary>
        /// <param name="iExpenditure">The i expenditure.</param>
        /// <param name="iExpenditureService">The i expenditure service.</param>
        public ExpenditureController(IExpenditure iExpenditure, IExpenditureService iExpenditureService)
        {
            _iExpenditure = iExpenditure;
            _iExpenditureService = iExpenditureService;
        }

        /// <summary>
        /// Gets the all expenditures user.
        /// </summary>
        /// <param name="userEmail">The user email.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/GetAllExpendituresUser")]
        [Produces("application/json")]
        public async Task<object> GetAllExpendituresUser(string userEmail)
        {
            return await _iExpenditure.GetAllExpenditureUserAsync(userEmail);
        }

        /// <summary>
        /// Add expenditure.
        /// </summary>
        /// <param name="expenditure">The expenditure.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpPost("/api/AddExpenditure")]
        [Produces("application/json")]
        public async Task<object> AddExpenditure(Expenditure expenditure)
        {
            await _iExpenditureService.AddExpenditure(expenditure);
            return expenditure;
        }

        /// <summary>
        /// Updates the expenditure.
        /// </summary>
        /// <param name="expenditure">The expenditure.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpPut("/api/UpdateExpenditure")]
        [Produces("application/json")]
        public async Task<object> UpdateExpenditure(Expenditure expenditure)
        {
            await _iExpenditureService.UpdateExpenditure(expenditure);
            return expenditure;
        }

        /// <summary>
        /// Gets the expenditure by id.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/GetExpenditurById")]
        [Produces("application/json")]
        public async Task<object> GetExpenditureById(int id)
        {
            return await _iExpenditure.GetEntityById(id);
        }

        /// <summary>
        /// Deletes the expenditure.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/DeleteExpenditure")]
        [Produces("application/json")]
        public async Task<object> DeleteExpenditure(int id)
        {
            try
            {
                var category = await _iExpenditure.GetEntityById(id);
                await _iExpenditure.Delete(category);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        /// <summary>
        /// Load chart.
        /// </summary>
        /// <param name="userEmail">The user email.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/LoadChart")]
        [Produces("application/json")]
        public async Task<object> LoadChart(string userEmail)
        {
            return await _iExpenditureService.LoadChart(userEmail);
        }
    }
}
