const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userSchema = require("./Models/UserSchema");
const techIdSchema = require("./Models/techID");
const countSchema = require("./Models/techIDCount");
const teamSchema = require("./Models/teamModel");
const workshopDb = require("./Models/workshopModal");
const workshopTCM = require("./Models/TCMWorkshopModel");

var cors = require("cors");
const { response } = require("express");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://swayamg20:4321@cluster0.ix4jgpc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("running");
});

const User = mongoose.model("User", userSchema);
const techID = mongoose.model("techID", techIdSchema);
const countID = mongoose.model("countID", countSchema);
const Team = mongoose.model("Team", teamSchema);

app.get("/api/", (req, res) => console.log("data post api"));

app.post("/api/", (req, res) => {
  const uid = req.body.uid;
  const email = req.body.email;
  User.exists({ uid: uid }, (err, response) => {
    if (err) res.send(err); // if error
    else {
      if (response === null) {
        countID.find({}, (err, currentCount) => {
          if (err) console.log(err);
          else {
            const newUser = new User({
              uid: uid,
              name: "",
              college: "",
              email: email,
              competitions: [],
              workshops: [],
            });
            newUser.save({}, (err, response) => {
              if (err) res.send(err);
              else res.send(newUser);
            });
          }
        });
      } else {
        User.findOne({ uid: uid }, (err, response) => {
          if (err) res.send(err);
          else {
            console.log(response);
            res.send(response);
          }
        });
      }
    }
  });
});

app.get("/api/get-team-detail/:uid", (req, res) => {
  const uid = req.params.uid;
  console.log(uid);
  User.findOne({ uid: uid })
    .then((response) => {
      res.json(response);
      console.log(response);
    })
    .catch((err) => res.send(err));
});

app.post("/api/update-profile", (req, res) => {
  const uid = req.body.uid;
  const name = req.body.name;
  const email = req.body.email;
  const college = req.body.college;
  const phone = req.body.phone;
  console.log("uid");

  User.updateOne(
    { uid: uid },
    {
      name: name,
      email: email,
      college: college,
      phone: phone,
    },
    (err, response) => {
      if (err) res.send(err);
      else res.send(response);
    }
  );
});

//team registration

app.post("/api/teamRegister/:event/:uid", async (req, res) => {
  const uid = req.params.uid;
  const userDetail = await User.findOne({ id: uid });
  const teamName = req.body.teamName;
  const leaderName = userDetail.name;
  const leaderTechId = uid;
  const competitions = req.params.event;
  const newTeam = new teamdb({
    teamName: teamName,
    leaderName: leaderName,
    leaderTechId: leaderTechId,
    memberNames: req.body.memberName,
    memberTechIds: req.body.memberTechId,
    competitions: competitions,
  });
  console.log(req.body.memberName);
  console.log(req.body.memberTechId);
  newTeam.memberNames.push(userDetail.name);
  newTeam.memberTechIds.push(uid);
  var flag = false;
  for (var i = 0; i < newTeam.memberTechIds.length; i++) {
    var x = newTeam.memberTechIds[i];
    const userValidation = await User.findOne({ uid: x });
    console.log(userValidation);
    if (userValidation == null) {
      console.log("validating");
      flag = true;
      break;
    }
  }
  if (!flag) {
    console.log("!flag");
    // const teamData = await teamdb.insertMany([apprec]);
    newTeam.save({}, async (err, response) => {
      if (err) res.send(err);
      else {
        for (var i = 0; i < newTeam.memberTechIds.length; i++) {
          const userDetail = await User.findOne({
            uid: newTeam.memberTechIds[i],
          });
          const competitionArray = userDetail.competitions;
          competitionArray.push(competitions);
          await User.updateMany(
            { uid: newTeam.memberTechIds[i] },
            {
              $set: {
                competitions: competitionArray,
              },
            }
          );
        }
        res.send(response);
      }
    });
  } else {
    console.log("member is not registered");
    res.send("NOTREGISTERED");
  }
});

app.post("/api/workshopRegister/", async (req, res) => {
  const uid = req.body.uid;
  const workName = req.body.workNames;
  console.log(workName);
  const newTeam = new workshopDb({
    workshopName: workName,
    userId: uid,
  });
  const userValidation = await User.findOne({ workshops: workName });
  if (userValidation == null) {
    newTeam.save({}, async (err, response) => {
      if (err) res.send(err);
      else {
        const userDetail = await User.findOne({
          uid: uid,
        });
        const workshopArray = userDetail.workshops;
        workshopArray.push(workName);
        await User.updateMany(
          { uid: uid },
          {
            $set: {
              workshops: workshopArray,
            },
          }
        );
        res.send(response);
      }
    });
  } else {
    res.send("Already Registered");
  }
});

app.get("/api/profile/:id", async (req, res) => {
  const uid = req.params.id;
  const compArray = await User.findOne({
    uid: uid,
  });

  res.send(compArray);
  console.log(compArray.competitions);
});

app.get("/api/competitions/:event/:id", async (req, res) => {
  const uid = req.params.id;
  const events = req.params.event;
  console.log(uid);
  const checkCompetition = await User.find({
    competitions: events,
    uid: uid,
  });
  console.log(checkCompetition);
  if (checkCompetition.length === 0) res.send(false);
  else res.send(true);
});
app.listen(9000, () => {
  console.log("running");
});
