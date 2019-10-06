using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace TaskAsyncAwait
{
    class Eg05
    {
        private static bool _isDone = false;
        private static object _lock = new object();

        /// <summary>
        /// 简单演示一下独占锁。
        /// </summary>
        public static void main()
        {
            new Thread(Done).Start();
            new Thread(Done).Start();
            Console.ReadLine();
        }

        static void Done()
        {
            lock (_lock)
            {
                if (!_isDone)
                {
                    Console.WriteLine("Done"); // 猜猜这里面会被执行几次？
                    _isDone = true;
                }
            }
        }
    }
}
