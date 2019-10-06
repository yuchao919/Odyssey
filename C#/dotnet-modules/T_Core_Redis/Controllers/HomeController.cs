using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using T_Core_Redis.Models;

namespace T_Core_Redis.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var u = new UUU() { Name = "world", LoginTime = DateTime.Now };
            var json = JsonConvert.SerializeObject(u);
            var data = System.Text.Encoding.UTF8.GetBytes(json);
            HttpContext.Session.Set("UUU", data);

            return View();
        }

        public IActionResult About()
        {
            byte[] data;
            if (HttpContext.Session.TryGetValue("UUU", out data))
            {
                var json = System.Text.Encoding.UTF8.GetString(data);
                var u = JsonConvert.DeserializeObject<UUU>(json);
                ViewData["Message"] = $"Hello {u.Name}.{u.LoginTime.ToShortTimeString()}";
            }
            else
            {
                ViewData["Message"] = "Your application description page.";
            }

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

    [Serializable]
    public class UUU
    {
        public string Name { get; set; }
        public DateTime LoginTime { get; set; }
    }
}
