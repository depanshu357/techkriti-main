const mongoose = require("mongoose");

//schema for register data
const teamSchema = new mongoose.Schema({
  teamName: String,
  leaderName: String,
  leaderTechId: String,
  memberNames: [],
  memberTechIds: [],
  competitions: String,
});

module.exports = teamSchema;