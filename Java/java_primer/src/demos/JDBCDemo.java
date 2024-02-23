package demos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCDemo {

    public static void connect() throws SQLException {
        // JDBC连接的URL, 不同数据库有不同的格式:
        String JDBC_URL = "jdbc:mysql://localhost:53306/";
        String JDBC_USER = "root";
        String JDBC_PASSWORD = "Qwer!1234";
        // 获取连接:
        Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
        if (conn.isValid(5000)) {
            System.out.println("连接成功！");
        }
        // 关闭连接:
        conn.close();
    }
}
