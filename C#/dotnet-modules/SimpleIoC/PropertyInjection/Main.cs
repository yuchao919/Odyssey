using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.PropertyInjection
{
    class Main
    {
        public static void Run()
        {
            CustomerService cs = new CustomerService();
            Console.WriteLine(cs.GetCustomerName(1));
        }
    }
}
