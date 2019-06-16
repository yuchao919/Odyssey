using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EssentialConsole.Demos
{
    public class UriDemo
    {
        public static void Run(string url = "http://www.microsoft.com/en/us/default.aspx")
        {
            System.Uri ms = new Uri(url);
            Console.WriteLine("Scheme: {0}", ms.Scheme);
            Console.WriteLine("Host: {0}", ms.Host);
            Console.WriteLine("Port: {0}", ms.Port);
            Console.WriteLine("AbsolutePath: {0}", ms.AbsolutePath);
            Console.WriteLine("Query: {0}", ms.Query);
        }
    }
}
