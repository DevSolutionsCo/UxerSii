<!DOCTYPE html>
<html lang="en">
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
                        <ul class="content-messages-list">
                            <li>
                                <a href="#" data-conversation="#conversation-1">
                                    <img class="content-message-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                                    <span class="content-message-info">
                                        <span class="content-message-name">Uxersiito 1</span>
                                        <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                    </span>
                                    <span class="content-message-more">
                                        <span class="content-message-unread">o</span>
                                        <span class="content-message-time">12:30</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-conversation="#conversation-2">
                                    <img class="content-message-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                                    <span class="content-message-info">
                                        <span class="content-message-name">Uxersiito 2</span>
                                        <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                    </span>
                                    <span class="content-message-more">
                                        <span class="content-message-unread">o</span>
                                        <span class="content-message-time">12:30</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- end: Content side -->
                <!-- start: Conversation -->
                <div class="conversation conversation-default active">
                    <i class="ri-chat-3-line"></i>
                    <p>Hola admin selecciona un chat!</p>
                </div>
                <div class="conversation" id="conversation-1">
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
                    <div class="conversation-main">
                        <ul class="conversation-wrapper">
                            <li class="conversation-item me">
                                <div class="conversation-item-side">
                                    <img class="conversation-item-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                                </div>
                                <div class="conversation-item-content">
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus repudiandae quisquam sequi nobis suscipit consequatur rerum alias odio repellat!</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tenetur!</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="conversation-item">
                                <div class="conversation-item-side">
                                    <img class="conversation-item-image" src="https://cdn-icons-png.flaticon.com/512/9703/9703596.png" alt="">
                                </div>
                                <div class="conversation-item-content">
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos ab in?</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis. Iste natus est aliquam ipsum doloremque fugiat, quidem eos autem? Dolor quisquam laboriosam enim cum laborum suscipit perferendis adipisci praesentium.</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="conversation-form">
                        <div class="conversation-form-group">
                            <textarea class="conversation-form-input" rows="1" placeholder="Escribe un mensaje..."></textarea>
                        </div>
                        <button type="button" class="conversation-form-button conversation-form-submit"><i class="ri-send-plane-2-line"></i></button>
                    </div>
                </div>
                <div class="conversation" id="conversation-2">
                    <div class="conversation-top">
                        <button type="button" class="conversation-back"><i class="ri-arrow-left-line"></i></button>
                        <div class="conversation-user">
                            <img class="conversation-user-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                            <div>
                                <div class="conversation-user-name">Uxersiito 2</div>
                            </div>
                        </div>
                        <div class="conversation-buttons">
                            <button type="button" class="conversation-form-button" style="width: 200px; height: 40px;"><i class="fa-regular fa-square-check" ></i> &nbsp; Finalizar chat </button>
                            <button type="button"><i class="ri-information-line"></i></button>
                        </div>
                    </div>
                    <div class="conversation-main">
                        <ul class="conversation-wrapper">
                            <li class="conversation-item me">
                                <div class="conversation-item-side">
                                    <img class="conversation-item-image" src="https://i.pinimg.com/originals/ea/ac/48/eaac4816846ee927a2b584bbbf1a15f9.png" alt="">
                                </div>
                                <div class="conversation-item-content">
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus repudiandae quisquam sequi nobis suscipit consequatur rerum alias odio repellat!</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tenetur!</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="conversation-item">
                                <div class="conversation-item-side">
                                    <img class="conversation-item-image" src="https://cdn-icons-png.flaticon.com/512/9703/9703596.png" alt="">
                                </div>
                                <div class="conversation-item-content">
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos ab in?</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-item-wrapper">
                                        <div class="conversation-item-box">
                                            <div class="conversation-item-text">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis. Iste natus est aliquam ipsum doloremque fugiat, quidem eos autem? Dolor quisquam laboriosam enim cum laborum suscipit perferendis adipisci praesentium.</p>
                                                <div class="conversation-item-time">12:30</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="conversation-form">
                        <div class="conversation-form-group">
                            <textarea class="conversation-form-input" rows="1" placeholder="Escribe un mensaje..."></textarea>
                        </div>
                        <button type="button" class="conversation-form-button conversation-form-submit"><i class="ri-send-plane-2-line"></i></button>
                    </div>
                </div>
                <!-- end: Conversation -->
            </div>
            <!-- end: Content -->
        </div>
    </section>
    <!-- end: Chat -->
    <script src="https://kit.fontawesome.com/83ffb1b5fc.js" crossorigin="anonymous"></script>
    <script src="scriptchatadmin.js"></script>
</body>
</html>