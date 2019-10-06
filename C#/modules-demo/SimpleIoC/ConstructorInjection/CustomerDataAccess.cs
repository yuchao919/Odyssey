using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.ConstructorInjection
{
    public class CustomerDataAccess : ICustomerDataAccess
    {
        public CustomerDataAccess()
        {
        }

        public string GetCustomerName(int id)
        {
            //get the customer name from the db in real application        
            return "Dummy Customer Name";
        }
    }
}
