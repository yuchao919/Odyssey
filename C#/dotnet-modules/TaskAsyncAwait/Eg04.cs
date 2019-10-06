using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace TaskAsyncAwait
{
    public class Eg04
    {
        private static bool _isDone = false;

        /// <summary>
        /// 共享数据
        /// </summary>
        public static void main()
        {
            new Thread(Done).Start();
            new Thread(Done).Start();
        }

        static void Done()
        {
            if (!_isDone)
            {
                //Console.WriteLine("before"); // 执行两次
                _isDone = true; // 第二个线程来的时候，就不会再执行了(也不是绝对的，取决于计算机的CPU数量以及当时的运行情况)
                Console.WriteLine("Done");
            }
        }

    }
}
