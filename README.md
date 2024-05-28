<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skillverse</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <div id="login-screen" class="screen">
            <h1>Welcome to Skillverse</h1>
            <form id="login-form" onsubmit="login(event)">
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit" class="primary-btn">Login</button>
            </form>
        </div>

        <div id="mode-selection-screen" class="screen hidden">
            <h2>Select Mode</h2>
            <button class="primary-btn" onclick="showLearnMode()">Learn</button>
            <button class="primary-btn" onclick="showTeachMode()">Teach</button>
            <button class="primary-btn" onclick="showFindTalentMode()">Find Talent</button>
            <button class="secondary-btn" onclick="logout()">Logout</button>
        </div>

        <div id="learn-mode-screen" class="screen hidden">
            <h2>Learn Mode</h2>
            <p>Select a skill to learn:</p>
            <ul class="skill-list">
                <li onclick="showTeachers('Web Development')">Web Development</li>
                <li onclick="showTeachers('Data Science')">Data Science</li>
                <li onclick="showTeachers('Graphic Design')">Graphic Design</li>
            </ul>
            <button class="secondary-btn" onclick="backToModeSelection()">Back</button>
        </div>

        <div id="teach-mode-screen" class="screen hidden">
            <h2>Teach Mode</h2>
            <p>Dashboard</p>
            <p>Messages from learners:</p>
            <ul id="teach-messages" class="message-list">
                <!-- Messages will be populated here -->
            </ul>
            <button class="primary-btn" onclick="uploadSkillVideo()">Upload Skill Video</button>
            <button class="secondary-btn" onclick="backToModeSelection()">Back</button>
        </div>

        <div id="find-talent-mode-screen" class="screen hidden">
            <h2>Find Talent Mode</h2>
            <p>Select a skill to find experts:</p>
            <ul class="skill-list">
                <li onclick="showExperts('Web Development')">Web Development</li>
                <li onclick="showExperts('Data Science')">Data Science</li>
                <li onclick="showExperts('Graphic Design')">Graphic Design</li>
            </ul>
            <button class="secondary-btn" onclick="backToModeSelection()">Back</button>
        </div>

        <div id="teachers-screen" class="screen hidden">
            <h2>Available Teachers</h2>
            <ul id="teachers-list" class="profile-list">
                <!-- Teachers will be populated here -->
            </ul>
            <button class="secondary-btn" onclick="backToLearnMode()">Back</button>
        </div>

        <div id="experts-screen" class="screen hidden">
            <h2>Available Experts</h2>
            <ul id="experts-list" class="profile-list">
                <!-- Experts will be populated here -->
            </ul>
            <button class="secondary-btn" onclick="backToFindTalentMode()">Back</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
