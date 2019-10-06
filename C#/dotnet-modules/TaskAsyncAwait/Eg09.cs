using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TaskAsyncAwait
{
    public class Eg09
    {
        public static void main()
        {
            var task = Test(); // 这个方法其实是多余的, 本来可以直接写下面的方法
                               // await GetName() 
                               // 但是由于控制台的入口方法不支持async,所有我们在入口方法里面不能 用 await

            Console.WriteLine("Current Thread Id :{0}", Thread.CurrentThread.ManagedThreadId);
        }

        static async Task Test()
        {
            // 方法打上async关键字，就可以用await调用同样打上async的方法
            // await 后面的方法将在另外一个线程中执行
            await GetName();
        }

        static async Task GetName()
        {
            // Delay 方法来自于.net 4.5
            await Task.Delay(1000);  // 返回值前面加 async 之后，方法里面就可以用await了
            Console.WriteLine("Current Task Thread Id :{0}", Thread.CurrentThread.ManagedThreadId);
            Console.WriteLine("In antoher thread.....");
        }
    }
}
