using ConsoleTestcaseFactory.Demos;
using System;

namespace ConsoleTestcaseFactory
{
    class Program
    {
        static void Main(string[] args)
        {
            //ProgressBar.Run();
            Console.WriteLine(0.1 + 0.2);
            Console.WriteLine((0.1 + 0.2) == 0.3);
            Console.WriteLine(Math.Round(4.475, 2));
            Console.WriteLine(Math.Round(4.265, 2));
            Console.WriteLine(Math.Round(4.266, 2));

            Console.ReadKey();
        }
    }
}
