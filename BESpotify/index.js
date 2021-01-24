const express = require('express')
var app = express()
const port = 8080

var cors = require('cors')
app.use(cors());

app.listen(port, (err) => {
    console.log('server is listening on port 8080');
})

var songroutes = require('./routes/songs')
songroutes(app);