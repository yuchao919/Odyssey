using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace TaskAsyncAwait
{
    public class Eg03
    {
        /// <summary>
        /// 线程池
        /// </summary>
        public static void main()
        {
            Console.WriteLine("我是主线程：Thread Id {0}", Thread.CurrentThread.ManagedThreadId);
            ThreadPool.QueueUserWorkItem(Go);

            Console.ReadLine();
        }

        public static void Go(object data)
        {
            Console.WriteLine("我是另一个线程:Thread Id {0}", Thread.CurrentThread.ManagedThreadId);
        }
    }
}
