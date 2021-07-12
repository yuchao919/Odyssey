using System;
using System.Collections.Generic;

namespace SnippetTrick
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Decimal> sample = new List<Decimal>
            {
                1234567890123456789.99M
            };
            sample.ForEach(x => Console.WriteLine(Snippet.ConvertToChinese(x)));
        }
    }
}
