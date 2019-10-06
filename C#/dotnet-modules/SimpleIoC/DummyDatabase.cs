using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC
{
    public static class DummyDatabase
    {
        public static List<Tuple<int, string>> Customers()
        {
            List<Tuple<int, string>> list = new List<Tuple<int, string>> {
                new Tuple<int, string>(1, "Ann"),
                new Tuple<int, string>(2, "Bob"),
                new Tuple<int, string>(3, "Charles")
            };
            return list;
        }
    }
}
