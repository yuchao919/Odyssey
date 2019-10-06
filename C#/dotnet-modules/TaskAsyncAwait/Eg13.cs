using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TaskAsyncAwait
{
    class Eg13
    {
        public static void main()
        {
            Test();
        }

        static async Task Test()
        {
            Task<string> task = Task.Run(() =>
            {
                Console.WriteLine("另一个线程在运行！");  // 这句话只会被执行一次
                Thread.Sleep(2000);
                return "Hello World";
            });

            // 这里主线程会挂起等待，直到task执行完毕我们拿到返回结果
            var result1 = task.GetAwaiter().GetResult();
            Console.WriteLine("result1: {0}", result1);
            // 这里不会挂起等待，因为task已经执行完了，我们可以直接拿到结果
            var result2 = await task;
            Console.WriteLine("result2: {0}", result2);
            Console.WriteLine("Done");
        }
    }
}
