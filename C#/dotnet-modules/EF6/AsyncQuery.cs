using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF6
{
    public class AsyncQuery
    {
        public static async Task<Student> GetStudent()
        {
            Student student = null;

            using (var context = new SchoolDBEntities())
            {
                Console.WriteLine("Start GetStudent...");

                student = await (context.Students.Where(s => s.StudentID == 1).FirstOrDefaultAsync<Student>());

                Console.WriteLine("Finished GetStudent...");
            }

            return student;
        }
    }
}