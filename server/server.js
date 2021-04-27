const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send("Serveris veikia sekmingai")
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})
