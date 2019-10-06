using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misc
{
    class Program
    {
        static void Main(string[] args)
        {
            //string content = AsyncTest.AccessTheWebAsync().Result;
            string[] urls = { "http://msdn.microsoft.com", "https://www.baidu.com", "https://www.google.com", "https://www.zhihu.com" };

            foreach (var u in urls)
            {
                AsyncTest.AccessTheWebAsync(u);
            }

            Console.WriteLine("Done");
            //Console.WriteLine(content.Length);
            Console.Read();
        }
    }
}
