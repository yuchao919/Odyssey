using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.ConstructorInjection
{
    public class Main
    {
        public static void Run()
        {
            CustomerService cs = new CustomerService();
            cs.GetCustomerName(0);
        }
    }
}
