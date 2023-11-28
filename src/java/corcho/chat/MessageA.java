/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.chat;

import java.util.List;

/**
 *
 * @author javis
 */
public class MessageA {
    
    private int messageId;
    private String content;
    private String sender;
    private String time;
    private int id_admin;
    private int id_hog;

    public MessageA(int messageId, String content, String sender, String time, int id_admin, int id_hog) {
        this.messageId = messageId;
        this.content = content;
        this.sender = sender;
        this.time = time;
        this.id_admin = id_admin;
        this.id_hog = id_hog;
    }

    public int getId_hog() {
        return id_hog;
    }

    public void setId_hog(int id_hog) {
        this.id_hog = id_hog;
    }
    
    public int getId_admin() {
        return id_admin;
    }

    // Constructor, getters y setters
    public void setId_admin(int id_admin) {
        this.id_admin = id_admin;
    }

    public int getMessageId() {
        return messageId;
    }

    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }



    
}
