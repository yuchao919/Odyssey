using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSample
{
    public class MyQuery
    {
        public List<Student> Query(Func<Student, bool> predicate)
        {
            List<Student> stuList = new List<Student>();
            foreach (var item in DataBase.Students)
            {
                if (predicate(item))
                {
                    stuList.Add(item);
                }
            }
            return stuList;
        }

        public List<Student> QueryUse()
        {
            return Query(delegate (Student stu)
             {
                 return stu.Age > 10;
             });
        }

        //public delegate bool Predicate(Student stu);

        //public List<Student> DelegateQuery(Predicate)
        //{
        //    List<Student> stuList = new List<Student>();
        //    foreach (var item in DataBase.Students)
        //    {
        //        if (predict(item))
        //        {
        //            stuList.Add(item);
        //        }
        //    }
        //    return stuList;
        //}
    }
}
