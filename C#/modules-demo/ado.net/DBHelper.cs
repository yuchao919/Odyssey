using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Data;

namespace AMSDAL
{
    public static class DBHelper
    {
        static string connStr = System.Configuration.ConfigurationManager.ConnectionStrings["SqlServer"].ConnectionString;

        /// <summary>
        /// 执行增删改的方法
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="para"></param>
        /// <returns></returns>
        public static bool ExecComm(string sql, params SqlParameter[] para)
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                using (SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    if (para != null)
                    {
                        cmd.Parameters.AddRange(para);
                    }
                    conn.Open();
                    int i = cmd.ExecuteNonQuery();
                    conn.Close();

                    bool flag = i > 0 ? true : false;

                    return flag;
                }
            }
        }

        /// <summary>
        /// 专门做查询的方法
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="para"></param>
        /// <returns></returns>
        public static DataTable ExecSelect(string sql, params SqlParameter[] para)
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                using (SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    if (para != null)
                    {
                        cmd.Parameters.AddRange(para);
                    }
                    SqlDataAdapter sda = new SqlDataAdapter(cmd);
                    DataTable dt = new DataTable();
                    sda.Fill(dt);
                    return dt;
                }
            }
        }

        public static int ExecSelectScalar(string sql, params SqlParameter[] para)
        {
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                using (SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    if (para != null)
                    {
                        cmd.Parameters.AddRange(para);
                    }
                    conn.Open();
                    int i = (int)cmd.ExecuteScalar();
                    conn.Close();

                    return i;
                }
            }
        }

    }
}
