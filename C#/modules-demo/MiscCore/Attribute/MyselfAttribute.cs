using System;

namespace MiscCore.Attribute
{
    //定制特性也可以应用在其他定制特性上，
    //应用AttributeUsage，来控制如何应用新定义的特性
    [AttributeUsageAttribute(AttributeTargets.All,       //可应用任何元素
        AllowMultiple = true,                            //允许应用多次
        Inherited = false)]                              //不继承到派生类
    //特性也是一个类，
    //必须继承自System.Attribute类，
    //命名规范为："类名"+Attribute。        
    public class MyselfAttribute : System.Attribute
    {
        //定义字段
        private string _name;
        private int _age;
        private string _memo;

        //必须定义其构造函数，如果不定义有编译器提供无参默认构造函数
        public MyselfAttribute()
        {
        }
        public MyselfAttribute(string name, int age)
        {
            _name = name;
            _age = age;
        }

        //定义属性
        //显然特性和属性不是一回事儿
        public string Name
        {
            get { return _name == null ? string.Empty : _name; }
        }

        public int Age
        {
            get { return _age; }
        }

        public string Memo
        {
            get { return _memo; }
            set { _memo = value; }
        }

        //定义方法
        public void ShowName()
        {
            Console.WriteLine("Hello, {0}", _name == null ? "world." : _name);
        }
    }
}