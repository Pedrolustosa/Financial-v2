using Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using Domain.Interfaces.IServices;
using Domain.Interfaces.IFinancialSystem;
using Microsoft.AspNetCore.Authorization;

namespace WebApi.Controllers
{
    /// <summary>
    /// The financial system controller.
    /// </summary>
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class FinancialSystemController : ControllerBase
    {
        /// <summary>
        /// The i financial system.
        /// </summary>
        private readonly IFinancialSystem _iFinancialSystem;

        /// <summary>
        /// The i financial system service.
        /// </summary>
        private readonly IFinancialSystemService _iFinancialSystemService;

        /// <summary>
        /// Initializes a new instance of the <see cref="FinancialSystemController"/> class.
        /// </summary>
        /// <param name="iFinancialSystem">The i financial system.</param>
        /// <param name="iFinancialSystemService">The i financial system service.</param>
        public FinancialSystemController(IFinancialSystem iFinancialSystem, IFinancialSystemService iFinancialSystemService)
        {
            _iFinancialSystem = iFinancialSystem;
            _iFinancialSystemService = iFinancialSystemService;
        }

        /// <summary>
        /// Gets the all financial system user asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/GetAllUserFinancialSystemAsync")]
        [Produces("application/json")]
        public async Task<object> GetAllUserFinancialSystemUserAsync(string emailUser)
        {
            return await _iFinancialSystem.GetAllUserFinancialSystemAsync(emailUser);
        }

        /// <summary>
        /// Gets the financial system by id.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/GetFinancialSystemById")]
        [Produces("application/json")]
        public async Task<object> GetFinancialSystemById(int id)
        {
            return await _iFinancialSystem.GetEntityById(id);
        }

        /// <summary>
        /// Add financial system.
        /// </summary>
        /// <param name="financialSystem">The financial system.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpPost("/api/AddFinancialSystem")]
        [Produces("application/json")]
        public async Task<object> AddFinancialSystem(FinancialSystem financialSystem)
        {
            await _iFinancialSystemService.AddFinancialSystem(financialSystem);
            return Task.FromResult(financialSystem);
        }

        /// <summary>
        /// Updates the financial system.
        /// </summary>
        /// <param name="financialSystem">The financial system.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpPut("/api/UpdateFinancialSystem")]
        [Produces("application/json")]
        public async Task<object> UpdateFinancialSystem(FinancialSystem financialSystem)
        {
            await _iFinancialSystemService.UpdateFinancialSystem(financialSystem);
            return Task.FromResult(financialSystem);
        }

        /// <summary>
        /// Deletes the financial system by id.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpDelete("/api/DeleteFinancialSystemById")]
        [Produces("application/json")]
        public async Task<object> DeleteFinancialSystemById(int id)
        {
            try
            {
                var financialSystem = await _iFinancialSystem.GetEntityById(id);
                await _iFinancialSystem.Delete(financialSystem);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }
    }
}