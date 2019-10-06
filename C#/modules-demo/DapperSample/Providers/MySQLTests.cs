using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;

using Dapper;
using DapperSample.Models;
using MySql.Data.MySqlClient;

namespace DapperSample
{
    public class MySQLTests
    {
        private readonly static string cs = ConfigurationManager.ConnectionStrings["MySQL-VM"].ConnectionString;

        private static MySqlConnection GetMySqlConnection(bool open = true, bool convertZeroDatetime = false, bool allowZeroDatetime = false)
        {
            var csb = new MySqlConnectionStringBuilder(cs)
            {
                AllowZeroDateTime = allowZeroDatetime,
                ConvertZeroDateTime = convertZeroDatetime
            };
            var conn = new MySqlConnection(csb.ConnectionString);
            if (open) conn.Open();
            return conn;
        }

        public void GetAll()
        {
            using (var conn = GetMySqlConnection())
            {
                var list = conn.Query<students>(@"SELECT * FROM students").AsList();
                Console.WriteLine(list.Count);
            }
        }

        public void GetOneToMany()
        {
            using (var conn = GetMySqlConnection())
            {
                var sql =
                    @"select * from students a 
                    left join scores b on a.ID = b.ID 
                    Order by a.ID";

                var data = conn.Query<students, scores, students>(sql, (students, scores) => { students.Score = scores; return students; });
                var score = data.First();
            }
        }

        public void GetMultiQuery()
        {

            using (var conn = GetMySqlConnection())
            {
                var sql =
                    @"
                    select * from students where ID=@id;
                    SELECT * FROM scores WHERE ID=@id;
                    ";

                using (var multi = conn.QueryMultiple(sql, new { id = 5 }))
                {
                    var stu = multi.Read<students>().SingleOrDefault();
                    var score = multi.Read<scores>().ToList();
                }
            }
        }


        public static void Run()
        {
            MySQLTests THIS = new MySQLTests();
            //THIS.GetAll();
            //THIS.GetOneToMany();
            THIS.GetMultiQuery();
        }

    }
}
