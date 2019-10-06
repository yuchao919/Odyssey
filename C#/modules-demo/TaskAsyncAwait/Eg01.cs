using System;
using System.Threading;
using System.Threading.Tasks;

namespace TaskAsyncAwait
{
    public class Eg01
    {
        /// <summary>
        /// 三种线程，并且可以传入参数
        /// </summary>
        public static void main()
        {
            // .NET 1.0开始就有的
            new Thread(Go).Start("new Thread .Start");
            // .NET 4.0 引入了 TPL
            Task.Factory.StartNew(() =>
            {
                Go("Task.Factory.StartNew");
            });
            // .NET 4.5 新增了一个Run的方法
            Task.Run(() =>
            {
                Go("Task.Run");
            });
        }

        public static void Go(object type)
        {
            Console.WriteLine("我是另一个线程:Thread Id {0} - Type:{1}", Thread.CurrentThread.ManagedThreadId, type);
        }
    }
}
