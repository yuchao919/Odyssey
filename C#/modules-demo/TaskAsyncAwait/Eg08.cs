using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TaskAsyncAwait
{
    class Eg08
    {
        public static void main()
        {
            try
            {
                var task = Task.Run(() => { Go(); });
                task.Wait();  // 在调用了这句话之后，主线程才能捕获task里面的异常

                // 对于有返回值的Task, 我们接收了它的返回值就不需要再调用Wait方法了
                // GetName 里面的异常我们也可以捕获到
                var task2 = Task.Run(() => { return GetName(); });
                var name = task2.Result;// 连同上面那个也注释掉就不会捕获task的异常了
            }
            catch
            {
                Console.WriteLine("Exception!");
            }
        }
        static void Go() { throw null; }
        static string GetName() { throw null; }
    }
}
