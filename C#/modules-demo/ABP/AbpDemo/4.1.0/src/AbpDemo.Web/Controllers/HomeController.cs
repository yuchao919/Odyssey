using System.Web.Mvc;
using Abp.Web.Mvc.Authorization;

namespace AbpDemo.Web.Controllers
{
    [AbpMvcAuthorize]
    public class HomeController : AbpDemoControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}