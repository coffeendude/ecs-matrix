const express = require('express');
const app = express();

app.get('/',function(req,res){
  
    // Sending index.html file for GET request
    // to the root of the app
    res.sendFile(__dirname+'/index.html')
})

