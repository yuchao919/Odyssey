using Microsoft.AspNetCore.Antiforgery;
using AbpDemo.Vuejs.Controllers;

namespace AbpDemo.Vuejs.Web.Host.Controllers
{
    public class AntiForgeryController : VuejsControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
