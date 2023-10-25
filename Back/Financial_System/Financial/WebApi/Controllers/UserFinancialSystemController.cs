using Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using Domain.Interfaces.IServices;
using Microsoft.AspNetCore.Authorization;
using Domain.Interfaces.IUserFinancialSystem;

namespace WebApi.Controllers
{
    /// <summary>
    /// The user financial system controller.
    /// </summary>
    [Route("api/[controller]")]
    //[Authorize]
    [ApiController]
    public class UserFinancialSystemController : ControllerBase
    {
        /// <summary>
        /// The i user financial system.
        /// </summary>
        private readonly IUserFinancialSystem _iUserFinancialSystem;
        /// <summary>
        /// The i user financial system service.
        /// </summary>
        private readonly IUserFinancialSystemService _iUserFinancialSystemService;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserFinancialSystemController"/> class.
        /// </summary>
        /// <param name="iUserFinancialSystem">The i user financial system.</param>
        /// <param name="iUserFinancialSystemService">The i user financial system service.</param>
        public UserFinancialSystemController(IUserFinancialSystem iUserFinancialSystem, IUserFinancialSystemService iUserFinancialSystemService)
        {
            _iUserFinancialSystem = iUserFinancialSystem;
            _iUserFinancialSystemService = iUserFinancialSystemService;
        }

        /// <summary>
        /// Gets the all user financial system asynchronously.
        /// </summary>
        /// <param name="systemId">The system id.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/ListSystemsUsers")]
        [Produces("application/json")]
        public async Task<object> ListSystemsUser(int systemId)
        {
            return await _iUserFinancialSystem.ListSystemsUser(systemId);
        }

        /// <summary>
        /// Add user financial system.
        /// </summary>
        /// <param name="systemId">The system id.</param>
        /// <param name="userEmail">The email user.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpPost("/api/AddUserFinancialSystem")]
        [Produces("application/json")]
        public async Task<object> AddUserFinancialSystem(int systemId, string userEmail)
        {
            try
            {
                await _iUserFinancialSystemService.AddUserFinancialSystem(
                    new UserFinancialSystem
                    {
                        SystemId = systemId,
                        UserEmail = userEmail,
                        Administrator = false,
                        CurrentSystem = true
                    });

            }
            catch (Exception)
            {
                return Task.FromResult(false);
            }
            return Ok();
        }

        /// <summary>
        /// Deletes the user financial system.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpPost("/api/DeleteUserFinancialSystem")]
        [Produces("application/json")]
        public async Task<object> DeleteUserFinancialSystem(int id)
        {
            try
            {
                var userSystemFinancial = await _iUserFinancialSystem.GetEntityById(id);
                await _iUserFinancialSystem.Delete(userSystemFinancial);
            }
            catch (Exception)
            {
                return Task.FromResult(false);
            }
            return Task.FromResult(true);
        }
    }
}