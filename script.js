body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

#app {
    text-align: center;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
}

.screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    transition: opacity 0.3s ease-in-out;
}

.hidden {
    display: none;
}

#login-screen {
    background-color: #FF6F61;
}

#dashboard-screen {
    background-color: #6B5B95;
}

#mode-selection-screen {
    background-color: #88B04B;
}

#learn-mode-screen {
    background-color: #45A29E;
}

#teach-mode-screen {
    background-color: #D65076;
}

#find-talent-mode-screen {
    background-color: #FFA500;
}

#teachers-screen {
    background-color: #2E8B57;
}

#experts-screen {
    background-color: #8A2BE2;
}

#chat-screen {
    background-color: #4682B4;
}

h1, h2 {
    margin-bottom: 20px;
    color: white;
}

form {
    display: flex;
    flex-direction: column;
}

input[type="text"], input[type="password"], input[type="text"] {
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.primary-btn {
    background-color: #007bff;
    color: white;
}

.primary-btn:hover {
    background-color: #0056b3;
}

.secondary-btn {
    background-color: #6c757d;
    color: white;
}

.secondary-btn:hover {
    background-color: #5a6268;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    padding: 10px;
    margin: 5px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

ul li:hover {
    background-color: #e0e0e0;
}

.skill-list li, .profile-list li, .message-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.skill-list li {
    text-align: left;
}

.profile-list li, .message-list li {
    justify-content: space-between;
}

.skill-list li::before, .profile-list li::before, .message-list li::before {
    content: '•';
    font-size: 20px;
    color: #007bff;
    margin-right: 10px;
}

.chat-box {
    width: 100%;
    height: 300px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
    overflow-y: auto;
    background-color: white;
}
