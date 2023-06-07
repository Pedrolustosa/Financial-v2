using System.Text;
using WebApi.Models;
using Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.WebUtilities;

namespace WebApi.Controllers
{
    /// <summary>
    /// The users controller.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
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
        /// Initializes a new instance of the <see cref="UsersController"/> class.
        /// </summary>
        /// <param name="userManager">The user manager.</param>
        /// <param name="signInManager">The sign in manager.</param>
        public UsersController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        /// <summary>
        /// Creates the user.
        /// </summary>
        /// <param name="login">The login.</param>
        /// <returns><![CDATA[Task<IActionResult>]]></returns>
        [AllowAnonymous]
        [Produces("application/json")]
        [HttpPost("/api/CreateUser")]

        public async Task<IActionResult> CreateUser([FromBody] Login login)
        {
            if (string.IsNullOrWhiteSpace(login.Email) || string.IsNullOrWhiteSpace(login.Password) || string.IsNullOrWhiteSpace(login.CPF))
                return Ok("Missing some data");

            var user = new ApplicationUser
            {
                Email = login.Email,
                UserName = login.Email,
                CPF = login.CPF
            };

            var result = await _userManager.CreateAsync(user, login.Password);
            if (result.Errors.Any())
                return Ok(result.Errors);

            // Confirmation generation if needed
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));

            // return of the email 
            code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(code));
            var respose_Retorn = await _userManager.ConfirmEmailAsync(user, code);
            if (respose_Retorn.Succeeded)
                return Ok("User Created");
            else
                return Ok("Error confirming user registration!");
        }
    }
}