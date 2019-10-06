using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSample.Operators
{
    class Aggregate
    {
        public static void Eg1()
        {
            IList<String> strList = new List<String>() { "One", "Two", "Three", "Four", "Five" };

            var commaSeperatedString = strList.Aggregate((s1, s2) => s1 + ", " + s2);

            Console.WriteLine(commaSeperatedString);
        }

        public static void Eg2()
        {
            var ageSum = DataBase.Students.Aggregate(0, (sum, stu) =>
              {
                  return sum += stu.Age;
              });

            Console.WriteLine(ageSum);
        }
    }
}
