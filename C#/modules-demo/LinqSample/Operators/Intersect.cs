using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSample.Operators
{
    class Intersect
    {
        public static void Eg1()
        {
            IList<Student> studentList1 = new List<Student>() {
                new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }
            };

            IList<Student> studentList2 = new List<Student>() {
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }
            };

            var resultedCol = studentList1.Intersect(studentList2, new StudentComparer());

            foreach (Student std in resultedCol)
                Console.WriteLine(std.StudentName);
        }

        public class Student
        {
            public int StudentID { get; set; }
            public string StudentName { get; set; }
            public int Age { get; set; }
        }

        class StudentComparer : IEqualityComparer<Student>
        {
            public bool Equals(Student x, Student y)
            {
                if (x.StudentID == y.StudentID &&
                                x.StudentName.ToLower() == y.StudentName.ToLower())
                    return true;

                return false;
            }

            public int GetHashCode(Student obj)
            {
                return obj.StudentID.GetHashCode();
            }
        }
    }
}
