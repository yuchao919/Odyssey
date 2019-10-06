using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TaskAsyncAwait
{
    class Eg11
    {
        /// <summary>
        /// 不用await关键字，确认Task执行完毕
        /// </summary>
        public static void main()
        {
            var task = Task.Run(() =>
            {
                return GetName();
            });
            // 解释Task.GetAwaiter()和await Task 的区别？
            // * 加上await关键字之后，后面的代码会被挂起等待，直到task执行完毕有返回值的时候才会继续向下执行，这一段时间主线程会处于挂起状态。
            // * GetAwaiter方法会返回一个awaitable的对象（继承了INotifyCompletion.OnCompleted方法）我们只是传递了一个委托进去，等task完成了就会执行这个委托，
            // 但是并不会影响主线程，下面的代码会立即执行。这也是为什么我们结果里面第一句话会是 “主线程执行完毕”！
            task.GetAwaiter().OnCompleted(() =>
            {
                // 2 秒之后才会执行这里
                var name = task.Result;
                Console.WriteLine("My name is: " + name);
            });

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
