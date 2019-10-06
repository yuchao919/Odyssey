using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSample.Operators
{
    class SequenceEqual
    {
        public static void Eg1()
        {
            IList<int> list = new List<int> { 1, 2, 3, 4, 5, 6, 7 };
            var isEqual = DataBase.Students.Select(x => x.StudentID).SequenceEqual(list);
            Console.WriteLine(isEqual);
        }
    }
}
