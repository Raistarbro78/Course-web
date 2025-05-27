const courses = [
    {
        id: 1,
        title: "JavaScript Masterclass",
        description: "Become a JavaScript expert with this comprehensive course",
        image: "https://via.placeholder.com/300x180?text=JS+Masterclass",
        isPremium: true,
        content: `
            <h2>JavaScript Masterclass</h2>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="resource-list">
                <h3>Resources</h3>
                <div class="resource-item">Lesson 1 Slides (PDF)</div>
                <div class="resource-item">Exercise Files (ZIP)</div>
                <div class="resource-item">Cheat Sheet</div>
            </div>
        `
    },
    {
        id: 2,
        title: "CSS Animations",
        description: "Learn to create stunning animations with pure CSS",
        image: "https://via.placeholder.com/300x180?text=CSS+Animations",
        isPremium: false,
        content: `
            <h2>CSS Animations</h2>
            <p>This free course will teach you the fundamentals of CSS animations.</p>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/0sRtd2t7qv8" frameborder="0" allowfullscreen></iframe>
            </div>
        `
    },
    {
        id: 3,
        title: "Advanced React Patterns",
        description: "Master advanced React techniques used by top companies",
        image: "https://via.placeholder.com/300x180?text=React+Patterns",
        isPremium: true,
        content: `
            <h2>Advanced React Patterns</h2>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1jWS7cCuUXw" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="resource-list">
                <h3>Resources</h3>
                <div class="resource-item">Complete Code Examples</div>
                <div class="resource-item">Design Patterns PDF</div>
                <div class="resource-item">Performance Checklist</div>
            </div>
        `
    }
];

let currentUser = null;
let isLoginMode = true;

const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const userGreeting = document.getElementById('user-greeting');
const authModal = document.getElementById('auth-modal');
const courseModal = document.getElementById('course-modal');
const modalTitle = document.getElementById('modal-title');
const authForm = document.getElementById('auth-form');
const nameField = document.getElementById('name-field');
const authSwitch = document.getElementById('auth-switch');
const switchToSignup = document.getElementById('switch-to-signup');
const submitAuth = document.getElementById('submit-auth');
const courseCardsContainer = document.getElementById('course-cards');
const courseContent = document.getElementById('course-content');

document.addEventListener('DOMContentLoaded', renderCourses);
loginBtn.addEventListener('click', () => openAuthModal(true));
signupBtn.addEventListener('click', () => openAuthModal(false));
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    openAuthModal(false);
});
authForm.addEventListener('submit', handleAuthSubmit);
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        authModal.style.display = 'none';
        courseModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.style.display = 'none';
    if (e.target === courseModal) courseModal.style.display = 'none';
});

function renderCourses() {
    courseCardsContainer.innerHTML = '';
    
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div class="course-info">
                ${course.isPremium ? '<span class="premium-badge">PREMIUM</span>' : ''}
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button class="view-course" data-id="${course.id}">View Course</button>
            </div>
        `;
        courseCardsContainer.appendChild(card);
    });

    document.querySelectorAll('.view-course').forEach(btn => {
        btn.addEventListener('click', () => openCourse(parseInt(btn.dataset.id)));
    });
}

function openAuthModal(isLogin) {
    isLoginMode = isLogin;
    authModal.style.display = 'block';
    modalTitle.textContent = isLogin ? 'Login' : 'Sign Up';
    nameField.style.display = isLogin ? 'none' : 'block';
    submitAuth.textContent = isLogin ? 'Login' : 'Sign Up';
    authSwitch.innerHTML = isLogin 
        ? 'Don\'t have an account? <a href="#" id="switch-to-signup">Sign up</a>'
        : 'Already have an account? <a href="#" id="switch-to-login">Login</a>';

    const switchLink = isLogin 
        ? document.getElementById('switch-to-signup')
        : document.getElementById('switch-to-login');
    
    switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        openAuthModal(!isLogin);
    });
}

function handleAuthSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = isLoginMode ? null : document.getElementById('name').value;
    
    console.log(`${isLoginMode ? 'Login' : 'Signup'} attempt:`, { email, password, name });
    
    currentUser = {
        email,
        name: name || 'Test User',
        isPremium: false 
    };
    
    updateUI();
    authModal.style.display = 'none';
    alert(isLoginMode ? 'Login successful!' : 'Account created successfully!');
}

function openCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    
    if (!course) return;
    
    if (course.isPremium && (!currentUser || !currentUser.isPremium)) {
        alert('This is a premium course. Please upgrade your account to access it.');
        return;
    }
    
    courseContent.innerHTML = course.content;
    courseModal.style.display = 'block';
}

function updateUI() {
    if (currentUser) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        userGreeting.style.display = 'inline';
        userGreeting.textContent = `Hi, ${currentUser.name.split(' ')[0]}!`;
         
        if (!document.getElementById('logout-btn')) {
            const logoutBtn = document.createElement('button');
            logoutBtn.id = 'logout-btn';
            logoutBtn.textContent = 'Logout';
            logoutBtn.addEventListener('click', logout);
            document.getElementById('auth-section').appendChild(logoutBtn);
        }
    } else {
        loginBtn.style.display = 'inline';
        signupBtn.style.display = 'inline';
        userGreeting.style.display = 'none';
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) logoutBtn.remove();
    }
}

function logout() {
    currentUser = null;
    updateUI();
    alert('Logged out successfully!');
}

updateUI(); 