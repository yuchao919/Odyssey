using System;
namespace DesignPattern.Decorator
{
    public class ConcreteComponent : Component
    {
        public override void Operation()
        {
            Console.WriteLine("具体对象的操作");
        }
    }
}