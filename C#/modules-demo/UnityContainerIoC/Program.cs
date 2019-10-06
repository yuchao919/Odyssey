using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unity;
using Unity.Resolution;

namespace UnityContainerIoC
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Origin
            //Driver driver = new Driver(new BMW());

            //driver.RunCar(); 
            #endregion

            #region UnityContainer
            IUnityContainer container = new UnityContainer();

            container.RegisterType<ICar, BMW>();
            container.RegisterType<ICar, Audi>("LuxuryCar");

            ICar bmw = container.Resolve<ICar>();  // return BMW object
            ICar audi = container.Resolve<ICar>("LuxuryCar"); // return Audi object

            var driver2 = container.Resolve<Driver>(new ResolverOverride[] {
                        new ParameterOverride("car1", new Ford()),
                        new ParameterOverride("car2", new BMW()),
                        new ParameterOverride("car3", new Audi())
                });
            driver2.RunCar();
            #endregion

            Console.Read();
        }
    }


    #region Dependent
    public interface ICar
    {
        int Run();
    }

    public class BMW : ICar
    {
        private int _miles = 0;

        public int Run()
        {
            return ++_miles;
        }
    }

    public class Ford : ICar
    {
        private int _miles = 0;

        public int Run()
        {
            return ++_miles;
        }
    }

    public class Audi : ICar
    {
        private int _miles = 0;

        public int Run()
        {
            return ++_miles;
        }

    }
    public class Driver
    {
        private ICar _car = null;

        public Driver(ICar car)
        {
            _car = car;
        }

        public void RunCar()
        {
            Console.WriteLine("Running {0} - {1} mile ", _car.GetType().Name, _car.Run());
        }
    }
    #endregion
}
