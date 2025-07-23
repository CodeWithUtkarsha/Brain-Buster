// Function to handle login form submission
function login(event) {
    event.preventDefault(); // Prevent page refresh on form submit
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation (you can replace with actual login logic)
    if (email && password) {
        alert("Login successful!");
        window.location.href = "quiz.html"; // Redirect to quiz page
    } else {
        alert("Please enter both email and password.");
    }
}

// Function to show register form (optional if you want a separate registration page)
function showRegister() {
    alert("Registration page functionality to be implemented.");
}

// Function to show notifications (this is just a placeholder for future functionality)
function showNotifications() {
    alert("You have new notifications!");
}

// Toggle between Login and Register forms
function toggleForms() {
    const loginContainer = document.getElementById("login-container");
    const registerContainer = document.getElementById("register-container");

    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        registerContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    }
}

// Register new user
function register(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Check if user already exists
    if (localStorage.getItem(email)) {
        alert("Account already exists. Please log in.");
        toggleForms(); // Redirect to login form
    } else {
        // Save user data in local storage
        localStorage.setItem(email, password);
        alert("Registration successful! You can now log in.");
        toggleForms(); // Redirect to login form
    }
}

// Login existing user
function login(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Check if user exists and password matches
    const storedPassword = localStorage.getItem(email);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        window.location.href = "quiz.html"; // Redirect to quiz page
    } else {
        alert("Invalid email or password. Please try again.");
    }
}


// Function to toggle the visibility of the notifications dropdown
function toggleNotifications(event) {
    // Prevent the click event from bubbling up to the document
    event.stopPropagation();
    
    const dropdown = document.getElementById("notification-dropdown");
    // Toggle the display property
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}

// Close the notification dropdown if the user clicks outside of it
document.addEventListener('click', function() {
    const dropdown = document.getElementById("notification-dropdown");
    dropdown.style.display = "none"; // Hide the dropdown
});
document.getElementById("login-btn").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful!");
    } else {
        alert("Please enter both email and password.");
    }
});
function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Simple registration form validation
document.getElementById("register-btn").addEventListener("click", function() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password === confirmPassword && email && password) {
        alert("Registration successful!");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Please fill in all fields.");
    }
});
