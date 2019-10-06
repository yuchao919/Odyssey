using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpTutorial
{
    public class T_ValueTuple
    {
        public static void Eg1()
        {
            var person1 = (1, "Bill", "Gates");
            ValueTuple<int, string, string> person2 = (1, "Bill", "Gates");
            (int Id, string FirstName, string LastName) person3 = (1, "Bill", "Gates");
            var person4 = (Id: 1, FirstName: "Bill", LastName: "Gates");
            person4.Id = 2;
            Console.WriteLine(person4);
        }

        public static void Eg2()
        {
            DisplayTuple((1, "Bill", "Gates"));
            Console.WriteLine(GetPerson().LastName);
        }

        static void DisplayTuple((int, string, string) person)
        {
            Console.WriteLine($"Id = { person.Item1}");
            Console.WriteLine($"First Name = { person.Item2}");
            Console.WriteLine($"Last Name = { person.Item3}");
        }

        static (int Id, string FirstName, string LastName) GetPerson()
        {
            return (Id: 1, FirstName: "Bill", LastName: "Gates");
        }
    }
}
