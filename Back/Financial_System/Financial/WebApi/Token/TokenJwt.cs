using System.IdentityModel.Tokens.Jwt;

namespace WebApi.Token
{
    /// <summary>
    /// The token JWT.
    /// </summary>
    public class TokenJwt
    {
        /// <summary>
        /// The token.
        /// </summary>
        private readonly JwtSecurityToken token;

        /// <summary>
        /// Initializes a new instance of the <see cref="TokenJwt"/> class.
        /// </summary>
        /// <param name="token">The token.</param>
        internal TokenJwt(JwtSecurityToken token)
        {
            this.token = token;
        }

        /// <summary>
        /// Gets the valid to.
        /// </summary>
        public DateTime ValidTo => token.ValidTo;

        /// <summary>
        /// Gets the value.
        /// </summary>
        public string Value => new JwtSecurityTokenHandler().WriteToken(this.token);
    }
}