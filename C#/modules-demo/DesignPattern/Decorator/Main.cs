using System;
namespace DesignPattern.Decorator
{
    public static class Main
    {
        public static void Run()
        {
            ConcreteComponent comp = new ConcreteComponent();
            ConcreteComponentA comA = new ConcreteComponentA();
            ConcreteComponentB comB = new ConcreteComponentB();

            comA.SetComponent(comp);
            comB.SetComponent(comA);
            comB.Operation();
            comB.SetState("Finish");
            comA.ShowState();


            Console.Read();

        }
    }
}
