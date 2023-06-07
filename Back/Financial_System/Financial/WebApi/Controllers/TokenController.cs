using WebApi.Token;
using WebApi.Models;
using Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace WebApi.Controllers
{
    /// <summary>
    /// The token controller.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        /// <summary>
        /// The user manager.
        /// </summary>
        private readonly UserManager<ApplicationUser> _userManager;
        /// <summary>
        /// sign in manager.
        /// </summary>
        private readonly SignInManager<ApplicationUser> _signInManager;

        /// <summary>
        /// Initializes a new instance of the <see cref="TokenController"/> class.
        /// </summary>
        /// <param name="userManager">The user manager.</param>
        /// <param name="signInManager">The sign in manager.</param>
        public TokenController(UserManager<ApplicationUser> userManager,
                               SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        /// <summary>
        /// Creates the token.
        /// </summary>
        /// <param name="Input">The input.</param>
        /// <returns><![CDATA[Task<IActionResult>]]></returns>
        [AllowAnonymous]
        [Produces("application/json")]
        [HttpPost("/api/CreateToken")]
        public async Task<IActionResult> CreateToken([FromBody] InputModel Input)
        {
            if (string.IsNullOrWhiteSpace(Input.Email) || string.IsNullOrWhiteSpace(Input.Password))
                return Unauthorized();

            var result = await _signInManager.PasswordSignInAsync(Input.Email, Input.Password, false, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                var token = new TokenJwtBuilder().AddSecurityKey(JwtSecurityKey.Create("Secret_Key-12345678"))
                                                 .AddSubject("PedroLustosa")
                                                 .AddIssuer("Teste.Security.Bearer")
                                                 .AddAudience("Teste.Security.Bearer")
                                                 .AddClaim("UserAPINumber", "1")
                                                 .AddExpiry(5)
                                                 .Builder();
                return Ok($"Token: {token.Value}");
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}