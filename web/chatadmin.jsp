<%@page import="java.util.ArrayList"%>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
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
        int cuantos = 0;
        request.setAttribute("adminUsers", adminUsers);
        Integer admin = (Integer) session.getAttribute("id_admin");
        String nombre_admin = (String) session.getAttribute("nombre_admin");
        ArrayList<String> nombresillos = new ArrayList<>();
        int totales = 0;

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
                                if (!displayedNames.contains(userName) && !adminUser.getName().equals(nombre_admin) && adminUser.getId_admin() == admin) { 
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
                    <% for (AdminUser adminUser : adminUsers) {
                    totales++;
                    
                    if(adminUser.getId_admin() == admin && !nombresillos.contains(adminUser.getName())){
                    nombresillos.add(adminUser.getName());
                    cuantos++;%>
                <div class="conversation" id="conversation-<%= adminUser.getName() %>">
                    <div class="conversation-top">
                        <!-- Puedes mostrar informaciï¿½n adicional sobre el usuario aquï¿½ -->
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
                        
                        if(admin == message.getId_admin()){
                            
                        %>
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
                            <textarea id="messageInput<%= cuantos %>" class="conversation-form-input" rows="1" placeholder="Escribe un mensaje..."></textarea>
                        </div>
                        <button type="button" class="conversation-form-button conversation-form-submit" onclick="sendMessage('<%= adminUser.getId() %>')"><i class="ri-send-plane-2-line"></i></button>
                    </div>
            </div>
        <% }
}%>

                       <!-- end: Conversation -->
            </div>
            <!-- end: Content -->
        </div>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script>
/*function sendMessage(idUser) {
        var messageContent = $('#messageInput').val();

        // Validar que el contenido del mensaje no estï¿½ vacï¿½o
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
                // Lï¿½gica de ï¿½xito (opcional)
                console.log('Mensaje enviado correctamente');
            },
            error: function(error) {
                // Manejo de errores (opcional)
                console.error('Error al enviar el mensaje:', error);
            }
        });

        // Limpiar el contenido del textarea despuï¿½s de enviar el mensaje
        $('#messageInput').val('');
    }
*/

var socket = new WebSocket("ws://devsolutions.gerdoc.com/UxerSiito/uxersiichat/gerdoc");

socket.onopen = function(event) {
    // La conexiï¿½n se ha abierto
};

let messageCounterA = 0; // Variable para llevar la cuenta de los mensajes

socket.onmessage = function(event) {
    try {
        var eventData = JSON.parse(event.data);
        console.log("Parsed data:", eventData);

        // Incrementamos el contador de mensajes
        messageCounterA++;
        
        
        

        // Obtener la fecha y hora actual sin segundos
        var currentTime = new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', month: 'numeric', day: 'numeric', year: 'numeric' });
        
        var idUserActual = '<%= nombre_admin %>';
        
        if(idUserActual === eventData.sender){
            var mensaje = document.createElement("li");
            mensaje.classList.add("conversation-item");
            

            var spanId = "messageContentSpanA" + messageCounterA;
            mensaje.innerHTML = 
                '<div class="conversation-item-side">' +
                    '<img class="conversation-item-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">' +
                '</div>' +
                '<div class="conversation-item-content">' +
                    '<div class="conversation-item-wrapper">' +
                        '<div class="conversation-item-box">' +
                            '<div class="conversation-item-text">' +
                                '<span id="' + spanId + '"></span>' +
                                '<div class="conversation-item-time">' + currentTime + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';

            // Cambio importante: asegÃºrate de que el contenido del mensaje estÃ© siendo agregado correctamente
            $('.conversation-wrapper').append(mensaje);
        }else{
            var mensaje = document.createElement("li");
            
            mensaje.classList.add('conversation-item', 'me');


            var spanId = "messageContentSpanA" + messageCounterA;
            mensaje.innerHTML = 
                '<div class="conversation-item-side">' +
                    '<img class="conversation-item-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">' +
                '</div>' +
                '<div class="conversation-item-content">' +
                    '<div class="conversation-item-wrapper">' +
                        '<div class="conversation-item-box">' +
                            '<div class="conversation-item-text">' +
                                '<span id="' + spanId + '"></span>' +
                                '<div class="conversation-item-time">' + currentTime + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';

            // Cambio importante: asegÃºrate de que el contenido del mensaje estÃ© siendo agregado correctamente
            $('.conversation-wrapper').append(mensaje);
        }

        // Ahora intentamos insertar el contenido en el span
        document.getElementById(spanId).innerText = eventData.content;
    } catch (error) {
        console.error('Error parsing event data:', error);
    }
};


socket.onclose = function(event) {
    // Manejar el cierre de la conexiï¿½n
};

socket.onerror = function (event) {
    console.log("Error: " + event.data);
};

// Para enviar un mensaje al servidor
function sendMessage(idUser) {
    var messageContent = $('#messageInput').val();
    
    // Validar que el contenido del mensaje no estï¿½ vacï¿½o
    if (messageContent.trim() === "") {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }
    
    

    // Enviar el mensaje a travï¿½s de la conexiï¿½n WebSocket
    var message = {
        content: messageContent,
        iduser: idUser,
        sender: '<%= nombre_admin %>'
    };
    socket.send(JSON.stringify(message));

    // Limpiar el contenido del textarea despuï¿½s de enviar el mensaje
    $('#messageInput').val('');
     var currentTime = new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', month: 'numeric', day: 'numeric', year: 'numeric' });
        // Obtener la fecha y hora actual
        var currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

        var parsedDate = new Date(currentTime);

        // Formatear la fecha y hora según el formato de MySQL
        var formattedDateTime = parsedDate.toISOString().slice(0, 19).replace("T", " ");
        // Formatear la fecha y hora según el formato de MySQL

    $.ajax({
            type: 'POST',
            url: 'GuardarMensajeA.jsp',  // Reemplaza 'GuardarMensaje.jsp' con la URL de tu servlet o JSP que maneje el guardado del mensaje
            data: { content: messageContent,
                    time: currentDate,
                    iduser: idUser
                    },
            success: function(response) {
                // Lï¿½gica de ï¿½xito (opcional)
                console.log('Mensaje enviado correctamente');
            },
            error: function(error) {
                // Manejo de errores (opcional)
                console.error('Error al enviar el mensaje:', error);
            }
        });

}

</script> 
    </section>
    <!-- end: Chat -->
    <script src="https://kit.fontawesome.com/83ffb1b5fc.js" crossorigin="anonymous"></script>
    <!-- Script JavaScript en tu JSP -->
    
    <script src="scriptchatadmin.js"></script>


</body>
</html>
