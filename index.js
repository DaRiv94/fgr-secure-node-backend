require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const funfactRoutes = require('./routes/funfact');

// parse application/json
app.use(bodyParser.json())

app.use(cors())

//Routes
app.use('/funfact',funfactRoutes);

// Start Express Server
let PORT = process.env.PORT || 7500;
app.listen(PORT,(err)=>{

    if(err){
        console.log("ERROR: ",err);
    }else{
        console.log(`Running on port ${PORT}`);
    }
});