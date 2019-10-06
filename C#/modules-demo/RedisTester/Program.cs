using StackExchange.Redis;
using System;

namespace RedisTester
{
    class Program
    {
        static void Main(string[] args)
        {
            //using (ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("192.168.100.128:6379,password=Qwer@1234"))
            //{
            //    IDatabase db = redis.GetDatabase();
            //    db.StringSet("mykey", "bbb");
            //    ISubscriber sub = redis.GetSubscriber();

            //    string value = await db.StringGetAsync("mykey");
            //}

            GetRedisValue();
            Console.WriteLine("Hello World!");

            Console.Read();
        }

        static async void GetRedisValue()
        {
            using (ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("192.168.100.128:6379,password=Qwer@1234"))
            {
                IDatabase db = redis.GetDatabase();
                //db.StringSet("mykey", "bbb");
                ISubscriber sub = redis.GetSubscriber();

                string value = await db.StringGetAsync("mykey");
                Console.WriteLine(value);
            }
        }
    }
}
