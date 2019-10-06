using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TaskAsyncAwait
{
    class Eg12
    {
        public static void main()
        {
            var task = Task.Run(() =>
            {
                return GetName();
            });

            var name = task.GetAwaiter().GetResult();
            //var name = task.Result; // 与上面是不是等价的？
            Console.WriteLine("My name is:{0}", name);

            //task.GetAwaiter().OnCompleted(() =>
            //{
            //    Console.WriteLine("Task.OnComplete My name is:{0}", task.Result);
            //});


            Console.WriteLine("主线程执行完毕");
            Console.ReadLine();
        }

        static string GetName()
        {
            Console.WriteLine("另外一个线程在获取名称");
            Thread.Sleep(2000);
            return "Jesse";
        }
    }
}
