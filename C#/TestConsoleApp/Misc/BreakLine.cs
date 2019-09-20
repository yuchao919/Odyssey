using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsoleApp.Misc
{
    public class BreakLine
    {
        public static void Run()
        {
            string str = @"
                            1
                            2
                            3
                            4
                            5
                            ";
            Console.WriteLine(str);

            Console.Read();
        }
    }
}
