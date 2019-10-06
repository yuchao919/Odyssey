using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FlowControlDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            bool continueExecution = true;
            do
            {
                Console.Write("Enter First Name:");
                var firstName = Console.ReadLine();

                Console.Write("Enter Last Name:");
                var lastName = Console.ReadLine();

                Console.Write("Do you want to save it? Y/N: ");

                var wantToSave = Console.ReadLine();

                if (wantToSave.ToUpper() == "Y")
                    SaveToDB(firstName, lastName);

                Console.Write("Do you want to exit? Y/N: ");

                var wantToExit = Console.ReadLine();

                if (wantToExit.ToUpper() == "Y")
                    continueExecution = false;

            } while (continueExecution);
        }

        private static void SaveToDB(string firstName, string lastName)
        {
            Console.WriteLine("Save {0} and {1} to the database here..", firstName, lastName);
        }

    }
}
