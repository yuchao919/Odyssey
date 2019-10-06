using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TaskAsyncAwait
{
    public class Eg02
    {
        /// <summary>
        /// 展示Task可以有返回值
        /// </summary>
        public static void main()
        {
            // GetDayOfThisWeek 运行在另外一个线程中
            var dayName = Task.Run<string>(() => { return DateTime.Now.DayOfWeek.ToString(); });

            Console.WriteLine("今天是：{0}", dayName.Result);
        }
    }
}
