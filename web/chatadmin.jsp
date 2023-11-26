<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="styles/tailwindcss-colors.css">
    <link rel="stylesheet" href="styles/stylechatadmin.css">
    <link rel="shortcut icon" href="resources/Logo-uxersii.svg">
    <title>Chat</title>
</head>
<body>

    <%@ page import="java.util.List" %>
    <%@page import="corcho.chat.Message"%>
    <%@page import="corcho.chat.MessageA"%>
    <%@page import="corcho.chat.MessageDAO"%>
    <%@page import="corcho.chat.AdminUser"%>
    <%@ page import="java.util.Set" %>
    <%@ page import="java.util.HashSet" %>


    <%
       // En tu servlet o controlador Java
        MessageDAO adminUserDAO = new MessageDAO();
        List<AdminUser> adminUsers = adminUserDAO.getAdminUsers();

        request.setAttribute("adminUsers", adminUsers);
        Integer admin = (Integer) session.getAttribute("id_admin");

    %>
    <!-- start: Chat -->
    <section class="chat-section">
        <div class="chat-container">
            <!-- start: Content -->
            <div class="chat-content">
                <!-- start: Content side -->
                <div class="content-sidebar">
                    <div class="content-sidebar-title">
                        <ul class="chat-sidebar-menu">
                            <li style="margin-right: 100px;">Chats</li>
                            <li class="chat-sidebar-profile" style="width: 65px; height: 65px;">
                                <button type="button" class="chat-sidebar-profile-toggle">
                                    <img src="resources/Logo-uxersii.svg" alt="foto de perfil" style="width: 65px; height: 65px;">
                                </button>
                                <ul class="chat-sidebar-profile-dropdown">
                                    <li><a href="#"><i class="ri-logout-box-line"></i> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="content-messages">
                        <!-- En la barra lateral -->
                        <ul class="content-messages-list">
                            <% Set<String> displayedNames = new HashSet<String>(); %>

                            <% for (AdminUser adminUser : adminUsers) { 
                                String userName = adminUser.getName(); 
                                if (!displayedNames.contains(userName)) { 
                            %>
                                <li>
                                   
                                     <a href="#" data-conversation="#conversation-<%= adminUser.getName()%>">

                                        <%= adminUser.getName() %>
                                        <img class="content-message-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                                        <span class="content-message-info">
                                        <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-unread">o</span>
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <% displayedNames.add(userName); %>
                            <% } 
                            }%>
                        </ul>

                    </div>
                </div>
                <!-- end: Content side -->
                <!-- start: Conversation -->
                <div class="conversation conversation-default active">
                    <i class="ri-chat-3-line"></i>
                    <p>Hola admin selecciona un chat!</p>
                </div>
                    <div class="conversation-top">
                        <button type="button" class="conversation-back"><i class="ri-arrow-left-line"></i></button>
                        <div class="conversation-user">
                            <img class="conversation-user-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                            <div>
                                <div class="conversation-user-name">Uxersiito 1</div>
                            </div>
                        </div>
                        <div class="conversation-buttons">
                            <button type="button" class="conversation-form-button" style="width: 200px; height: 40px;"><i class="fa-regular fa-square-check" ></i> &nbsp; Finalizar chat </button>
                            <button type="button"><i class="ri-information-line"></i></button>
                        </div>
                    </div>
                    <% for (AdminUser adminUser : adminUsers) { %>
                <div class="conversation" id="conversation-<%= adminUser.getName() %>">
                    <div class="conversation-top">
                        <!-- Puedes mostrar información adicional sobre el usuario aquí -->
                        <div class="conversation-user">
                            <img class="conversation-user-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                            <div>
                                <div class="conversation-user-name"><%= adminUser.getName() %> <%= adminUser.getId() %></div>
                            </div>
                        </div>
                    </div>

                <div class="conversation-main">
                    <ul class="conversation-wrapper">
                        <% for (MessageA message : adminUser.getMessages()) {
                        if(admin == message.getId_admin()){%>
                            <li class="conversation-item <%= (message.getSender() != null && message.getSender().equals(adminUser.getName())) ? "me" : "" %>">
                                <div class="conversation-item-side">
                                    <img class="conversation-item-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
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
                        <% } 
                    }%>
                    </ul>
                </div>

                <div class="conversation-form">
                        <div class="conversation-form-group">
                            <textarea id="messageInput" class="conversation-form-input" rows="1" placeholder="Escribe un mensaje..."></textarea>
                        </div>
                        <button type="button" class="conversation-form-button conversation-form-submit" onclick="sendMessage(<%= adminUser.getId() %>)"><i class="ri-send-plane-2-line"></i></button>
                    </div>
            </div>
        <% } %>

                       <!-- end: Conversation -->
            </div>
            <!-- end: Content -->
        </div>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script>
function sendMessage(idUser) {
        var messageContent = $('#messageInput').val();

        // Validar que el contenido del mensaje no esté vacío
        if (messageContent.trim() === "") {
            alert("Por favor, escribe un mensaje antes de enviar.");
            return;
        }

        // Realizar la solicitud AJAX al servidor
        $.ajax({
            type: 'POST',
            url: 'GuardarMensajeA.jsp',  // Reemplaza 'GuardarMensaje.jsp' con la URL de tu servlet o JSP que maneje el guardado del mensaje
            data: { content: messageContent,
                    iduser: idUser
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
    <!-- Script JavaScript en tu JSP -->
    
    <script src="scriptchatadmin.js"></script>


</body>
</html>