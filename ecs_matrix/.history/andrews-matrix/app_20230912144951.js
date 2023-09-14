const express = require('express');
const app = express();

app.get('/', (req,res) => {
  
    // Sending index.html file for GET request
    // to the root of the app
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log('Server started at 3000')
})
