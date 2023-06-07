using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace WebApi.Token
{
    /// <summary>
    /// The token Jwt builder.
    /// </summary>
    public class TokenJwtBuilder
    {
        /// <summary>
        /// The security key.
        /// </summary>
        private SecurityKey? securityKey = null;
        /// <summary>
        /// The subject.
        /// </summary>
        private string subject = "";
        /// <summary>
        /// The issuer.
        /// </summary>
        private string issuer = "";
        /// <summary>
        /// The audience.
        /// </summary>
        private string audience = "";
        /// <summary>
        /// The claims.
        /// </summary>
        private readonly Dictionary<string, string> claims = new();
        /// <summary>
        /// The expiry in minutes.
        /// </summary>
        private int expiryInMinutes = 5;


        /// <summary>
        /// Add security key.
        /// </summary>
        /// <param name="securityKey">The security key.</param>
        /// <returns>A TokenJwtBuilder.</returns>
        public TokenJwtBuilder AddSecurityKey(SecurityKey securityKey)
        {
            this.securityKey = securityKey;
            return this;
        }

        /// <summary>
        /// Add subject.
        /// </summary>
        /// <param name="subject">The subject.</param>
        /// <returns>A TokenJwtBuilder.</returns>
        public TokenJwtBuilder AddSubject(string subject)
        {
            this.subject = subject;
            return this;
        }

        /// <summary>
        /// Add issuer.
        /// </summary>
        /// <param name="issuer">The issuer.</param>
        /// <returns>A TokenJwtBuilder.</returns>
        public TokenJwtBuilder AddIssuer(string issuer)
        {
            this.issuer = issuer;
            return this;
        }

        /// <summary>
        /// Add audience.
        /// </summary>
        /// <param name="audience">The audience.</param>
        /// <returns>A TokenJwtBuilder.</returns>
        public TokenJwtBuilder AddAudience(string audience)
        {
            this.audience = audience;
            return this;
        }

        /// <summary>
        /// Add claim.
        /// </summary>
        /// <param name="type">The type.</param>
        /// <param name="value">The value.</param>
        /// <returns>A TokenJwtBuilder.</returns>
        public TokenJwtBuilder AddClaim(string type, string value)
        {
            this.claims.Add(type, value);
            return this;
        }

        /// <summary>
        /// Add claims.
        /// </summary>
        /// <param name="claims">The claims.</param>
        /// <returns>A TokenJwtBuilder.</returns>
        public TokenJwtBuilder AddClaims(Dictionary<string, string> claims)
        {
            this.claims.Union(claims);
            return this;
        }

        /// <summary>
        /// Add expiry.
        /// </summary>
        /// <param name="expiryInMinutes">The expiry in minutes.</param>
        /// <returns>A TokenJwtBuilder.</returns>
        public TokenJwtBuilder AddExpiry(int expiryInMinutes)
        {
            this.expiryInMinutes = expiryInMinutes;
            return this;
        }

        /// <summary>
        /// Checks if the arguments.
        /// </summary>
        /// <exception cref="ArgumentNullException"></exception>
        private void EnsureArguments()
        {
            if (this.securityKey == null)
                throw new ArgumentNullException("Security Key");

            if (string.IsNullOrEmpty(this.subject))
                throw new ArgumentNullException("Subject");

            if (string.IsNullOrEmpty(this.issuer))
                throw new ArgumentNullException("Issuer");

            if (string.IsNullOrEmpty(this.audience))
                throw new ArgumentNullException("Audience");
        }

        /// <summary>
        /// Builders the <see cref="TokenJwt"/>.
        /// </summary>
        /// <returns>A TokenJwt.</returns>
        public TokenJwt Builder()
        {
            EnsureArguments();
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub,this.subject),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            }.Union(this.claims.Select(item => new Claim(item.Key, item.Value)));

            var token = new JwtSecurityToken(
                issuer: this.issuer,
                audience: this.audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(expiryInMinutes),
                signingCredentials: new SigningCredentials( this.securityKey, SecurityAlgorithms.HmacSha256));
            return new TokenJwt(token);
        }
    }
}