using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace WebAPISelfHosting.Controller
{
    public class HomeController : ApiController
    {
        public string Get()
        {
            return "Hello World!";
        }

        public string Get(string name)
        {
            return "Hello " + name;
        }
    }
}
