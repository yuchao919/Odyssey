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


    

}
