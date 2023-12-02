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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

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
                        <button type="button" class="conversation-form-button conversation-form-submit" onclick="sendMessage('<%= nombUser %>')"><i class="ri-send-plane-2-line"></i></button>
                    </div>
                </div>
                <!-- end: Conversation -->
            </div>
            <!-- end: Content -->
        </div>
                        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
/*    function sendMessage() {
        var messageContent = $('#messageInput').val();

        // Validar que el contenido del mensaje no estï¿½ vacï¿½o
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
     * 
 */
var socket = new WebSocket("ws://devsolutions.gerdoc.com/UxerSiito/chat");

socket.onopen = function(event) {
    // La conexiï¿½n se ha abierto
};

let messageCounter = 0; // Variable para llevar la cuenta de los mensajes

socket.onmessage = function(event) {
    try {
        var eventData = JSON.parse(event.data);
        console.log("Parsed data:", eventData);

        // Incrementamos el contador de mensajes
        messageCounter++;    
        

        // Obtener la fecha y hora actual sin segundos
        var currentTime = new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', month: 'numeric', day: 'numeric', year: 'numeric' });
        
        var idUserActual = '<%= nomb %>';
        
        if(idUserActual === eventData.iduser){
            var mensaje = document.createElement("li");
             mensaje.classList.add('conversation-item', 'me');
            

            var spanId = "messageContentSpan" + messageCounter;
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
            mensaje.classList.add("conversation-item");

            var spanId = "messageContentSpan" + messageCounter;
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
        nombUser: idUser
    };
    socket.send(JSON.stringify(message));

    // Limpiar el contenido del textarea despuï¿½s de enviar el mensaje
    $('#messageInput').val('');
    // Obtener la fecha y hora actual sin segundos
        var currentTime = new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', month: 'numeric', day: 'numeric', year: 'numeric' });
        // Obtener la fecha y hora actual
        var currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

        var parsedDate = new Date(currentTime);

        // Formatear la fecha y hora según el formato de MySQL
        var formattedDateTime = parsedDate.toISOString().slice(0, 19).replace("T", " ");
        // Formatear la fecha y hora según el formato de MySQL

    $.ajax({
            type: 'POST',
            url: 'GuardarMensaje.jsp',  // Reemplaza 'GuardarMensaje.jsp' con la URL de tu servlet o JSP que maneje el guardado del mensaje
            data: { content: messageContent,
                    time: currentDate
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
    <script src="scriptchatadmin.js"></script>
</body>
</html>
