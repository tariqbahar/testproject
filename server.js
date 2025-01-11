// Import the Express module
const express = require('express');
const app = express();

// Define a route that sends "Hello, World!" as a response
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Make the server listen on port 3000
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});


