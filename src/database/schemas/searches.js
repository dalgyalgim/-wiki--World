const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    keyword : {
        type : mongoose.SchemaTypes.String,
    },
    message : {
        type : mongoose.SchemaTypes.String,
    },
    related: {
        type : mongoose.SchemaTypes.Array,
    }
})

module.exports = mongoose.model('Searches', SearchSchema)