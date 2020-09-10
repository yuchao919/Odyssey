using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTestcaseFactory.Demos
{
    public class ReturnTypeDemo
    {
        #region ReturnTask
        public static async Task ReturnTask()
        {
            Task wait = WaitAndApologize();

            string output = $"Today is {DateTime.Now:D}\n" +
                            $"The current time is {DateTime.Now.TimeOfDay:t}\n" +
                            $"The current temperature is 76 degrees.\n";

            await wait;
            Console.WriteLine(output);
        }

        static async Task WaitAndApologize()
        {
            // Task.Delay is a placeholder for actual work.
            await Task.Delay(2000);
            // Task.Delay delays the following line by two seconds.
            Console.WriteLine("\nSorry for the delay. . . .\n");
        }
        #endregion

        #region ReturnVoid
        class NaiveButton
        {
            public event EventHandler Clicked;

            public void Click()
            {
                Console.WriteLine("Somebody has clicked a button. Let's raise the event...");
                Clicked?.Invoke(this, EventArgs.Empty);
                Console.WriteLine("All listeners are notified.");
            }
        }
        static TaskCompletionSource<bool> tcs = new TaskCompletionSource<bool>();
        public static async void ReturnVoid()
        {
            tcs = new TaskCompletionSource<bool>();
            var secondHandlerFinished = tcs.Task;

            var button = new NaiveButton();
            button.Clicked += Button_Clicked_1;
            button.Clicked += Button_Clicked_2_Async;
            button.Clicked += Button_Clicked_3;

            Console.WriteLine("About to click a button...");
            button.Click();
            Console.WriteLine("Button's Click method returned.");

            await secondHandlerFinished;
        }

        private static void Button_Clicked_1(object sender, EventArgs e)
        {
            Console.WriteLine("   Handler 1 is starting...");
            Task.Delay(3000).Wait();
            Console.WriteLine("   Handler 1 is done.");
        }

        private static async void Button_Clicked_2_Async(object sender, EventArgs e)
        {
            Console.WriteLine("   Handler 2 is starting...");
            Task.Delay(100).Wait();
            Console.WriteLine("   Handler 2 is about to go async...");
            await Task.Delay(500);
            Console.WriteLine("   Handler 2 is done.");
            tcs.SetResult(true);
        }

        private static void Button_Clicked_3(object sender, EventArgs e)
        {
            Console.WriteLine("   Handler 3 is starting...");
            Task.Delay(100).Wait();
            Console.WriteLine("   Handler 3 is done.");
        }
        #endregion

        #region ReturnIAsyncEnumerable
        /*
         * C# 8.0 才支持 IAsyncEnumerable
        public static async void ReturnIAsyncEnumerable()
        {
            await foreach (var line in ReadWordsFromStream())
            {
                Console.WriteLine(line);
            };
        }

        private static async IAsyncEnumerable<string> ReadWordsFromStream()
        {
            string data =
            @"This is a line of text.
      Here is the second line of text.
      And there is one more for good measure.
      Wait, that was the penultimate line.";

            using var readStream = new StringReader(data);

            string? line = await readStream.ReadLineAsync();
            while (line != null)
            {
                var words = line.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                foreach (var word in words)
                {
                    yield return word;
                }
                line = await readStream.ReadLineAsync();
            }
        }
        */
        #endregion
    }
}
