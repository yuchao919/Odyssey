using System;
namespace DesignPattern.TemplateMethod
{
    public class Main
    {
        public static void Run()
        {
            AbstractClass obj = new ConcreteClassA();
            obj.TemplateMathod();

            obj = new ConcreteClassB();
            obj.TemplateMathod();

            Console.Read();
        }
    }
}
