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
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
    
    public void saveMessage(String sender, String content, String tipoUser, int id_user, int idAdmin, String time) throws ParseException {
            // Definir el formato de fecha y hora
            SimpleDateFormat formatoFechaHora = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            java.util.Date utilDate = formatoFechaHora.parse(time);
            java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
            

            // Convertir a java.sql.Timestamp (puedes usar java.sql.Date si no necesitas la parte de tiempo)
            Timestamp timestamp = new Timestamp(sqlDate.getTime());

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(dbURL, user, password);
            String query = "insert into mensajes (usuario_envia, mensaje, tipo_usuario, id_hog, id_admin, hora_men) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, sender);
            preparedStatement.setString(2, content);
            preparedStatement.setString(3, tipoUser);
            preparedStatement.setInt(4, id_user);
            preparedStatement.setInt(5, idAdmin);
            preparedStatement.setTimestamp(6, timestamp);
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
                int idAdmin = resultSet.getInt("id_admin");
                String userName = resultSet.getString("usuario_envia");

                AdminUser adminUser = new AdminUser(userId, idAdmin, userName );
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


