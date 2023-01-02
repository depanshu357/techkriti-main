const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    uid : {
        type : String
    },
    name: {
        type: String,
      },
    email: String,
    phone: Number,
    college: String,
    competitions: [{
        type: String
      }],
      workshops: [{
        type: String
      }]
})

module.exports = userSchema;