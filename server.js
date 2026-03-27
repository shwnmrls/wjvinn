const express = require('express');
const app = express();
const cors = require('cors'); 
const dbConfig = require('./db');

app.use(cors()); 
app.use(express.json());

const roomsRoute = require('./routes/roomsRoute');
app.use('/api/rooms', roomsRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Node server started on port ${port}`));