function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For now, we'll just log the user in without validation
    if (username && password) {
        showModeSelection();
    } else {
        alert('Please enter both username and password');
    }
}

function showModeSelection() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('mode-selection-screen').classList.remove('hidden');
}

function showLearnMode() {
    document.getElementById('mode-selection-screen').classList.add('hidden');
    document.getElementById('learn-mode-screen').classList.remove('hidden');
}

function showTeachMode() {
    document.getElementById('mode-selection-screen').classList.add('hidden');
    document.getElementById('teach-mode-screen').classList.remove('hidden');
}

function showFindTalentMode() {
    document.getElementById('mode-selection-screen').classList.add('hidden');
    document.getElementById('find-talent-mode-screen').classList.remove('hidden');
}

function showTeachers(skill) {
    document.getElementById('learn-mode-screen').classList.add('hidden');
    document.getElementById('teachers-screen').classList.remove('hidden');
    
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
        li.onclick = () => chatWithTeacher(teacher.name);
        teachersList.appendChild(li);
    });
}

function showExperts(skill) {
    document.getElementById('find-talent-mode-screen').classList.add('hidden');
    document.getElementById('experts-screen').classList.remove('hidden');
    
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
        li.onclick = () => chatWithExpert(expert.name);
        expertsList.appendChild(li);
    });
}

function chatWithTeacher(teacherName) {
    alert(`Chat with ${teacherName}`);
}

function chatWithExpert(expertName) {
    alert(`Chat with ${expertName}`);
}

function uploadSkillVideo() {
    alert('Upload skill video feature');
}

function backToModeSelection() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById('mode-selection-screen').classList.remove('hidden');
}

function backToLearnMode() {
    document.getElementById('teachers-screen').classList.add('hidden');
    document.getElementById('learn-mode-screen').classList.remove('hidden');
}

function backToFindTalentMode() {
    document.getElementById('experts-screen').classList.add('hidden');
    document.getElementById('find-talent-mode-screen').classList.remove('hidden');
}

function logout() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById('login-screen').classList.remove('hidden');
}
