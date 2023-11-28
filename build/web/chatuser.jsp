<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="styles/tailwindcss-colors.css">
    <link rel="stylesheet" href="styles/chatuser.css">
    <link rel="shortcut icon" href="resources/Logo-uxersii.svg">
    <title>Chat</title>
</head>
<body>
    
    
    <%@ page import="java.util.List" %>
    <%@page import="corcho.chat.Message"%>
    <%@page import="corcho.chat.MessageDAO"%>

    <%
        
        int nomb = 0;
        String tipoUser = (String) session.getAttribute("tipoUser"); 
        String nombUser = (String) session.getAttribute("nombUserH"); 
        
        if(tipoUser.equals("hogar")){
           nomb = (int) session.getAttribute("id_user"); 
        }else if(tipoUser.equals("establecimiento")){
            nomb = (int) session.getAttribute("id_user"); 
        }
        
        MessageDAO messageDAO = new MessageDAO();
        List<Message> messages = messageDAO.getMessages(nomb, tipoUser);
    %>

    <!-- start: Chat -->
    <section class="chat-section">
        <div class="chat-container">
            <!-- start: Content -->
            <div class="chat-content">
                <!-- start: Conversation -->
                <div class="conversation active" id="conversation-1">
                    <div class="conversation-top">
                        <button type="button" class="conversation-back"><i class="ri-arrow-left-line"></i></button>
                        <div class="conversation-user">
                            <img class="conversation-user-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                            <div>
                                <div class="conversation-user-name">Uxersiito</div>
                            </div>
                        </div>
                        <div class="conversation-buttons">
                            <button type="button" class="conversation-form-button" style="width: 200px; height: 40px;"><i class="fa-regular fa-square-check" ></i> &nbsp; Finalizar chat </button>
                            <button type="button"><i class="ri-information-line"></i></button>
                        </div>
                    </div>
                    <div class="conversation-main">
                        <ul class="conversation-wrapper">
                            <% for (Message message : messages) { %>
                                <li class="conversation-item <%= message.getId_admin() == nomb && !message.getSender().equals(nombUser) ? "me" : "" %>">
                                    <div class="conversation-item-side">
                                        <img class="conversation-item-image" src="<%= message.getSender().equals(nombUser) ? "https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" : "https://cdn-icons-png.flaticon.com/512/9703/9703596.png" %>" alt="">
                                    </div>
                                    <div class="conversation-item-content">
                                        <div class="conversation-item-wrapper">
                                            <div class="conversation-item-box">
                                                <div class="conversation-item-text">
                                                    <p><%= message.getContent() %></p>
                                                    <div class="conversation-item-time"><%= message.getTime() %></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            <% } %>
                        </ul>
                    </div>
                    <div class="conversation-form">
                        <div class="conversation-form-group">
                            <textarea id="messageInput" class="conversation-form-input" rows="1" placeholder="Escribe un mensaje..."></textarea>
                        </div>
                        <button type="button" class="conversation-form-button conversation-form-submit" onclick="sendMessage()"><i class="ri-send-plane-2-line"></i></button>
                    </div>
                </div>
                <!-- end: Conversation -->
            </div>
            <!-- end: Content -->
        </div>
                        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
    function sendMessage() {
        var messageContent = $('#messageInput').val();

        // Validar que el contenido del mensaje no esté vacío
        if (messageContent.trim() === "") {
            alert("Por favor, escribe un mensaje antes de enviar.");
            return;
        }

        // Realizar la solicitud AJAX al servidor
        $.ajax({
            type: 'POST',
            url: 'GuardarMensaje.jsp',  // Reemplaza 'GuardarMensaje.jsp' con la URL de tu servlet o JSP que maneje el guardado del mensaje
            data: { content: messageContent
                    },
            success: function(response) {
                // Lógica de éxito (opcional)
                console.log('Mensaje enviado correctamente');
            },
            error: function(error) {
                // Manejo de errores (opcional)
                console.error('Error al enviar el mensaje:', error);
            }
        });

        // Limpiar el contenido del textarea después de enviar el mensaje
        $('#messageInput').val('');
    }
</script>

    </section>
    <!-- end: Chat -->
    <script src="https://kit.fontawesome.com/83ffb1b5fc.js" crossorigin="anonymous"></script>
    <script src="scriptchatadmin.js"></script>
</body>
</html>