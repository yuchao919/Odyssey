using MySqlConnector;

namespace ConsoleTestcaseFactory;

public static class MysqlDemo
{
    public static void ConnectionTest()
    {
        // set these values correctly for your database server
        var builder = new MySqlConnectionStringBuilder
        {
            Server = "10.20.180.141",
            Port = 3326,
            UserID = "root",
            Password = "Mysoft@95938",
            Database = "mysql"
        };
        // open a connection asynchronously
        using var connection = new MySqlConnection(builder.ConnectionString);
        connection.Open();

        // create a DB command and set the SQL statement with parameters
        using var command = connection.CreateCommand();
        command.CommandText = @"SELECT count(1) as cnt FROM user;";

        // execute the command and read the results
        using var reader = command.ExecuteReader();
        while (reader.Read())
        {
            var cnt = reader.GetInt64("cnt");
            // ...
        }
    }

}
