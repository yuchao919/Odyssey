using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using CookieSample.Data;
using System.Collections.Generic;
using CookieSample.Pages.Account;

namespace CookieSample.Controllers
{
    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly ILogger _logger;

        public AccountController(ILogger<AccountController> logger)
        {
            _logger = logger;
        }

        //[HttpPost]
        //public async Task<IActionResult> Login(LoginModel model)
        //{
          

        //    var claims = new List<Claim>
        //    {
        //        new Claim(ClaimTypes.Name, user.Email),
        //        new Claim("FullName", user.FullName),
        //        new Claim(ClaimTypes.Role, "Administrator"),
        //    };

        //    var claimsIdentity = new ClaimsIdentity(
        //        claims, CookieAuthenticationDefaults.AuthenticationScheme);

        //    var authProperties = new AuthenticationProperties
        //    {
        //        //AllowRefresh = <bool>,
        //        // Refreshing the authentication session should be allowed.

        //        //ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10),
        //        // The time at which the authentication ticket expires. A 
        //        // value set here overrides the ExpireTimeSpan option of 
        //        // CookieAuthenticationOptions set with AddCookie.

        //        //IsPersistent = true,
        //        // Whether the authentication session is persisted across 
        //        // multiple requests. Required when setting the 
        //        // ExpireTimeSpan option of CookieAuthenticationOptions 
        //        // set with AddCookie. Also required when setting 
        //        // ExpiresUtc.

        //        //IssuedUtc = <DateTimeOffset>,
        //        // The time at which the authentication ticket was issued.

        //        //RedirectUri = <string>
        //        // The full path or absolute URI to be used as an http 
        //        // redirect response value.
        //    };

        //    await HttpContext.SignInAsync(
        //        CookieAuthenticationDefaults.AuthenticationScheme,
        //        new ClaimsPrincipal(claimsIdentity),
        //        authProperties);

        //    return RedirectToPage("/Home/Index");
        //}

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            _logger.LogInformation($"User {User.Identity.Name} logged out at {DateTime.UtcNow}.");

            #region snippet1
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            #endregion

            return RedirectToPage("/Account/SignedOut");
        }
    }
}
