const fetchPromise = fetch("https://usmanlive.com/wp-json/api/stories");



fetchPromise.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data from the response
})
.then(data => {
    console.log(data); // Now `data` contains the parsed JSON array
})
.catch(error => {
    console.error('Fetch error:', error);
});
