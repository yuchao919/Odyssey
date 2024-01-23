using System;
namespace ConsoleTestcaseFactory;

public class DecimalDemo
{

    public static void AddNull()
    {
        decimal? a = null;
        decimal? b = 123;

        // c是null值
        decimal? c = a + b;

        System.Console.WriteLine(c);
    }


    public static void WhereSum()
    {
        List<Foo> foos = new List<Foo>()
        {
            new Foo(){Name= "A", Val = 1},
            new Foo(){Name= "A", Val = 2},
            new Foo(){Name= "A", Val = null}
        };


        Console.WriteLine("A Sum 0:");
        Console.WriteLine(foos.FindAll(x => x.Name == "A").Select(x => x.Val).Sum());
        Console.WriteLine("B Sum 0:");
        Console.WriteLine(foos.FindAll(x => x.Name == "B").Select(x => x.Val).Sum());
    }


    public static void CellingDemo()
    {
        System.Console.WriteLine($"{(int)Math.Ceiling(2 * 1.0 / 3)}");
    }

    public static void ToStringDemo()
    {
        decimal d = 123.456M;

        System.Console.WriteLine("#0.00 : " + d.ToString("#0.00"));
        System.Console.WriteLine("0.00 : " + d.ToString("0.00"));
    }

    public static void SumDemo()
    {
        List<decimal?> list = new List<decimal?>();

        decimal sum = list.Select(x => x.GetValueOrDefault()).Sum();

        System.Console.WriteLine(sum);
    }


    public static void ZeroPointOne()
    {
        decimal x = 1.0M / 10;
        decimal y = 1 - 9.0M / 10;
        System.Console.WriteLine(x); // 0.1
        System.Console.WriteLine(y); // 0.1
        System.Console.WriteLine(x == y); // true
    }

}