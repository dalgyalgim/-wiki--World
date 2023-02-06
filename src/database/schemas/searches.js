const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    keyword : {
        type : mongoose.SchemaTypes.String,
    },
    message : {
        type : mongoose.SchemaTypes.String,
    }
})

module.exports = mongoose.model('Searches', SearchSchema)