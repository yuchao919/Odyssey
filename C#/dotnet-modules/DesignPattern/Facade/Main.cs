using System;
namespace DesignPattern.Facade
{
    public class Main
    {
        public static void Run()
        {
            Facade facade = new Facade();

            facade.MethodA();
            facade.MethodB();

            Console.Read();
        }
    }
}
