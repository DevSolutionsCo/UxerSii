/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.chat;

import java.io.IOException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author Alumno
 */
@ServerEndpoint( value = "/UxerSiito/chat/{username}")
public class WebSocket {
    

    @OnOpen
    public void onOpen(Session session) {
        // Manejar la apertura de la conexión
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
    public void onClose(Session session) {
        // Manejar el cierre de la conexión
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        // Manejar errores
}
}


