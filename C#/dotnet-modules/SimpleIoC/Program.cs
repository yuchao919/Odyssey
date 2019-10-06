using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleIoC
{
    class Program
    {
        static void Main(string[] args)
        {
            //ConstructorInjection.Main.Run();
            //PropertyInjection.Main.Run();
            MethodInjection.Main.Run();
            Console.Read();
        }
    }
}
