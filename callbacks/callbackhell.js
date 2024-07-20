// Example of Callback Hell
fetchUserData(1, function (userData){
    fetchUserOrders(userData,  function (userOrders) {
        fetchOrderDetails(userOrders[0], function (orderDetails) {
            // Nested callback to update UI
            updateUI(userData, userOrders, orderDetails, function ()  {
                console.log('UI updated successfully');
            });
        });
    });
});

// Simulated asynchronous functions
function fetchUserData(userId, callback) {
    setTimeout(() => {
        const userData = { id: userId, name: 'Alice' }; // Simulated data
         console.log('User data fetched:', userData);
        callback(userData);
    }, 1000);
}

function fetchUserOrders(userData, callback) {
    setTimeout(() => {
        const userOrders = ['Order1', 'Order2']; // Simulated data
            console.log('User orders fetched:', userOrders);
        callback(userOrders);
    }, 1000);
}

function fetchOrderDetails(orderId, callback) {
    setTimeout(() => {
        const orderDetails = { id: orderId, status: 'Delivered' }; // Simulated data
            console.log('Order details fetched:', orderDetails);
        callback(orderDetails);
    }, 1000);
}

function updateUI(userData, userOrders, orderDetails, callback) {
    setTimeout(() => {
        console.log(`Updated UI with ${userData.name}'s orders and details.`);
        callback();
    }, 1000);
}
