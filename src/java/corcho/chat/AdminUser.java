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
public class AdminUser {
    private int id;
    private String name;
    private List<MessageA> messages;
    
    

    // Constructor, getters y setters

    
    
    public AdminUser(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<MessageA> getMessages() {
        return messages;
    }

    public void setMessages(List<MessageA> messages) {
        this.messages = messages;
    }


    
}
