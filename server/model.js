const mongoose = require('mongoose');

const UrlShortenerSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    shortId:{
        type:String,
        required:true,
    }
}) 

const ShortUrl = new  mongoose.model('shortUrl', UrlShortenerSchema)
module.exports = ShortUrl