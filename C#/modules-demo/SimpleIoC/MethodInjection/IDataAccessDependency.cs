using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.MethodInjection
{
    interface IDataAccessDependency
    {
        void SetDependency(ICustomerDataAccess customerDataAccess);
    }
}
