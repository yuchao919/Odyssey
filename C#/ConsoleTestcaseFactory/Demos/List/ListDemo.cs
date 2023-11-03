namespace ConsoleTestcaseFactory;

public static class ListDemo
{
    public static void RemoveAllDemo()
    {
        List<int> list = new List<int>();
        list.Add(1);
        list.Add(2);
        list.Add(3);
        list.Add(4);

        list.RemoveAll(x => x % 2 == 0);

        Console.WriteLine(list.Count);
    }
}
