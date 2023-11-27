using MySqlConnector;

namespace ConsoleTestcaseFactory;

public static class RetryOnFailureDemo
{
    public static void RetryOnFailure(int maxRetries, Action<int> action)
    {
        int retryCount = 0;

        do
        {
            try
            {
                // Attempt the operation
                action(retryCount);

                // If successful, break out of the loop
                break;
            }
            catch (Exception ex)
            {
                // Log the exception or perform any necessary handling
                Console.WriteLine($"Error: {ex.Message}");

                retryCount++;

                // If maximum retries reached, rethrow the exception
                if (retryCount >= maxRetries)
                {
                    Console.WriteLine("Max retries reached. Exiting...");
                    throw;
                }

                // Wait for a moment before the next retry (you can adjust the delay as needed)
                Thread.Sleep(1000);
                Console.WriteLine("Retrying...");
            }
        } while (retryCount < maxRetries);
    }

    public static void DoSomethingThatMayFail(int retryCount)
    {
        Random random = new Random();
        int result = random.Next(0, retryCount);
        Console.WriteLine("Result:" + result);
        // Simulate an operation that may fail
        if (result < 1)
        {
            Console.WriteLine("Operation failed!");
            throw new InvalidOperationException("Simulated failure");
        }

        Console.WriteLine("Operation succeeded!");
    }
}
