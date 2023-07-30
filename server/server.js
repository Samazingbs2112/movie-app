const express = require('express');
const app = express();
const db = require('./db');
const SERVER_PORT = process.env.SERVER_PORT || 3001;



app.listen(SERVER_PORT, (err) => {
    if (err) {
      console.log(`😞 Sorry, something went wrong! ${err}`); 
    } else {
      console.log(`🚀 Server (JWT) is listening on port ${SERVER_PORT}!`); 
    }
  });