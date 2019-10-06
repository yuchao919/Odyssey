using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace TaskAsyncAwait
{
    class Eg07
    {
        public static void main()
        {
            try
            {
                new Thread(Go).Start();
            }
            catch (Exception ex)
            {
                // 其它线程里面的异常，我们这里面是捕获不到的。
                Console.WriteLine("Exception! {0}", ex.Message);
            }
        }
        static void Go() { throw null; }
    }
}
