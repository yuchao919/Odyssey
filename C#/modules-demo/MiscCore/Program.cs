using System;

using MiscCore.Attribute;

namespace MiscCore
{
    class Program
    {
        static void Main(string[] args)
        {
            //ConditionalTest.Run();
            //DebugInfoSample.Run();

            Animal animals = Animal.Dog | Animal.Cat | Animal.Duck;
            Console.WriteLine(animals.ToString());

            //MyRun.Run();
            //Demo1.Run(args);


            //Console.WriteLine(1 | 2);

            Console.ReadKey();
        }
    }

    //[Flags]
    enum Animal
    {
        Dog = 0x0001,
        Cat = 0x0002,
        Duck = 0x0004,
        Chicken = 0x0008
    }
}
