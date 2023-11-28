/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.chat;

/**
 *
 * @author javis
 */
public class Message {
    private String sender;
    private String content;
    private String time;
    private int id_admin;

    public Message(String sender, String content, String time, int id_admin) {
        this.sender = sender;
        this.content = content;
        this.time = time;
        this.id_admin = id_admin;
    }

    
    // Getters y setters

    public int getId_admin() {
        return id_admin;
    }

    public void setId_admin(int id_admin) {
        this.id_admin = id_admin;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
