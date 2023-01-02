const mongoose = require("mongoose");

//schema which contains all workshop details
const workshopTCMSchema = new mongoose.Schema({
  workshopNameTCM: String
});

module.exports = new mongoose.model("TCMWorkshops", workshopTCMSchema);
