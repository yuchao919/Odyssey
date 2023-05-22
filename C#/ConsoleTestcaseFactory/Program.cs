using System.Linq;
using Microsoft.VisualBasic.CompilerServices;
using System.ComponentModel;
using System.Collections.Generic;
using System.Linq.Expressions;
using ConsoleTestcaseFactory.Demos;
using System;

namespace ConsoleTestcaseFactory
{
    class Program
    {
        static void Main(string[] args)
        {
            //ProgressBar.Run();
            // Console.WriteLine(0.1 + 0.2);
            // Console.WriteLine((0.1 + 0.2) == 0.3);
            // Console.WriteLine(Math.Round(4.475, 2));
            // Console.WriteLine(Math.Round(4.265, 2));
            // Console.WriteLine(Math.Round(4.266, 2));
            // Console.WriteLine(Math.Round(4.47599, 2) + "%");
            // Console.WriteLine(Math.Round(0.0, 2) + "%");

            // List<A> a = new List<A>()
            // {
            //     new A () { NumList= new List<int> { 1, 2, 3 } },
            //     // new A () { NumList= new List<int> { 3, 4, 5 } },
            // };

            // IEnumerable<int> b = a.SelectMany(x => x.NumList).Distinct().ToList();

            // a.Clear();

            // System.Console.WriteLine(a.Sum(x => x.Num));

            // List<(int?, decimal?)?> list = Enumerable.Repeat<(int?, decimal?)?>(null, 4).ToList();
            // System.Console.WriteLine(list[0]);

            // List<decimal> list = new List<decimal>() { 12, 12.0M, 12.995M, 12.001M };
            // foreach (var item in list)
            // {
            //     System.Console.WriteLine(string.Format("{0:N2}", item));
            // }


            // Expression<Func<A,bool>> predicate = x=>1==1;

            // List<int> a = new List<int>() { 1, 2, 3 };
            // List<List<int>> b = new List<List<int>>()
            // {
            //     new List<int>(){ 1, },
            //     new List<int>(){ 1, 2 },
            //     new List<int>(){ 1, 2, 3 },
            // };

            // System.Console.WriteLine(b.SelectMany(x => x).ToList().Count);

            // List<decimal?> a = new List<decimal?>()
            // {
            //     null,
            //     1,
            //     2,
            //     3,
            //     null
            // };

            // System.Console.WriteLine(a.Where(x => x.HasValue && x > 10).Average(x => x) == null);


            // Console.Read();

            // var a = "asdasd,asdasd";
            // ConvertToList<Guid>(a);

            // var a = Enumerable.Range(1, 12).ToList();
            // System.Console.WriteLine(a.Count);
            // List<int> a = null;

            // Console.WriteLine(a.IsExistData());

            List<(Guid, Guid)> list = new List<(Guid, Guid)>()
            {
                (Guid.Parse("08db3cbd-8a9e-4da8-8b17-712e14fdf72d"),Guid.Parse("08db3cbd-8a9e-4da8-8b17-712e14fdf72d")),
                (Guid.Parse("08db3cbd-8a9e-4da8-8b17-712e14fdf72d"),Guid.Parse("08db3cbd-8a9e-4da8-8b17-712e14fdf72d"))
            };
            list = list.Distinct().ToList();

            System.Console.WriteLine(list.Count);
            ;
        }


        /// <summary>
        /// 把Guid字符串转为List对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="listStr">数组字符串</param>
        /// <param name="separator">分隔符，默认为 ,</param>
        /// <returns></returns>
        public static List<T> ConvertToList<T>(string listStr, params char[] separator)
        {
            if (string.IsNullOrEmpty(listStr))
            {
                return new List<T>();
            }
            var realSeparator = separator;
            if (separator.Length == 0)
            {
                realSeparator = new char[1] { ',' };
            }
            List<T> result = new List<T>();
            string[] inputStrArr = listStr.Split(realSeparator, StringSplitOptions.RemoveEmptyEntries);
            string typeName = typeof(T).Name;
            Func<string, object> func;
            // 遍历根据类型返回转换函数
            switch (typeName)
            {
                case "String":
                    func = (str) =>
                    {
                        return str;
                    };
                    break;

                case "Guid":
                    func = (str) =>
                    {
                        Guid g;
                        if (Guid.TryParse(str, out g))
                        {
                            return g;
                        }
                        throw new ArgumentException();
                    };
                    break;

                case "Int32":
                    // int类型
                    func = (str) =>
                    {
                        int i;
                        if (int.TryParse(str, out i))
                        {
                            return i;
                        }
                        throw new ArgumentException();
                    };
                    break;

                default:
                    throw new NotImplementedException();
            }
            // 转换
            foreach (var item in inputStrArr)
            {
                result.Add((T)func(item));
            }

            return result;
        }

    }

    class A
    {
        /// <summary>
        ///  
        /// </summary>
        public virtual int? Num { get; set; }

        /// <summary>
        ///  
        /// </summary>
        public virtual List<int> NumList { get; set; } = new List<int>();
    }


    static class Utils
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="source"></param>
        /// <returns></returns>
        public static bool IsExistData<TSource>(this IEnumerable<TSource> source)
        {
            if (source is null || !source.Any())
            {
                return false;
            }
            return true;
        }
    }
}
