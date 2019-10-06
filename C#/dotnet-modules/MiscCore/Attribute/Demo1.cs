using System;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace MiscCore.Attribute
{
    public class Demo1
    {

        [DllImport("User32.dll")]
        public static extern int MessageBox(int hParent, string Message, string Caption, int Type);

        public static void Run(string[] args)
        {
            DisplayRunningMessage();
            DisplayDebugMessage();

            MessageBox(0, "Hello", "Message", 0);

            Console.ReadLine();
        }

        [Conditional("DEBUG")]
        private static void DisplayRunningMessage()
        {
            Console.WriteLine("开始运行Main子程序。当前时间是" + DateTime.Now);
        }

        [Conditional("DEBUG")]
        [Obsolete]
        private static void DisplayDebugMessage()
        {
            Console.WriteLine("开始Main子程序");
        }
    }
}