using System;
namespace DesignPattern.TemplateMethod
{
    public class ConcreteClassB : AbstractClass
    {
        public override void PrimitiveOperation1()
        {
            Console.WriteLine("ConcreteClassB Method 1");
        }

        public override void PrimitiveOperation2()
        {
            Console.WriteLine("ConcreteClassB Method 2");
        }
    }
}
