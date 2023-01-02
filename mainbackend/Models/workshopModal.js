const mongoose = require("mongoose");

//schema for register data
const workshopSchema = new mongoose.Schema({
  workshopName: String,
  userId: String,
  workshopId: String
});

module.exports = new mongoose.model("workshopData", workshopSchema);
