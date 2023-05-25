const express = require('express');
const studentRoutes = require('./routes/student');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;
let server;

//middleware config
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '20mb'}));


//API Calls
app.use('/api/student/', studentRoutes);

server = app.listen(PORT, () => {
    console.log('server running', + PORT);
})