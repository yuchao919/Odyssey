using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace CSharpTutorial
{
    public delegate void Print(int value);

    public class AnonymousMethod
    {
        public static event Print PrintEvent;

        public static void Eg1()
        {
            PrintEvent += delegate (int val)
            {
                Console.WriteLine("Add {0}", val);
            };

            PrintEvent(1);

            Print print = delegate (int val)
                {
                    Console.WriteLine("Inside Anonymous method. Value: {0}", val);
                };

            print(100);
        }

        public static void Eg2()
        {

            Func<int, int, int> Sum = delegate (int i, int j)
                {
                    return i + j;
                };
            Console.WriteLine(Sum(1, 2));
        }
    }
}