namespace ConsoleTestcaseFactory;

public class IntDemo
{
    public static void ToStringFormat()
    {
        for (int i = 0; i < 20; i++)
        {
            System.Console.WriteLine(i.ToString("00"));
        }
    }
}
