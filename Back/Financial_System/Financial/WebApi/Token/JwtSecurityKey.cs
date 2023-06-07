using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace WebApi.Token
{
    /// <summary>
    /// The jwt security key.
    /// </summary>
    public static class JwtSecurityKey
    {
        /// <summary>
        /// Creates the <see cref="SymmetricSecurityKey"/>.
        /// </summary>
        /// <param name="secret">The secret.</param>
        /// <returns>A SymmetricSecurityKey.</returns>
        public static SymmetricSecurityKey Create(string secret)
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret));
        }
    }
}