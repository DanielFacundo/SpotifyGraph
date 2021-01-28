const dotenv = require('dotenv').config({path:'./.env'})
const express = require('express');
const cors = require('cors');
var SpotifyWebApi = require('spotify-web-api-node');
var songroutes = require('./routes/songs')
const port = 8080;

var app = express();
app.use(cors());

app.listen(port, (err) => {
    console.log('server is listening on port 8080');
})



songroutes(app);



var clientId = process.env.REACT_APP_CLIENT_ID;
var clientSecret = process.env.REACT_APP_SECRET_ID;

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);