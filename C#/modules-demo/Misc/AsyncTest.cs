using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Misc
{
    public class AsyncTest
    {
        // Three things to note in the signature:
        //  - The method has an async modifier. 
        //  - The return type is Task or Task<T>. (See "Return Types" section.)
        //    Here, it is Task<int> because the return statement returns an integer.
        //  - The method name ends in "Async."
        public static async Task AccessTheWebAsync(string url)
        {
            // You need to add a reference to System.Net.Http to declare client.
            HttpClient client = new HttpClient();

            // GetStringAsync returns a Task<string>. That means that when you await the
            // task you'll get a string (urlContents).
            Task<string> getStringTask = client.GetStringAsync(url);

            // You can do work here that doesn't rely on the string from GetStringAsync.
            Console.WriteLine("DoIndependentWork();");

            // The await operator suspends AccessTheWebAsync.
            //  - AccessTheWebAsync can't continue until getStringTask is complete.
            //  - Meanwhile, control returns to the caller of AccessTheWebAsync.
            //  - Control resumes here when getStringTask is complete. 
            //  - The await operator then retrieves the string result from getStringTask.
            string urlContents = await getStringTask;

            Console.WriteLine("Length of {0} \t:{1}", url, urlContents.Length);
            // The return statement specifies an integer result.
            // Any methods that are awaiting AccessTheWebAsync retrieve the length value.
            return;
        }
    }
}