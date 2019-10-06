using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        string connectionString = ConfigurationManager.ConnectionStrings["SqlServer"].ConnectionString;

        // Provide the query string with a parameter placeholder.
        string queryString =
            @"SELECT a.[ID], ISNULL(b.[Name], '') AS [Name], a.[AvgScore] FROM
	            (SELECT a.[ID], SUM(b.[Score])/CAST((SELECT COUNT(DISTINCT([Subject])) FROM [score]) AS REAL) AS [AvgScore] FROM
		            (SELECT DISTINCT([ID]) FROM (SELECT [ID] FROM [student] UNION SELECT [ID] FROM [score]) t) a
		            LEFT JOIN [score] b ON a.[ID] = b.[ID]
		            GROUP BY a.[ID]) a
		            LEFT JOIN [student] b ON a.[ID] = b.[ID];";

        // Specify the parameter value.
        // Create and open the connection in a using block. This
        // ensures that all resources will be closed and disposed
        // when the code exits.
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            // Create the Command and Parameter objects.
            SqlCommand command = new SqlCommand(queryString, connection);
            //command.Parameters.AddWithValue("@pricePoint", paramValue);

            // Open the connection in a try/catch block. 
            // Create and execute the DataReader, writing the result
            // set to the console window.
            try
            {
                connection.Open();
                //SqlDataReader reader = command.ExecuteReader();
                SqlDataAdapter adapter = new SqlDataAdapter(command);
                DataTable dt = new DataTable();
                adapter.Fill(dt);
                Console.WriteLine(dt.Rows.Count);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            Console.ReadLine();
        }
    }
}