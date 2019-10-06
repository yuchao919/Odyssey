using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSample.Operators
{
    class Join
    {
        public static void Eg1()
        {
            var data = DataBase.Students.Join(DataBase.Standards, a => a.StandardID, b => b.StandardID, (a, b) => new
            {
                ID = a.StudentID,
                StandardName = b.StandardName
            });

            foreach (var item in data)
            {
                Console.WriteLine("StudentID:{0}, StandardName:{1}", item.ID, item.StandardName);
            }
        }
    }
}
