const mongoose = require('mongoose')
const techIdSchema = new mongoose.Schema({
    uid : {
        type : String
    },
    techid : {
    	type : String
    }
})

module.exports = techIdSchema;