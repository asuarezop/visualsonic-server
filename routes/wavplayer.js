const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const wavplayer = readWavPlayerFile();
  res.json(wavplayer);
  res.end();
});

// router.post("/", (req, res) => {
//   console.log("Hello from front-end");
//   console.log(req.body);
// }

//   const newVid = {
//     id: crypto.randomUUID(),
//     title: req.body.title,
//     channel: "Anthony",
//     image: "http://localhost:8080/images/Upload-video-preview.jpg",
//     description: req.body.description,
//     views: 1450,
//     likes: 780,
//     timestamp: "08/14/2023",
//     comments: [
//       {
//         id: crypto.randomUUID(),
//         name: "Micheal Lyons",
//         comment:
//           "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
//         likes: 0,
//         timestamp: "08/14/2023",
//       },
//     ],

module.exports = router;
