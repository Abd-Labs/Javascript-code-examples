document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple client-side validation
    if (username.trim() === "" || password.trim() === "") {
        alert("Both username and password are required.");
        return;
    }

    // Simulate an API call
    fakeApiCall(username, password)
        .then(response => {
            if (response.success) {
                // Store user data in localStorage and sessionStorage
                localStorage.setItem('username', username);
                localStorage.setItem('authToken', response.token);
                sessionStorage.setItem('sessionToken', response.token); // Store in sessionStorage

                // Set a cookie for session (optional, for demonstration)
                document.cookie = "sessionToken=" + response.token + "; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

                alert("Login successful!");
                updateStoredDataUI(); // Update UI with stored data
            } else {
                alert("Login failed. Please check your credentials.");
            }
        })
        .catch(error => {
            console.error('API call failed:', error);
            alert("An error occurred. Please try again.");
        });
});

// Function to update UI with stored data
function updateStoredDataUI() {
    const storedUsername = localStorage.getItem('username');
    const authToken = localStorage.getItem('authToken');
    const sessionToken = sessionStorage.getItem('sessionToken'); // Get session storage item

    // Update DOM elements with stored data
    document.getElementById('storedUsername').textContent = `Stored Username: ${storedUsername}`;
    document.getElementById('authToken').textContent = `Auth Token: ${authToken}`;
    document.getElementById('sessionToken').textContent = `Session Token: ${sessionToken}`;
}

// Fake API call function
function fakeApiCall(username, password) {
    return new Promise((resolve, reject) => {
        // Simulate an API response delay
        setTimeout(() => {
            if (username === "user" && password === "pass") {
                resolve({ success: true, token: "abc123" });
            } else {
                resolve({ success: false });
            }
        }, 1000);
    });
}

// Function to get a cookie value by name
function getCookie(name) {
    var nameEQ = name + "=";
    var cookiesArray = document.cookie.split(';');
    for (var i = 0; i < cookiesArray.length; i++) {
        var cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

// Update UI with stored data when page loads
window.addEventListener('DOMContentLoaded', () => {
    updateStoredDataUI();
});