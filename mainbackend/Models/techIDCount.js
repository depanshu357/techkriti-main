const mongoose = require('mongoose')
const countSchema = new mongoose.Schema({
    count : {
        type : Number
    }
})
module.exports = countSchema;