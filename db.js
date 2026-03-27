const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://shwnmrls:shwnmrls06@cluster.7q36i07.mongodb.net/wjv-rooms'

mongoose.connect(mongoURL)
    .then(() => console.log('Connected to database successfully'))
    .catch((err) => console.log('Error in connecting to database', err))

module.exports = mongoose