using Entities.Entities;
using Domain.Interfaces.IServices;
using Domain.Interfaces.IUserFinancialSystem;

namespace Domain.Services
{
    /// <summary>
    /// The user financial system service.
    /// </summary>
    public  class UserFinancialSystemService : IUserFinancialSystemService
    {
        /// <summary>
        /// The interface user financial system.
        /// </summary>
        private readonly IUserFinancialSystem _iUserFinancialSystem;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserFinancialSystemService"/> class.
        /// </summary>
        /// <param name="iUserFinancialSystem">The i user financial system.</param>
        public UserFinancialSystemService(IUserFinancialSystem iUserFinancialSystem)
        {
            _iUserFinancialSystem = iUserFinancialSystem;
        }

        /// <summary>
        /// Add user financial system.
        /// </summary>
        /// <param name="userFinancialSystem">The user financial system.</param>
        /// <returns>A Task.</returns>
        public async Task AddUserFinancialSystem(UserFinancialSystem userFinancialSystem)
        {
            await _iUserFinancialSystem.Add(userFinancialSystem);
        }
    }
}