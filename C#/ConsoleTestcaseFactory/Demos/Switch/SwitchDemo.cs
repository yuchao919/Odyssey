using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTestcaseFactory.Demos
{
    public class SwitchDemo
    {
        public static void Run()
        {
            Fruit fruit = new Apple() { Color = "Yellow" };

            switch (fruit)
            {
                case Apple apple when apple.Color == "Green":
                    Console.WriteLine($"The {fruit.GetType().ToString()} is fresh");
                    break;
                case Apple apple when apple.Color == "Brown":
                    Console.WriteLine($"The {fruit.GetType().ToString()} is stale");
                    break;
                case Apple apple:
                case Banana banana:
                    Console.WriteLine($"{fruit.GetType().ToString()}");
                    break;
                default:
                    break;
            }

        }
    }

    public abstract class Fruit
    {
        public virtual string Color { get; set; }
    }

    public class Apple : Fruit
    {

        public override string Color { get; set; }
    }

    public class Banana : Fruit
    {
        public override string Color { get; set; }
    }

    public class Cherry : Fruit
    {
        public override string Color { get; set; }
    }
}
