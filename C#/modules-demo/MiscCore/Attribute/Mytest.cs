using System;
using System.Reflection;

namespace MiscCore.Attribute
{
    //应用自定义特性
    //可以以Myself或者MyselfAttribute作为特性名
    //可以给属性Memo赋值
    [Myself("Emma", 25, Memo = "Emma is my good girl.")]
    public class Mytest
    {
        public void SayHello()
        {
            Console.WriteLine("Hello, my.net world.");
        }
    }

    public static class MyRun
    {

        public static void Run()
        {
            //如何以反射确定特性信息
            Type tp = typeof(Mytest);
            MemberInfo info = tp;
            MyselfAttribute myAttribute = (MyselfAttribute)System.Attribute.GetCustomAttribute(info, typeof(MyselfAttribute));
            if (myAttribute != null)
            {
                //嘿嘿，在运行时查看注释内容，是不是很爽
                Console.WriteLine("Name: {0}", myAttribute.Name);
                Console.WriteLine("Age: {0}", myAttribute.Age);
                Console.WriteLine("Memo of {0} is {1}", myAttribute.Name, myAttribute.Memo);
                myAttribute.ShowName();
            }

            //多点反射
            object obj = Activator.CreateInstance(typeof(Mytest));

            MethodInfo mi = tp.GetMethod("SayHello");
            mi.Invoke(obj, null);
            Console.ReadLine();
        }
    }
}
