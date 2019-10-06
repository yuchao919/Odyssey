using LinqSample.Operators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSample
{
    class Program
    {
        static void Main(string[] args)
        {
            //Join.Eg1();
            //GroupJoin.Eg1();

            //Aggregate.Eg1();
            //Aggregate.Eg2();

            //SequenceEqual.Eg1();

            //Intersect.Eg1();

            //TakeWhile.Eg1();

            Conversion.Eg1();

            Console.Read();
        }
    }

    #region DummyDatabase
    public class Student
    {
        public int StudentID { get; set; }
        public String StudentName { get; set; }
        public int Age { get; set; }
        public int StandardID { get; set; }
    }

    public class Standard
    {
        public int StandardID { get; set; }
        public string StandardName { get; set; }
    }

    public class DataBase
    {
        public static List<Student> Students = new List<Student>
        {
            new Student() { StudentID = 1, StudentName = "John", Age = 18, StandardID = 1 },
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 21, StandardID = 2 },
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 25, StandardID = 3 },
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID = 2 },
            new Student() { StudentID = 5, StudentName = "Ron" , Age = 31, StandardID = 1 },
            new Student() { StudentID = 6, StudentName = "Chris",  Age = 17 },
            new Student() { StudentID = 7, StudentName = "Rob",Age = 19  },
        };

        public static List<Standard> Standards = new List<Standard>()
        {
            new Standard(){ StandardID = 1, StandardName="Standard1"},
            new Standard(){ StandardID = 2, StandardName="Standard2"},
            new Standard(){ StandardID = 3, StandardName="Standard3"}
        };
    }
    #endregion
}
