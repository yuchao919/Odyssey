using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTestcaseFactory.Demos
{
    public partial class StringDemo
    {
        public static void Run_BreakLine()
        {
            string str = @"
                            1
                            2
                            3
                            4
                            5
                            ";
            Console.WriteLine(str);
        }
    }
}
