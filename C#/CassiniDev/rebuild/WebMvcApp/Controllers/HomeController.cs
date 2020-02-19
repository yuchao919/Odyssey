using System.Web;
using System.Web.Mvc;

namespace WebMvcApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Index
        public ActionResult Index()
        {
            ViewBag.ModulesInfo = string.Join("\n", HttpContext.ApplicationInstance.Modules.AllKeys);
            return View();
        }
    }
}