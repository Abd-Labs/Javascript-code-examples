async function fetchData() {
    try {
        const response = await fetch('https://usmanlive.com/wp-json/api/stories');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data); // This value is wrapped in a resolved Promise
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error
    }
}

// Usage of the async function
fetchData()