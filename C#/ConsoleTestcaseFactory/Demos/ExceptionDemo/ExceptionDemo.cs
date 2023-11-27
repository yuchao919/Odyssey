using MySqlConnector;

namespace ConsoleTestcaseFactory;

public static class ExceptionDemo
{
    public static void ExceptionTest()
    {
        try
        {
            throw new OverflowException("数据溢出");
        }
        catch (Exception ex)
        {

            throw new Exception(string.Concat("自动考核异常\n", ex.Message));
        }
    }
}