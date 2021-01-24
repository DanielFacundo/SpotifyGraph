/*
* Song Routes
*/

module.exports = function(app) {

    const songs = require('../controllers/songinfo')

    //GET request to get all songs (Temporarily a test function)
    app.route('/songs').get(songs.test_function)
}