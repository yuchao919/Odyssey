using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.ConstructorInjection
{
    public interface ICustomerDataAccess
    {
        string GetCustomerName(int id);
    }
}
