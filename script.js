let currentScreen = '';
let previousScreen = '';

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For now, we'll just log the user in without validation
    if (username && password) {
        document.getElementById('user-name-display').innerText = username;
        document.getElementById('user-email-display').innerText = `${username}@example.com`;
        showDashboard();
    } else {
        alert('Please enter both username and password');
    }
}

function showDashboard() {
    changeScreen('dashboard-screen');
}

function showHome() {
    changeScreen('mode-selection-screen');
}

function showModeSelection() {
    changeScreen('mode-selection-screen');
}

function showLearnMode() {
    changeScreen('learn-mode-screen');
}

function showTeachMode() {
    changeScreen('teach-mode-screen');
}

function showFindTalentMode() {
    changeScreen('find-talent-mode-screen');
}

function showTeachers(skill) {
    changeScreen('teachers-screen');

    const teachersList = document.getElementById('teachers-list');
    teachersList.innerHTML = ''; // Clear previous list
    const teachers = [
        { name: 'John Doe', skill: skill },
        { name: 'Jane Smith', skill: skill },
        { name: 'Sam Wilson', skill: skill }
    ];

    teachers.forEach(teacher => {
        const li = document.createElement('li');
        li.textContent = `${teacher.name} (${teacher.skill})`;
        li.onclick = () => openChat(teacher.name);
        teachersList.appendChild(li);
    });
}

function showExperts(skill) {
    changeScreen('experts-screen');

    const expertsList = document.getElementById('experts-list');
    expertsList.innerHTML = ''; // Clear previous list
    const experts = [
        { name: 'Alex Johnson', skill: skill },
        { name: 'Emily Davis', skill: skill },
        { name: 'Michael Brown', skill: skill }
    ];

    experts.forEach(expert => {
        const li = document.createElement('li');
        li.textContent = `${expert.name} (${expert.skill})`;
        li.onclick = () => openChat(expert.name);
        expertsList.appendChild(li);
    });
}

function openChat(personName) {
    document.getElementById('chat-person-name').innerText = personName;
    changeScreen('chat-screen');
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatBox.appendChild(messageElement);
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function uploadSkillVideo() {
    alert('Upload skill video feature');
}

function backToPrevious() {
    changeScreen(previousScreen);
}

function backToModeSelection() {
    changeScreen('mode-selection-screen');
}

function backToLearnMode() {
    changeScreen('learn-mode-screen');
}

function backToFindTalentMode() {
    changeScreen('find-talent-mode-screen');
}

function logout() {
    changeScreen('login-screen');
}

function changeScreen(screenId) {
    if (currentScreen) {
        document.getElementById(currentScreen).classList.add('hidden');
    }
    document.getElementById(screenId).classList.remove('hidden');
    previousScreen = currentScreen;
    currentScreen = screenId;
}
