using System;
namespace DesignPattern.Decorator
{
    public class ConcreteComponentA : Decorator
    {
        private string State;

        public ConcreteComponentA()
        {
            State = "Begin";
        }

        public void ShowState()
        {
            Console.WriteLine("ConcreteA State:{0}", this.State);
        }

        public override void Operation()
        {
            base.Operation();
            Console.WriteLine("ConcreteComponent");
        }
    }
}
