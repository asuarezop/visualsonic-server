const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const visualizerDetails = readVisualizerFile();
  res.json(visualizerDetails);
  res.end();
});

router.get("/:id", (req, res) => {
  const visualizerDetails = readVisualizerFile();
  const individualVisualizer = visualizerDetails.find(
    (visualiser) => visualiser.id === req.params.id
  );

  res.json(individualVisualizer);
});
