using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.PropertyInjection
{
    public interface ICustomerDataAccess
    {
        string GetCustomerName(int id);
    }
}
