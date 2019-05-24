using System.Web.Mvc;
using Abp.Web.Mvc.Authorization;

namespace MyAbpMultiPageApp.Web.Controllers
{
    [AbpMvcAuthorize]
    public class HomeController : MyAbpMultiPageAppControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}