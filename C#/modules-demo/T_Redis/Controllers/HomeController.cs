using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace T_Redis.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var u = new UUU() { Name = "世界", LoginTime = DateTime.Now };
            Session["User"] = u;
            return View();
        }

        public ActionResult About()
        {
            var u = Session["User"] as UUU;
            if (u != null)
            {
                ViewBag.Message = $"Hello, {u.Name}, {u.LoginTime.ToLongTimeString()}";
            }
            else
            {
                ViewBag.Message = "Your application description page.";
            }

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }

    [Serializable]
    public class UUU
    {
        public string Name { get; set; }
        public DateTime LoginTime { get; set; }
    }
}