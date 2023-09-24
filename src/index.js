const express = require('express');
const bodyParser=require('body-parser');

const {PORT}= require('./config/Server-config');

const app = express();

const setupAndStartServer = () => {
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended:true}));

    app.listen(PORT,() => {
        console.log(`Server listening on PORT: ${PORT}`);
    })
}

setupAndStartServer()
