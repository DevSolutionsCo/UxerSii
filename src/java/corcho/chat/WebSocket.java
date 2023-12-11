/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.chat;

import java.io.IOException;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author Alumno
 */
    @ServerEndpoint( value = "/uxersiichat")
        
     public class WebSocket implements Serializable{
    private Session session;
    private static Set<WebSocket> set = new CopyOnWriteArraySet<WebSocket>();
    private static Map<String, String> map = new HashMap<String, String>();

    public WebSocket() 
    {
    }

    @OnOpen
    public void onOpen( Session session, @PathParam("username") String username) throws EncodeException, IOException 
    {
        this.session = session;
        set.add(this );
        map.put( session.getId( ) , username);
        System.out.println("onOpen=" + username );
    }

    @OnMessage
    public void onMessage(Session session, String message) {
        // Enviar el mensaje a todos los clientes conectados
        try {
            for (Session s : session.getOpenSessions()) {
                s.getBasicRemote().sendText(message);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @OnClose
    public void onClose( Session session) throws IOException, EncodeException 
    {
        set.remove( this );
    }


    @OnError
    public void onError(Throwable t){
        t.printStackTrace();
    }
}


