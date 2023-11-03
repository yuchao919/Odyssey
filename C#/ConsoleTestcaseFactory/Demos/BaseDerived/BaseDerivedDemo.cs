namespace ConsoleTestcaseFactory;

public static class BaseDerivedDemo
{
    public static void Bcdc()
    {
        Console.WriteLine("Modifiers: none, virtual, override, new");
        /*
            总结：
                1. 只有Base写了virtual，子类写了override，方法才能执行派生类的方法
                2. new 可以算作基类方法的默认修饰符，不应该添加new修饰符，否则会有警告
                3. new 在派生类里需要使用，否则会有警告
                4. override 修饰符不能在基类里使用，否则报错
                5. override 在派生类使用的时候，基类的方法必须要用virtual, abstract, override修饰符，否则报错
                6. virtual 可以在基类、派生类使用，如果期望派生类改写，基类则必须使用virtual；如果不期望改写，派生类用new
                7. 正常的组合 none + new, virtual + new, virtual + override
        */

        BaseClass bcdc = new DerivedClass();

        Console.WriteLine("NoneNoneMethod: 'DerivedClass.NoneNoneMethod()' hides inherited member 'BaseClass.NoneNoneMethod()'. Use the new keyword if hiding was intended.CS0108");
        bcdc.NoneNewMethod();

        Console.WriteLine("NoneVirtualMethod: 'DerivedClass.NoneVirtualMethod()' hides inherited member 'BaseClass.NoneVirtualMethod()'. Use the new keyword if hiding was intended.CS0108");
        bcdc.NoneVirtualMethod();

        Console.WriteLine("NoneOverrideMethod: cannot override inherited member 'BaseClass.NoneOverrideMethod()' because it is not marked virtual, abstract, or override");

        Console.WriteLine("NoneNewMethod: ");
        bcdc.NoneNewMethod();

        Console.WriteLine("VirtualNoneMethod: 'DerivedClass.VirtualNoneMethod()' hides inherited member 'BaseClass.VirtualNoneMethod()'. To make the current member override that implementation, add the override keyword. Otherwise add the new keyword.CS0114");
        bcdc.VirtualNoneMethod();

        Console.WriteLine("VirtualVirtualMethod: 'DerivedClass.VirtualVirtualMethod()' hides inherited member 'BaseClass.VirtualVirtualMethod()'. To make the current member override that implementation, add the override keyword. Otherwise add the new keyword.CS0114");
        bcdc.VirtualVirtualMethod();

        Console.WriteLine("VirtualOverrideMethod: ");
        bcdc.VirtualOverrideMethod();

        Console.WriteLine("VirtualNewMethod: ");
        bcdc.VirtualNewMethod();

        Console.WriteLine("OverrideNoneMethod: no suitable method found to override");

        Console.WriteLine("OverrideVirtualMethod: no suitable method found to override");

        Console.WriteLine("OverrideOverrideMethod: 'DerivedClass.OverrideOverrideMethod()': no suitable method found to override");

        Console.WriteLine("OverrideNewMethod: no suitable method found to override\n");

        Console.WriteLine("NewNoneMethod: The member 'BaseClass.NewNoneMethod()' does not hide an accessible member. The new keyword is not required.");
        bcdc.NewNoneMethod();

        Console.WriteLine("NewVirtualMethod: The member 'BaseClass.NewVirtualMethod()' does not hide an accessible member. The new keyword is not required.'DerivedClass.NewVirtualMethod()' hides inherited member 'BaseClass.NewVirtualMethod()'. Use the new keyword if hiding was intended.");
        bcdc.NewVirtualMethod();

        Console.WriteLine("NewOverrideMethod: 'DerivedClass.NewOverrideMethod()': cannot override inherited member 'BaseClass.NewOverrideMethod()' because it is not marked virtual, abstract, or override");
        bcdc.NewOverrideMethod();

        Console.WriteLine("NewNewMethod: The member 'BaseClass.NewNewMethod()' does not hide an accessible member. The new keyword is not required.CS0109");
        bcdc.NewNewMethod();
    }
}
