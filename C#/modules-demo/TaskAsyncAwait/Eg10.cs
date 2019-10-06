using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TaskAsyncAwait
{
    class Eg10
    {
        public static void main()
        {
            Console.WriteLine("Main Thread Id: {0}\r\n", Thread.CurrentThread.ManagedThreadId);
            Test();
            Console.ReadLine();
        }

        static async Task Test()
        {
            Console.WriteLine("Before calling GetName, Thread Id: {0}\r\n", Thread.CurrentThread.ManagedThreadId);
            var name = GetName();   //我们这里没有用 await,所以下面的代码可以继续执行
                                    // 但是如果上面是 await GetName()，下面的代码就不会立即执行，输出结果就不一样了。
            Console.WriteLine("End calling GetName.\r\n"); // ***
            Console.WriteLine("Get result from GetName: {0}", await name);
        }

        static async Task<string> GetName()
        {
            // 这里还是主线程
            Console.WriteLine("Before calling Task.Run, current thread Id is: {0}", Thread.CurrentThread.ManagedThreadId);
            return await Task.Run(() =>
            {
                Console.WriteLine("GetName Task Run. Thread Id: {0}", Thread.CurrentThread.ManagedThreadId);// 有可能在 *** 之前执行
                Thread.Sleep(1000);
                Console.WriteLine("'GetName' Thread Id: {0}", Thread.CurrentThread.ManagedThreadId);
                return "Jesse";
            });
        }

    }
}
