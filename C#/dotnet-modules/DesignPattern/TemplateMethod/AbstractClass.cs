using System;
namespace DesignPattern.TemplateMethod
{
    public abstract class AbstractClass
    {
        public abstract void PrimitiveOperation1();
        public abstract void PrimitiveOperation2();

        public void TemplateMathod()
        {
            PrimitiveOperation1();
            PrimitiveOperation2();
            Console.WriteLine("TemplateMethod()");
        }
    }
}
