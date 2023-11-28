/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.chat;

/**
 *
 * @author javis
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MessageDAO {
        public String user = "root";
    public String password = "1234";
    public String db = "uxersii";
    public String port = "3306";
    public String dbURL = "jdbc:mysql://localhost:3306/uxersii";

    public List<Message> getMessages(int id_hog, String tipoUser) {
        List<Message> messages = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(dbURL, user, password);
            String query = "select * from mensajes where tipo_usuario = ? and id_hog = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, tipoUser);
            preparedStatement.setInt(2, id_hog);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                String sender = resultSet.getString("usuario_envia");
                String content = resultSet.getString("mensaje");
                String time = resultSet.getString("hora_men");
                int id_admin = resultSet.getInt("id_hog");

                messages.add(new Message(sender, content, time, id_admin));
            }

            resultSet.close();
            preparedStatement.close();
            connection.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }

        return messages;
    }
    
    public void saveMessage(String sender, String content, String tipoUser, int id_user, int idAdmin) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(dbURL, user, password);
            String query = "insert into mensajes (usuario_envia, mensaje, tipo_usuario, id_hog, id_admin) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, sender);
            preparedStatement.setString(2, content);
            preparedStatement.setString(3, tipoUser);
            preparedStatement.setInt(4, id_user);
            preparedStatement.setInt(5, idAdmin);
            preparedStatement.executeUpdate();

            preparedStatement.close();
            connection.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
}
    
   
    
     public List<AdminUser> getAdminUsers() {
        List<AdminUser> adminUsers = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(dbURL, user, password);
            String query = "select * from mensajes";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int userId = resultSet.getInt("id_hog");
                String userName = resultSet.getString("usuario_envia");

                AdminUser adminUser = new AdminUser(userId, userName);
                adminUser.setMessages(getMessagesForUser(userId)); // Obtener mensajes para este usuario

                adminUsers.add(adminUser);
            }
            resultSet.close();
            preparedStatement.close();
            connection.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }

        return adminUsers;
    }
   private List<MessageA> getMessagesForUser(int userId) {
    List<MessageA> messages = new ArrayList<>();

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(dbURL, user, password);
        String query = "select * from mensajes where id_hog = ?";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, userId);

        ResultSet resultSet = preparedStatement.executeQuery();

        while (resultSet.next()) {
            int messageId = resultSet.getInt("id_mens");
            String content = resultSet.getString("mensaje");
            String sender = resultSet.getString("usuario_envia");
            String time = resultSet.getString("hora_men");
            int id_admin = resultSet.getInt("id_admin");
            int id_hog = resultSet.getInt("id_hog");
            
            System.out.println(content);
            MessageA message = new MessageA(messageId, content, sender, time, id_admin, id_hog);
            messages.add(message);
        }

        resultSet.close();
        preparedStatement.close();
        connection.close();
    } catch (ClassNotFoundException | SQLException e) {
        e.printStackTrace();
    }

        return messages;
    }

}


