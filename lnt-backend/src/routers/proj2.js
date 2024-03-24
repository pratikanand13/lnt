const express = require("express");
const router = new express.Router();

const tweetsData = require("../middleware/connection.js");
const data = require("../utils/processData.js");

router.post("/proj2", tweetsData, async function (req, res) {
  try {
    var predictionScore = [];
    var predictionLabels = [];
    var tweetId = [];

   
    const hoteljsonFile = req.hoteljsonFile;
    for (let i = 0; i < hoteljsonFile.prediction_scores.length; i++) {
      predictionScore.push(hoteljsonFile.prediction_scores[i]);
      predictionLabels.push(hoteljsonFile.prediction_labels[i]);
      tweetId.push(hoteljsonFile.tweet_id[i]);
    }

    
    let response = data(predictionScore, predictionLabels, tweetId);

   
    let message = "";
    if (response.noPositive > response.noNegative && response.noPositive > response.noNeutral)
      message = "The sentiment is overwhelmingly positive!";
    else if (response.noNegative > response.noPositive && response.noNegative > response.noNeutral) 
      message = "The sentiment is predominantly negative.";
    else 
      message = "The sentiment is balanced and neutral.";

    
    res.status(200).json({ ...response, message: message });
  } catch (e) {
    console.error("Error processing data:", e);
    res.status(500).send("Internal error");
  }
});

module.exports = router;
