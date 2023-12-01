/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package corcho.chatsito;

import java.net.InetSocketAddress;

/**
 *
 * @author javis
 */

    /**
     * @param args the command line arguments
     */
    // Supongamos que esta clase está en otro archivo, por ejemplo, Main.java

public class NewMain {
    public static void main(String[] args) {
        // Crear una instancia del servidor y comenzar a escuchar
        ChatServer server = new ChatServer(new InetSocketAddress("localhost", 8887));
        server.start();
        System.out.println("Servidor WebSocket en " + server.getAddress());
    }
}

    

