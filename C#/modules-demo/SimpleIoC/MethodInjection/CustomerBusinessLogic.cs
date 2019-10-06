using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.MethodInjection
{
    public class CustomerBusinessLogic : IDataAccessDependency
    {
        ICustomerDataAccess _dataAccess;

        public CustomerBusinessLogic()
        {
        }

        public string GetCustomerName(int id)
        {
            return _dataAccess.GetCustomerName(id);
        }

        public void SetDependency(ICustomerDataAccess customerDataAccess)
        {
            _dataAccess = customerDataAccess;
        }
    }
}
