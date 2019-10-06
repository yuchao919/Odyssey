using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace TaskAsyncAwait
{
    class Eg06
    {
        static SemaphoreSlim _sem = new SemaphoreSlim(3);    // 我们限制能同时访问的线程数量是3

        /// <summary>
        /// Semaphore 信号量
        /// </summary>
        public static void main()
        {
            for (int i = 1; i <= 5; i++) new Thread(Enter).Start(i);
            Console.ReadLine();
        }

        static void Enter(object id)
        {
            Console.WriteLine(id + " 开始排队...");
            _sem.Wait();
            Console.WriteLine(id + " 开始执行！");
            Thread.Sleep(1000 * (int)id);
            Console.WriteLine(id + " 执行完毕，离开！");
            _sem.Release();
        }
    }
}
