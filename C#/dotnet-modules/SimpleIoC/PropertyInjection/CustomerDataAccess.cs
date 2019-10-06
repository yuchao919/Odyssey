using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.PropertyInjection
{
    public class CustomerDataAccess : ICustomerDataAccess
    {
        public CustomerDataAccess()
        {
        }

        public string GetCustomerName(int id)
        {
            //get the customer name from the db in real application   
            Tuple<int, string> item = DummyDatabase.Customers().Where(x => x.Item1 == id).FirstOrDefault() ?? new Tuple<int, string>(0, "NotFound");
            return item.Item2;
        }
    }
}
