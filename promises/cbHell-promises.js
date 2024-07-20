// Simulated asynchronous functions using Promises
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { id: userId, name: 'Alice' }; // Simulated data
            console.log('User data fetched:', userData);
            resolve(userData);
        }, 1000);
    });
}

function fetchUserOrders(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userOrders = ['Order1', 'Order2']; // Simulated data
            console.log('User orders fetched:', userOrders);
            resolve(userOrders);
        }, 1000);
    });
}

function fetchOrderDetails(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderDetails = { id: orderId, status: 'Delivered' }; // Simulated data
            console.log('Order details fetched:', orderDetails);
            resolve(orderDetails);
        }, 1000);
    });
}

function updateUI(userData, userOrders, orderDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Updated UI with ${userData.name}'s orders and details.`);
            resolve();
        }, 1000);
    });
}

// Refactored example using async/await
async function fetchDataAndRender() {
    try {
        const userData = await fetchUserData(1);
        const userOrders = await fetchUserOrders(userData);
        const orderDetails = await fetchOrderDetails(userOrders[0]);
        await updateUI(userData, userOrders, orderDetails);
        console.log('UI updated successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the async function to execute the sequence
fetchDataAndRender();
console.log("Other things")
