// Simulated asynchronous function to fetch user data
function fetchUserData(callback) {
    // Assume an API call with setTimeout to simulate delay
    setTimeout(() => {
        const userData = {
            username: 'john_doe',
            email: 'john.doe@example.com'
        };
        // Simulating success callback
        callback(null, userData); // Pass null for error and userData for success
    }, 2000); // Simulate 2 seconds delay

}

// Usage example
fetchUserData((error, user) => {
    if (error) {
        console.error('Error fetching user data:', error);
    } else {
        console.log('User data:', user);
    }
});
