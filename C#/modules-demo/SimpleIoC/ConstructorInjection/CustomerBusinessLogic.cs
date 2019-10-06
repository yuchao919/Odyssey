using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC.ConstructorInjection
{
    public class CustomerBusinessLogic
    {
        ICustomerDataAccess _dataAccess;

        public CustomerBusinessLogic(ICustomerDataAccess custDataAccess)
        {
            _dataAccess = custDataAccess;
        }

        public CustomerBusinessLogic()
        {
            _dataAccess = new CustomerDataAccess();
        }

        public string GetCustomerName(int id)
        {
            return _dataAccess.GetCustomerName(id);
        }
    }
}
