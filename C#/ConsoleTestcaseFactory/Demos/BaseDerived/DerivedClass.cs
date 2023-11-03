namespace ConsoleTestcaseFactory;

public class DerivedClass : BaseClass
{
    public void NoneNoneMethod() { Console.WriteLine("Derived - NoneNoneMethod\n"); }

    public virtual void NoneVirtualMethod() { Console.WriteLine("Derived - NoneVirtualMethod\n"); }

    // public override void NoneOverrideMethod() { Console.WriteLine("Derived - NoneOverrideMethod\n"); }

    public new void NoneNewMethod() { Console.WriteLine("Derived - NoneNewMethod\n"); }

    public void VirtualNoneMethod() { Console.WriteLine("Derived - VirtualNoneMethod\n"); }

    public virtual void VirtualVirtualMethod() { Console.WriteLine("Derived - VirtualVirtualMethod\n"); }

    public override void VirtualOverrideMethod() { Console.WriteLine("Derived - VirtualOverrideMethod\n"); }

    public new void VirtualNewMethod() { Console.WriteLine("Derived - VirtualNewMethod\n"); }

    public void OverrideNoneMethod() { Console.WriteLine("Derived - OverrideNoneMethod\n"); }

    public virtual void OverrideVirtualMethod() { Console.WriteLine("Derived - OverrideVirtualMethod\n"); }

    // public override void OverrideOverrideMethod() { Console.WriteLine("Derived - OverrideOverrideMethod\n"); }

    public new void OverrideNewMethod() { Console.WriteLine("Derived - OverrideNewMethod\n"); }

    public void NewNoneMethod() { Console.WriteLine("Derived - NewNoneMethod\n"); }

    public virtual void NewVirtualMethod() { Console.WriteLine("Derived - NewVirtualMethod\n"); }

    // public override void NewOverrideMethod() { Console.WriteLine("Derived - NewOverrideMethod\n"); }

    public new void NewNewMethod() { Console.WriteLine("Derived - NewNewMethod\n"); }

}
