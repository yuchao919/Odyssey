using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Z.EntityFramework.Plus;

namespace EF6CodeFirst
{
    class Program
    {
        [STAThreadAttribute]
        static void Main(string[] args)
        {
            //Quest1();
            //Quest2();
            //Quest3();
            Quest4();
            Console.Read();
        }

        static void Quest1()
        {
            using (var ctx = new twelveDB())
            {
                var idCte = ctx.students.Select(x => x.ID).Union(ctx.scores.Select(x => x.ID)).Distinct();
                var idNameCte = idCte.GroupJoin(ctx.students, id => id, stu => stu.ID, (id, students) => new { Id = id, Name = students.Select(stu => stu.Name).FirstOrDefault() ?? "" });
                var query = idNameCte.GroupJoin(ctx.scores.Where(x => x.Subject == "语文"), a => a.Id, b => b.ID, (a, b) => new { Id = a.Id, Name = a.Name, Score = b.Select(x => x.Score1).FirstOrDefault() });
                foreach (var item in query)
                {
                    Console.WriteLine("{0}\t{1}\t{2}", item.Id, item.Name, item.Score);
                }
            }
        }

        static void Quest2()
        {
            using (var ctx = new twelveDB())
            {
                // 唉，与RawSQL相比，效率堪忧啊
                var courseCount = ctx.scores.Select(x => x.Subject).Distinct();
                var idCte = ctx.students.Select(x => x.ID).Union(ctx.scores.Select(x => x.ID)).Distinct();
                var scoreCte = ctx.scores.GroupBy(x => x.ID).Select(x => new { Id = x.Key, AvgScore = x.Sum(y => y.Score1) / courseCount.Count() });
                var query = idCte.GroupJoin(ctx.students, Id => Id, b => b.ID, (Id, b) => new { Id = Id, Name = b.Select(x => x.Name).FirstOrDefault() ?? "" })
                    .GroupJoin(scoreCte, a => a.Id, b => b.Id, (a, b) => new { Id = a.Id, Name = a.Name, AvgScore = b.Select(x => x.AvgScore).FirstOrDefault() });
                foreach (var item in query)
                {
                    Console.WriteLine("{0}\t{1}\t{2}", item.Id, item.Name, item.AvgScore);
                }
            }
            #region SQL
            /*
             SELECT 
                1 AS [C1], 
                [Project14].[C1] AS [C2], 
                [Project14].[C2] AS [C3], 
                CASE WHEN ([Project14].[C3] IS NULL) THEN 0 ELSE [Project14].[C4] END AS [C4]
                FROM ( SELECT 
                    [Project11].[C1] AS [C1], 
                    [Project11].[C2] AS [C2], 
                    [Project11].[C3] AS [C3], 
                    (SELECT TOP (1) 
                        [GroupBy3].[A1] / [GroupBy4].[A1] AS [C1]
                        FROM   (SELECT 
                            [Extent7].[ID] AS [K1], 
                            SUM( CAST( [Extent7].[Score] AS int)) AS [A1]
                            FROM [dbo].[score] AS [Extent7]
                            GROUP BY [Extent7].[ID] ) AS [GroupBy3]
                        CROSS JOIN  (SELECT 
                            COUNT(1) AS [A1]
                            FROM ( SELECT DISTINCT 
                                [Extent8].[Subject] AS [Subject]
                                FROM [dbo].[score] AS [Extent8]
                            )  AS [Distinct3] ) AS [GroupBy4]
                        WHERE [Project11].[C1] = [GroupBy3].[K1]) AS [C4]
                    FROM ( SELECT 
                        [Project8].[C1] AS [C1], 
                        [Project8].[C2] AS [C2], 
                        (SELECT TOP (1) 
                            [GroupBy1].[A1] / [GroupBy2].[A1] AS [C1]
                            FROM   (SELECT 
                                [Extent5].[ID] AS [K1], 
                                SUM( CAST( [Extent5].[Score] AS int)) AS [A1]
                                FROM [dbo].[score] AS [Extent5]
                                GROUP BY [Extent5].[ID] ) AS [GroupBy1]
                            CROSS JOIN  (SELECT 
                                COUNT(1) AS [A1]
                                FROM ( SELECT DISTINCT 
                                    [Extent6].[Subject] AS [Subject]
                                    FROM [dbo].[score] AS [Extent6]
                                )  AS [Distinct2] ) AS [GroupBy2]
                            WHERE [Project8].[C1] = [GroupBy1].[K1]) AS [C3]
                        FROM ( SELECT 
                            [Project7].[C1] AS [C1], 
                            CASE WHEN ([Project7].[C2] IS NULL) THEN N'' ELSE [Project7].[C3] END AS [C2]
                            FROM ( SELECT 
                                [Project5].[C1] AS [C1], 
                                [Project5].[C2] AS [C2], 
                                (SELECT TOP (1) 
                                    [Extent4].[Name] AS [Name]
                                    FROM [dbo].[student] AS [Extent4]
                                    WHERE [Project5].[C1] = [Extent4].[ID]) AS [C3]
                                FROM ( SELECT 
                                    [Distinct1].[C1] AS [C1], 
                                    (SELECT TOP (1) 
                                        [Extent3].[Name] AS [Name]
                                        FROM [dbo].[student] AS [Extent3]
                                        WHERE [Distinct1].[C1] = [Extent3].[ID]) AS [C2]
                                    FROM ( SELECT DISTINCT 
                                        [UnionAll1].[ID] AS [C1]
                                        FROM  (SELECT 
                                            [Extent1].[ID] AS [ID]
                                            FROM [dbo].[student] AS [Extent1]
                                        UNION ALL
                                            SELECT 
                                            [Extent2].[ID] AS [ID]
                                            FROM [dbo].[score] AS [Extent2]) AS [UnionAll1]
                                    )  AS [Distinct1]
                                )  AS [Project5]
                            )  AS [Project7]
                        )  AS [Project8]
                    )  AS [Project11]
                )  AS [Project14];
             */
            #endregion
        }

        static void Quest3()
        {
            using (var ctx = new twelveDB())
            {
                var scoreCte = ctx.scores.Where(x => x.Subject == "语文").OrderByDescending(x => x.Score1).Take(3);
                var query = scoreCte.GroupJoin(ctx.students, a => a.ID, b => b.ID, (a, b) => new { Id = a.ID, Name = b.Select(x => x.Name).FirstOrDefault() ?? "", Score = a.Score1 });
                foreach (var item in query)
                {
                    Console.WriteLine("{0}\t{1}\t{2}", item.Id, item.Name, item.Score);
                }
            }
        }

        static void Quest4()
        {
            using (var ctx = new twelveDB())
            {
                var scoreCte = ctx.scores.GroupBy(x => x.ID).Select(x => new
                {
                    Id = x.Key,
                    YW = x.Where(y => y.Subject == "语文").Max(y => y.Score1),
                    SX = x.Where(y => y.Subject == "数学").Max(y => y.Score1)
                }).Where(x => x.YW > 60 && x.SX > 60).Select(x => x.Id);
                //var query = ctx.students.Update(x => scoreCte.Contains(x.ID) ? new student() { IsPassed = true } : new student() { IsPassed = false });
                var query = ctx.students.Where(x => scoreCte.Contains(x.ID)).Update(x => new student() { IsPassed = true });
                ctx.students.Where(x => x.IsPassed != true).Update(x => new student() { IsPassed = false });
                ctx.SaveChanges();
            }
        }
    }
}
