using EFCoreSample.EFCore;
using EFCoreSample.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EFCoreSample
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var ctx = new twelveContext())
            {
                var studentQuery = ctx.Students
                    .Where(x => x.ID == 6)
                    .Include(x => x.Scores);
                //.Select(x => new
                //{
                //    stu = x,
                //    scs = x.Scores
                //});
                var studentList = studentQuery.ToList();
                Console.WriteLine(studentList.Count);
            }

            //using (var ctx = new twelveContext())
            //{
            //    var stu = new students()
            //    {
            //        ID = 10086,
            //        Name = "lalala",
            //        Gender = "女",
            //        Age = 16,
            //        Scores = new List<scores>() { new scores() { ID = 10086, Subject = "English", Score = 87 } }
            //    };

            //    ctx.Students.Add(stu);
                
            //    ctx.SaveChanges();
            //}
        }
    }
}
