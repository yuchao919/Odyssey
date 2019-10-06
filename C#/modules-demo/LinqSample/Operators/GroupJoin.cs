using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSample.Operators
{
    public class GroupJoin
    {
        public static void Eg1()
        {
            var data = DataBase.Students.GroupJoin(DataBase.Standards,
                a => a.StandardID,
                b => b.StandardID,
                (a, b) => new
                {
                    ID = a.StudentID,
                    Standard = b.FirstOrDefault()
                }).Select(x => new
                {
                    ID = x.ID,
                    StandardName = x.Standard == null ? string.Empty : x.Standard.StandardName
                });

            foreach (var item in data)
            {
                Console.WriteLine("StudentID:{0}, StandardName:{1}", item.ID, item.StandardName);
            }
        }
    }
}
