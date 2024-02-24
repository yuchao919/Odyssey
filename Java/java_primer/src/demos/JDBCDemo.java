package demos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCDemo {

    // JDBC连接的URL, 不同数据库有不同的格式:
    private final static String JDBC_URL = "jdbc:mysql://localhost:53306/learnjdbc";
    private final static String JDBC_USER = "root";
    private final static String JDBC_PASSWORD = "Qwer!1234";

    /**
     * 连接
     * 
     * @throws SQLException
     */
    public static void connect() throws SQLException {
        // 获取连接:
        Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
        if (conn.isValid(5000)) {
            System.out.println("连接成功！");
        }
        // 关闭连接:
        conn.close();
    }

    /**
     * 查询
     * 
     * @throws SQLException
     */
    public static void search() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
            try (Statement stmt = conn.createStatement()) {
                try (ResultSet rs = stmt.executeQuery("SELECT id, grade, name, gender FROM students WHERE gender=1")) {
                    while (rs.next()) {
                        long id = rs.getLong(1); // 注意：索引从1开始
                        long grade = rs.getLong(2);
                        String name = rs.getString(3);
                        int gender = rs.getInt(4);
                    }
                }
            }
        }
    }

    /**
     * 参数化查询
     * 
     * @throws SQLException
     */
    public static void preparedStatement() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
            try (PreparedStatement ps = conn
                    .prepareStatement("SELECT id, grade, name, gender FROM students WHERE gender=? AND grade=?")) {
                ps.setObject(1, "M"); // 注意：索引从1开始
                ps.setObject(2, 3);
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        long id = rs.getLong("id");
                        long grade = rs.getLong("grade");
                        String name = rs.getString("name");
                        String gender = rs.getString("gender");
                    }
                }
            }
        }
    }

    /**
     * 插入
     * 
     * @throws SQLException
     */
    public static void insert() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
            try (PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO students (id, grade, name, gender) VALUES (?,?,?,?)")) {
                ps.setObject(1, 999); // 注意：索引从1开始
                ps.setObject(2, 1); // grade
                ps.setObject(3, "Bob"); // name
                ps.setObject(4, "M"); // gender
                int n = ps.executeUpdate(); // 1
            }
        }
    }

    /**
     * 更新
     * 
     * @throws SQLException
     */
    public static void update() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
            try (PreparedStatement ps = conn.prepareStatement("UPDATE students SET name=? WHERE id=?")) {
                ps.setObject(1, "Bob"); // 注意：索引从1开始
                ps.setObject(2, 999);
                int n = ps.executeUpdate(); // 返回更新的行数
            }
        }
    }

    /**
     * 删除
     * 
     * @throws SQLException
     */
    public static void delete() throws SQLException {
        try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
            try (PreparedStatement ps = conn.prepareStatement("DELETE FROM students WHERE id=?")) {
                ps.setObject(1, 999); // 注意：索引从1开始
                int n = ps.executeUpdate(); // 删除的行数
            }
        }
    }

    /**
     * 事务处理
     * 
     * @throws SQLException
     */
    public static void transactionDemo() throws SQLException {
        Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
        try {
            // 关闭自动提交:
            conn.setAutoCommit(false);
            // 执行多条SQL语句:
            insert();
            update();
            delete();
            // 提交事务:
            conn.commit();
        } catch (SQLException e) {
            // 回滚事务:
            conn.rollback();
        } finally {
            conn.setAutoCommit(true);
            conn.close();
        }
    }

    /**
     * 批量插入
     * 
     * @throws SQLException
     */
    public static void batchInsert() throws SQLException {

    }
}
