using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsoleApp
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var result = await innerCalculate(1);
            Console.WriteLine(result);

            Console.Read();

            async Task<int> innerCalculate(int number)
            {
                return await Calculate(number);
            }
        }

        static async Task<int> Calculate(int number)
        {
            return await Task.Run<int>(() => { return number * 2; });
        }
    }
}
