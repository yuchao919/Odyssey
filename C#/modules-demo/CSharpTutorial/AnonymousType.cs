using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpTutorial
{
    public class AnonymousType
    {
        public static void Run()
        {
            // Properties of anonymous types will be read-only properties so you cannot change their values.
            var myAnonymousType = new
            {
                firstProperty = "First",
                secondProperty = 2,
                thirdProperty = true
            };
        }
    }
}
