namespace ConsoleTestcaseFactory;

public class BaseClass
{
    public void NoneNoneMethod()
    {
        Console.WriteLine("Base - NoneNoneMethod\n");
    }

    public void NoneVirtualMethod()
    {
        Console.WriteLine("Base - NoneVirtualMethod\n");
    }

    public void NoneOverrideMethod()
    {
        Console.WriteLine("Base - NoneOverrideMethod\n");
    }

    public void NoneNewMethod()
    {
        Console.WriteLine("Base - NoneNewMethod\n");
    }

    public virtual void VirtualNoneMethod()
    {
        Console.WriteLine("Base - VirtualNoneMethod\n");
    }

    public virtual void VirtualVirtualMethod()
    {
        Console.WriteLine("Base - VirtualVirtualMethod\n");
    }

    public virtual void VirtualOverrideMethod()
    {
        Console.WriteLine("Base - VirtualOverrideMethod\n");
    }

    public virtual void VirtualNewMethod()
    {
        Console.WriteLine("Base - VirtualNewMethod\n");
    }

    // public override void OverrideNoneMethod()
    // {
    //     Console.WriteLine("Base - OverrideNoneMethod\n");
    // }

    // public override void OverrideVirtualMethod()
    // {
    //     Console.WriteLine("Base - OverrideVirtualMethod\n");
    // }

    // public override void OverrideOverrideMethod()
    // {
    //     Console.WriteLine("Base - OverrideOverrideMethod\n");
    // }

    // public override void OverrideNewMethod()
    // {
    //     Console.WriteLine("Base - OverrideNewMethod\n");
    // }

    public new void NewNoneMethod()
    {
        Console.WriteLine("Base - NewNoneMethod\n");
    }

    public new void NewVirtualMethod()
    {
        Console.WriteLine("Base - NewVirtualMethod\n");
    }

    public new void NewOverrideMethod()
    {
        Console.WriteLine("Base - NewOverrideMethod\n");
    }

    public new void NewNewMethod()
    {
        Console.WriteLine("Base - NewNewMethod\n");
    }
}
