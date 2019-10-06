using System;
namespace DesignPattern.Decorator
{
    public class ConcreteComponentB : Decorator
    {
        private string State;
        public void SetState(string state)
        {
            this.State = state;
        }

        public ConcreteComponentB()
        {
            State = string.Empty;
        }

        public override void Operation()
        {
            base.Operation();
            Console.WriteLine("ConcreteComponentB Operation");
        }
    }
}
