const mongoose = require('mongoose');

const imageSchema =  mongoose.Schema({
    name:String,
    url:String,
    details:String
});

const Image = mongoose.model('image',imageSchema);

module.exports = Image;

