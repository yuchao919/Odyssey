using System.Web.Mvc;

namespace AbpDemo.Web.Controllers
{
    public class AboutController : AbpDemoControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}