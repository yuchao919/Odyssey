using System;
namespace DesignPattern.TemplateMethod
{
    public class ConcreteClassA : AbstractClass
    {
        public override void PrimitiveOperation1()
        {
            Console.WriteLine("ConcreteClassA Method 1");
        }

        public override void PrimitiveOperation2()
        {
            Console.WriteLine("ConcreteClassA Method 2");
        }
    }
}
