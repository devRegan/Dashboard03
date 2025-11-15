// ===== GLOBAL VARIABLES =====
let currentUser = null;
let userType = null;
let students = [];
let notices = [];
let events = [];
let complaints = [];
let rankings = [];
let featuredContent = [];

// ===== TEACHER DATA =====
const teachers = {
    user001: { name: 'Dr. Rahman', role: 'head', department: 'CSE', email: 'rahman@uttarauniversity.edu' },
    user002: { name: 'Prof. Ahmed', role: 'teacher', department: 'CSE', email: 'ahmed@uttarauniversity.edu' },
    user003: { name: 'Dr. Hasan', role: 'teacher', department: 'EEE', email: 'hasan@uttarauniversity.edu' },
    user004: { name: 'Prof. Sultana', role: 'teacher', department: 'CSE', email: 'sultana@uttarauniversity.edu' },
    user005: { name: 'Dr. Khan', role: 'teacher', department: 'BBA', email: 'khan@uttarauniversity.edu' },
    user006: { name: 'Prof. Islam', role: 'teacher', department: 'EEE', email: 'islam@uttarauniversity.edu' }
};

// ===== INITIALIZE DATA =====
function initializeData() {
    students = [
        { sid: 'S001', name: 'Rahim Ahmed', dept: 'CSE', email: 'rahim@student.uttarauniversity.edu', password: '123456' },
        { sid: 'S002', name: 'Fatima Khan', dept: 'CSE', email: 'fatima@student.uttarauniversity.edu', password: '123456' },
        { sid: 'S003', name: 'Karim Hassan', dept: 'EEE', email: 'karim@student.uttarauniversity.edu', password: '123456' },
        { sid: 'S004', name: 'Nadia Islam', dept: 'BBA', email: 'nadia@student.uttarauniversity.edu', password: '123456' },
        { sid: 'S005', name: 'Tanvir Ali', dept: 'English', email: 'tanvir@student.uttarauniversity.edu', password: '123456' }
    ];

    notices = [
        { id: 1, title: 'Mid-term Exam Schedule', content: 'Mid-term examinations will commence from November 20, 2025. Students are advised to check the detailed schedule on the department notice board.', date: '2025-11-15', author: 'Dr. Rahman', dept: 'All' },
        { id: 2, title: 'Library Hours Extended', content: 'The central library will remain open until 10:00 PM during the examination period to facilitate student studies.', date: '2025-11-14', author: 'Prof. Ahmed', dept: 'All' },
        { id: 3, title: 'Workshop on AI and Machine Learning', content: 'A special workshop on Artificial Intelligence will be conducted on November 18. All CSE students are encouraged to attend.', date: '2025-11-13', author: 'Prof. Sultana', dept: 'CSE' }
    ];

    events = [
        { id: 1, title: 'Programming Contest 2025', content: 'Inter-department coding competition. Top 3 winners will receive prizes. Registration deadline: November 20, 2025.', date: '2025-11-15', eventDate: '2025-11-25', dept: 'CSE', author: 'Dr. Rahman' },
        { id: 2, title: 'Annual Science Fair', content: 'University-wide science exhibition showcasing innovative projects from all departments.', date: '2025-11-14', eventDate: '2025-12-01', dept: 'All', author: 'Dr. Rahman' },
        { id: 3, title: 'Business Plan Competition', content: 'BBA department business plan competition with cash prizes for top teams.', date: '2025-11-13', eventDate: '2025-11-28', dept: 'BBA', author: 'Dr. Khan' }
    ];

    complaints = [
        { id: 1, title: 'AC Not Working in Room 305', content: 'The air conditioning system has been malfunctioning for a week. Students are facing difficulty during classes.', date: '2025-11-14', author: 'Rahim Ahmed', status: 'pending' },
        { id: 2, title: 'Cafeteria Food Quality', content: 'Request for improvement in cafeteria food standards.', date: '2025-11-13', author: 'Fatima Khan', status: 'pending' }
    ];

    rankings = [
        {
            dept: 'CSE',
            students: [
                { name: 'Rahim Ahmed', score: 95, rank: 1 },
                { name: 'Fatima Khan', score: 92, rank: 2 },
                { name: 'Karim Hassan', score: 89, rank: 3 },
                { name: 'Nadia Islam', score: 87, rank: 4 },
                { name: 'Tanvir Ali', score: 85, rank: 5 }
            ]
        },
        {
            dept: 'EEE',
            students: [
                { name: 'Sarah Rahman', score: 94, rank: 1 },
                { name: 'Imran Hossain', score: 91, rank: 2 },
                { name: 'Ayesha Begum', score: 88, rank: 3 },
                { name: 'Fahim Ahmed', score: 86, rank: 4 },
                { name: 'Rima Akter', score: 84, rank: 5 }
            ]
        },
        {
            dept: 'BBA',
            students: [
                { name: 'Mehedi Khan', score: 93, rank: 1 },
                { name: 'Sabrina Sultana', score: 90, rank: 2 },
                { name: 'Rafiq Islam', score: 87, rank: 3 },
                { name: 'Nusrat Jahan', score: 85, rank: 4 },
                { name: 'Arif Hasan', score: 83, rank: 5 }
            ]
        },
        {
            dept: 'English',
            students: [
                { name: 'Anika Chowdhury', score: 96, rank: 1 },
                { name: 'Rizwan Sadiq', score: 93, rank: 2 },
                { name: 'Tania Akhter', score: 90, rank: 3 },
                { name: 'Shakib Mahmud', score: 88, rank: 4 },
                { name: 'Lamia Hassan', score: 86, rank: 5 }
            ]
        }
    ];

    featuredContent = [
        { id: 1, icon: '🎉', title: 'Annual Tech Fest 2025', content: 'Join us for the biggest tech festival of the year! Featuring coding competitions, robotics showcase, and guest lectures from industry experts.', date: '2025-12-05', type: 'event' },
        { id: 2, icon: '🏆', title: 'CSE Team Wins National Hackathon', content: 'Uttara University CSE students secured first place in the National Programming Hackathon, showcasing exceptional problem-solving skills.', date: '2025-11-10', type: 'news' },
        { id: 3, icon: '🎭', title: 'Cultural Week Celebration', content: 'Experience diverse cultural performances, art exhibitions, and food festivals celebrating the rich heritage of our student community.', date: '2025-11-20', type: 'event' }
    ];
}

// ===== AUTH FUNCTIONS =====
function showStudentAuth() {
    document.getElementById('studentAuthPage').style.display = 'flex';
    document.getElementById('teacherLoginPage').style.display = 'none';
    showLogin();
}

function showTeacherLogin() {
    document.getElementById('studentAuthPage').style.display = 'none';
    document.getElementById('teacherLoginPage').style.display = 'flex';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function studentSignup() {
    const name = document.getElementById('signupName').value.trim();
    const sid = document.getElementById('signupSID').value.trim();
    const dept = document.getElementById('signupDept').value;
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;

    if (!name || !sid || !dept || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    const existing = students.find(s => s.sid === sid);
    if (existing) {
        alert('Student ID already registered');
        return;
    }

    students.push({ sid, name, dept, email, password });
    alert('Registration successful! Please login.');
    showLogin();
    
    document.getElementById('signupName').value = '';
    document.getElementById('signupSID').value = '';
    document.getElementById('signupDept').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
}

function studentLogin() {
    const sid = document.getElementById('loginSID').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!sid || !password) {
        alert('Please enter Student ID and Password');
        return;
    }

    const student = students.find(s => s.sid === sid && s.password === password);
    
    if (!student) {
        alert('Invalid Student ID or Password');
        return;
    }

    currentUser = student;
    userType = 'student';
    showPortal();
}

function teacherLogin() {
    const userId = document.getElementById('teacherSelect').value;
    
    if (!userId) {
        alert('Please select your account');
        return;
    }

    currentUser = { id: userId, ...teachers[userId] };
    userType = 'teacher';
    showPortal();
}

function showPortal() {
    document.getElementById('studentAuthPage').style.display = 'none';
    document.getElementById('teacherLoginPage').style.display = 'none';
    document.getElementById('mainPortal').style.display = 'block';

    // Set user info in menu
    document.getElementById('menuAvatar').textContent = currentUser.name.charAt(0);
    document.getElementById('menuUserName').textContent = currentUser.name;
    
    if (userType === 'student') {
        document.getElementById('menuUserRole').textContent = 'Student - ' + currentUser.dept;
        document.getElementById('studentsMenuItem').style.display = 'none';
        document.getElementById('addNoticeMenuItem').style.display = 'none';
        document.getElementById('addEventMenuItem').style.display = 'none';
        document.getElementById('addNoticeBtnMain').style.display = 'none';
        document.getElementById('addEventBtnMain').style.display = 'none';
    } else {
        document.getElementById('menuUserRole').textContent = currentUser.role === 'head' ? 'Department Head' : 'Teacher';
        document.getElementById('studentsMenuItem').style.display = 'flex';
        document.getElementById('addNoticeMenuItem').style.display = 'flex';
        document.getElementById('addNoticeBtnMain').style.display = 'block';
        
        if (currentUser.role === 'head') {
            document.getElementById('addEventMenuItem').style.display = 'flex';
            document.getElementById('addEventBtnMain').style.display = 'block';
        }
    }

    updateDashboard();
    displayFeaturedContent();
    displayNotices();
    displayEvents();
    displayRankings();
}

function logout() {
    currentUser = null;
    userType = null;
    document.getElementById('mainPortal').style.display = 'none';
    showStudentAuth();
    document.getElementById('loginSID').value = '';
    document.getElementById('loginPassword').value = '';
    closeMenu();
}

// ===== NAVIGATION =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Update active nav
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }
}

// ===== MENU =====
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('active');
}

function closeMenu() {
    document.getElementById('dropdownMenu').classList.remove('active');
}

// ===== THEME =====
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('themeIcon');
    icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// ===== MODAL =====
function showModal(type) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    closeMenu();
    
    if (type === 'profile') {
        title.textContent = 'My Profile';
        body.innerHTML = `
            <div style="text-align: center;">
                <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); color: white; display: flex; align-items: center; justify-content: center; font-size: 40px; margin: 0 auto 20px; font-weight: 600;">
                    ${currentUser.name.charAt(0)}
                </div>
                <h3 style="color: var(--text-primary); margin-bottom: 10px;">${currentUser.name}</h3>
                <p style="color: var(--text-secondary); margin-bottom: 8px;">
                    ${userType === 'student' ? 'Student ID: ' + currentUser.sid : 'Employee ID: ' + currentUser.id}
                </p>
                <p style="color: var(--text-secondary); margin-bottom: 8px;">
                    Department: ${userType === 'student' ? currentUser.dept : currentUser.department}
                </p>
                <p style="color: var(--text-secondary);">
                    Email: ${currentUser.email}
                </p>
            </div>
        `;
    } else if (type === 'complaints') {
        title.textContent = 'Complaint Box';
        body.innerHTML = `
            <button onclick="showComplaintForm()" class="btn-primary" style="margin-bottom: 20px;">+ Submit New Complaint</button>
            <div id="modalComplaintForm" style="display: none; margin-bottom: 20px; padding: 20px; background: var(--bg-primary); border-radius: var(--radius-sm);">
                <input type="text" id="modalComplaintTitle" placeholder="Subject" class="form-input">
                <textarea id="modalComplaintContent" placeholder="Describe your complaint..." class="form-input"></textarea>
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <button onclick="submitComplaint()" class="btn-primary">Submit</button>
                    <button onclick="cancelComplaintForm()" class="btn-secondary">Cancel</button>
                </div>
            </div>
            <div id="modalComplaintsList">${displayComplaintsList()}</div>
        `;
    } else if (type === 'students') {
        title.textContent = 'Student Information';
        body.innerHTML = displayStudentsTable();
    } else if (type === 'addNotice') {
        title.textContent = 'Post New Notice';
        body.innerHTML = `
            <input type="text" id="modalNoticeTitle" placeholder="Notice Title" class="form-input">
            <textarea id="modalNoticeContent" placeholder="Notice Content" class="form-input"></textarea>
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button onclick="submitNotice()" class="btn-primary">Post Notice</button>
                <button onclick="closeModal()" class="btn-secondary">Cancel</button>
            </div>
        `;
    } else if (type === 'addEvent') {
        title.textContent = 'Create New Event';
        body.innerHTML = `
            <input type="text" id="modalEventTitle" placeholder="Event Title" class="form-input">
            <textarea id="modalEventContent" placeholder="Event Description" class="form-input">< /textarea>
            <input type="date" id="modalEventDate" class="form-input">
            <select id="modalEventDept" class="form-input">
                <option value="All">All Departments</option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
                <option value="English">English</option>
            </select>
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button onclick="submitEvent()" class="btn-primary">Create Event</button>
                <button onclick="closeModal()" class="btn-secondary">Cancel</button>
            </div>
        `;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// ===== DASHBOARD =====
function updateDashboard() {
    document.getElementById('totalNotices').textContent = notices.length;
    document.getElementById('totalEvents').textContent = events.length;
    document.getElementById('totalComplaints').textContent = complaints.filter(c => c.status === 'pending').length;
    document.getElementById('totalStudents').textContent = students.length;
}

// ===== FEATURED CONTENT =====
function displayFeaturedContent() {
    const container = document.getElementById('featuredContent');
    container.innerHTML = featuredContent.map(item => `
        <div class="featured-card">
            <div class="featured-image">${item.icon}</div>
            <div class="featured-content">
                <h3 class="featured-title">${item.title}</h3>
                <p class="featured-text">${item.content}</p>
                <div class="featured-meta">
                    <span class="badge badge-${item.type === 'event' ? 'success' : 'primary'}">${item.type.toUpperCase()}</span>
                    <span>📅 ${item.date}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== NOTICES =====
function submitNotice() {
    const title = document.getElementById('modalNoticeTitle').value.trim();
    const content = document.getElementById('modalNoticeContent').value.trim();

    if (!title || !content) {
        alert('Please fill in all fields');
        return;
    }

    notices.unshift({
        id: notices.length + 1,
        title,
        content,
        date: new Date().toISOString().split('T')[0],
        author: currentUser.name,
        dept: currentUser.department
    });

    closeModal();
    displayNotices();
    updateDashboard();
    alert('Notice posted successfully!');
}

function deleteNotice(id) {
    if (confirm('Delete this notice?')) {
        notices = notices.filter(n => n.id !== id);
        displayNotices();
        updateDashboard();
    }
}

function displayNotices() {
    const container = document.getElementById('noticesList');
    
    if (notices.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1;">No notices available</p>';
        return;
    }

    container.innerHTML = notices.map(notice => `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${notice.title}</h3>
                ${userType === 'teacher' && notice.author === currentUser.name ? 
                    `<button onclick="deleteNotice(${notice.id})" class="btn-delete">Delete</button>` : ''}
            </div>
            <p class="card-content">${notice.content}</p>
            <div class="card-footer">
                <span class="badge badge-primary">${notice.dept}</span>
                <span>By: ${notice.author}</span>
                <span>📅 ${notice.date}</span>
            </div>
        </div>
    `).join('');
}

// ===== EVENTS =====
function submitEvent() {
    const title = document.getElementById('modalEventTitle').value.trim();
    const content = document.getElementById('modalEventContent').value.trim();
    const eventDate = document.getElementById('modalEventDate').value;
    const dept = document.getElementById('modalEventDept').value;

    if (!title || !content || !eventDate) {
        alert('Please fill in all fields');
        return;
    }

    events.unshift({
        id: events.length + 1,
        title,
        content,
        date: new Date().toISOString().split('T')[0],
        eventDate,
        dept,
        author: currentUser.name
    });

    closeModal();
    displayEvents();
    updateDashboard();
    alert('Event created successfully!');
}

function deleteEvent(id) {
    if (confirm('Delete this event?')) {
        events = events.filter(e => e.id !== id);
        displayEvents();
        updateDashboard();
    }
}

function displayEvents() {
    const container = document.getElementById('eventsList');
    
    if (events.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1;">No events available</p>';
        return;
    }

    container.innerHTML = events.map(event => `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">📅 ${event.title}</h3>
                ${userType === 'teacher' && event.author === currentUser.name ? 
                    `<button onclick="deleteEvent(${event.id})" class="btn-delete">Delete</button>` : ''}
            </div>
            <p class="card-content">${event.content}</p>
            <div class="card-footer">
                <span class="badge badge-success">${event.dept}</span>
                <span>Event: ${event.eventDate}</span>
                <span>By: ${event.author}</span>
            </div>
        </div>
    `).join('');
}

// ===== COMPLAINTS =====
function showComplaintForm() {
    document.getElementById('modalComplaintForm').style.display = 'block';
}

function cancelComplaintForm() {
    document.getElementById('modalComplaintForm').style.display = 'none';
    document.getElementById('modalComplaintTitle').value = '';
    document.getElementById('modalComplaintContent').value = '';
}

function submitComplaint() {
    const title = document.getElementById('modalComplaintTitle').value.trim();
    const content = document.getElementById('modalComplaintContent').value.trim();

    if (!title || !content) {
        alert('Please fill in all fields');
        return;
    }

    complaints.unshift({
        id: complaints.length + 1,
        title,
        content,
        date: new Date().toISOString().split('T')[0],
        author: currentUser.name,
        status: 'pending'
    });

    cancelComplaintForm();
    document.getElementById('modalComplaintsList').innerHTML = displayComplaintsList();
    updateDashboard();
    alert('Complaint submitted successfully!');
}

function deleteComplaint(id) {
    if (confirm('Delete this complaint?')) {
        complaints = complaints.filter(c => c.id !== id);
        document.getElementById('modalComplaintsList').innerHTML = displayComplaintsList();
        updateDashboard();
    }
}

function displayComplaintsList() {
    if (complaints.length === 0) {
        return '<p style="text-align: center; color: var(--text-secondary);">No complaints</p>';
    }

    return complaints.map(c => `
        <div class="card" style="margin-bottom: 15px;">
            <div class="card-header">
                <h4 class="card-title" style="font-size: 16px;">💬 ${c.title}</h4>
                ${c.author === currentUser.name ? 
                    `<button onclick="deleteComplaint(${c.id})" class="btn-delete">Delete</button>` : ''}
            </div>
            <p class="card-content">${c.content}</p>
            <div class="card-footer">
                <span class="badge badge-warning">${c.status.toUpperCase()}</span>
                <span>By: ${c.author}</span>
                <span>📅 ${c.date}</span>
            </div>
        </div>
    `).join('');
}

// ===== RANKINGS =====
function displayRankings() {
    const container = document.getElementById('rankingsList');
    
    container.innerHTML = rankings.map(ranking => `
        <div class="ranking-card">
            <h3>🏆 ${ranking.dept} Department</h3>
            <table class="ranking-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Student Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    ${ranking.students.map(s => `
                        <tr>
                            <td><span class="rank-badge">${s.rank === 1 ? '🥇' : s.rank === 2 ? '🥈' : s.rank === 3 ? '🥉' : s.rank}</span></td>
                            <td class="student-name">${s.name}</td>
                            <td class="student-score">${s.score}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `).join('');
}

// ===== STUDENTS =====
function displayStudentsTable() {
    if (students.length === 0) {
        return '<p style="text-align: center; color: var(--text-secondary);">No students registered</p>';
    }

    return `
        <table class="ranking-table">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                ${students.map(s => `
                    <tr>
                        <td>${s.sid}</td>
                        <td>${s.name}</td>
                        <td>${s.dept}</td>
                        <td>${s.email}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// ===== INITIALIZE =====
window.onload = function() {
    initializeData();
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('dropdownMenu');
        const menuBtn = document.querySelector('.menu-btn');
        
        if (menu.classList.contains('active') && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Close modal when clicking outside
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
};