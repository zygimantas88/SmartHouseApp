const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });
const roomsRouter = require('./routes/rooms')

const server = express();
const {
    SERVER_PORT,
    MONGO_COMPASS_USER,
    MONGO_COMPASS_PASS,
    MONGO_COMPASS_CLUSTER_URL,
    MONGO_COMPASS_CLUSTER_DB
} = process.env;

//Middlewares
server.use(cors());
server.use(morgan('tiny'));

//Routes

server.use('/rooms', roomsRouter)

server.get('/', (req, res) => {
    res.send('Serveris sekmingai veikia')
});


mongoose.connect(`mongodb+srv://${MONGO_COMPASS_USER}:${MONGO_COMPASS_PASS}@${MONGO_COMPASS_CLUSTER_URL}/${MONGO_COMPASS_CLUSTER_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to Database successfully')
    server.listen(SERVER_PORT, () => {
        console.log(`Server is running on http://localhost:${SERVER_PORT}`)
    })
})


db.on('error', (error) => console.log(`ERROR failed to connect to DB: \n` + error))