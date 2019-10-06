using System;
using System.Diagnostics;

namespace MiscCore.Attribute
{
    public class Myclass
    {
        [Conditional("DEBUG")]
        public static void Message(string msg)
        {
            Console.WriteLine(msg);
        }
    }
    class ConditionalTest
    {
        static void function1()
        {
            Myclass.Message("In Function 1.");
            function2();
        }
        static void function2()
        {
            Myclass.Message("In Function 2.");
        }
        public static void Run()
        {
            Myclass.Message("In Main function.");
            function1();
        }
    }
}