/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corcho.chatsito;

/**
 *
 * @author javis
 */
import com.mysql.cj.Session;
import org.java_websocket.*;
import Serve
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;

@ServerEndpoint("/chat")
public class ChatServer {

    private static final CopyOnWriteArrayList<ChatServer> clients = new CopyOnWriteArrayList<>();
    private static final AtomicInteger clientIdCounter = new AtomicInteger(0);

    private final Session session;
    private final String username;

    public ChatServer() {
        this.session = null;
        this.username = "Server";
    }

    public ChatServer(Session session) {
        this.session = session;
        this.username = "User" + clientIdCounter.incrementAndGet();
    }

    @OnOpen
    public void onOpen(Session session) {
        clients.add(this);
        sendMessage("¡Bienvenido al chat!");
    }

    @OnMessage
    public void onMessage(String message) {
        broadcast(username + ": " + message);
    }

    @OnClose
    public void onClose() {
        clients.remove(this);
        broadcast(username + " ha abandonado el chat.");
    }

    @OnError
    public void onError(Throwable t) {
        t.printStackTrace();
    }

    private static void broadcast(String message) {
        for (ChatServer client : clients) {
            try {
                synchronized (client) {
                    client.session.getBasicRemote().sendText(message);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private void sendMessage(String message) {
        try {
            this.session.getBasicRemote().sendText(message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
