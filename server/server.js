const express = require('express');
const cors = require('cors');
const app = express();
//const db = require('./db');
const router = require('./routes/usersRoutes');
const SERVER_PORT = process.env.SERVER_PORT || 3001;
app.use(express.json())


const corsConfig = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

app.use(router);







app.listen(SERVER_PORT, (err) => {
    if (err) {
      console.log(`😞 Sorry, something went wrong! ${err}`); 
    } else {
      console.log(`🚀 Server (JWT) is listening on port ${SERVER_PORT}!`); 
    }
  });