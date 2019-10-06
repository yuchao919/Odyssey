using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF6
{
    class Program
    {
        static void Main(string[] args)
        {
            //using (var context = new SchoolDBEntities())
            //{
            //    var std = new Student()
            //    {
            //        StudentName= "hello"
            //    };
            //    context.Students.Add(std);

            //    context.SaveChanges();
            //}

            //using (var context = new SchoolDBEntities())
            //{
            //    var std = context.Students.First<Student>();
            //    std.StudentName = "Steve";
            //    context.SaveChanges();
            //}

            //using (var context = new SchoolDBEntities())
            //{
            //    var query = context.Students
            //                       .Where(s => s.StudentName == "hello")
            //                       .FirstOrDefault<Student>();
            //    Console.WriteLine(query.ToString());
            //}

            //using (var ctx = new SchoolDBEntities())
            //{
            //    var student = ctx.Students.SqlQuery("Select * from Student where studentname='hello'").FirstOrDefault<Student>();
            //    var studentId = ctx.Database.SqlQuery<int>("SELECT StudentId FROM Student WHERE StudentName='hello'").FirstOrDefault();
            //}

            //using (var ctx = new SchoolDBEntities())
            //{
            //    string name = "hello";
            //    var student = ctx.Students
            //                  .Where(s => s.StudentName == name);
            //    Console.WriteLine( student.ToString());

            //}

            //using (var ctx = new SchoolDBEntities())
            //{
            //    var anonymousObjResult = from st in ctx.Students
            //                             //where st.StudentName == "hello"
            //                             select new
            //                             {
            //                                 Id = st.StudentID,
            //                                 Name = st.StudentName
            //                             };
            //    foreach (var obj in anonymousObjResult)
            //    {
            //        Console.WriteLine("StudentId:{0} \t StudentName:{1}",obj.Id,obj.Name);
            //    }
            //    Console.Read();
            //}

            //using (var ctx = new SchoolDBEntities())
            //{
            //    var data = from st in ctx.Students
            //               join addr in ctx.StudentAddresses on st.StudentID equals addr.StudentID into s_sa
            //               from s in s_sa.DefaultIfEmpty()
            //               select new
            //               {
            //                   st.StudentID,
            //                   st.StudentName,
            //                   s.Address1,
            //                   s.Address2
            //               };
            //    foreach (var d in data)
            //    {
            //        Console.WriteLine("{0} \t {1} \t {2}", d.StudentName, d.Address1, d.Address2);
            //    }
            //}
            //using (var ctx = new SchoolDBEntities())
            //{
            //    var stud = ctx.Students.Where(s => s.StudentName == "Steve").FirstOrDefault<Student>();

            //    var stud1 = ctx.Students.Include("Standard.Teachers")
            //                    .Where(s => s.StudentName == "Steve")
            //                    .FirstOrDefault<Student>();
            //    var course = stud1.Courses.FirstOrDefault<Course>();
            //    ;
            //}

            AsyncQuery.GetStudent().Wait();
        }
    }
}
