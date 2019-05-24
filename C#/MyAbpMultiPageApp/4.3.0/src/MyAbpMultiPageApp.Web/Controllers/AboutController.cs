using System.Web.Mvc;

namespace MyAbpMultiPageApp.Web.Controllers
{
    public class AboutController : MyAbpMultiPageAppControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}