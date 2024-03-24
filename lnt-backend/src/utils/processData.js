const data = function(predictionScore, predictionLabels, tweetId) {
    var neutral = [];
    var positive = [];
    var negative = [];
    var noNeutral = 0;
    var noPositive = 0;
    var noNegative = 0;
    
    for (let i = 0; i < predictionLabels.length; i++) {
        
      const tweetURL = `https://twitter.com/user/status/${tweetId[i]}`;
      const entry = {
        tweetId: tweetId[i],
        predictionScore: predictionScore[i],
        tweetURL,
      };
      if (predictionLabels[i] === "Neutral") {
        neutral.push(entry);
        noNeutral++;
      }
      if (predictionLabels[i] === "Positive") {
        positive.push(entry);
        noPositive++;
      }
      if (predictionLabels[i] === "Negative") {
        negative.push(entry);
        noNegative++;
      }
    }
  
    var total = noNegative + noNeutral + noPositive;
    var percNeutral = (noNeutral / total) * 100;
    var percNegative = (noNegative / total) * 100;
    var percPositive = (noPositive / total) * 100;
    
    neutral.sort((a, b) => b.predictionScore - a.predictionScore);
    positive.sort((a, b) => b.predictionScore - a.predictionScore);
    negative.sort((a, b) => b.predictionScore - a.predictionScore);
  
    const topNeutral = neutral.slice(0, 5);
    const topPositive = positive.slice(0, 5);
    const topNegative = negative.slice(0, 5);
  
    return {
      topNeutral,
      topPositive,
      topNegative,
      noNegative,
      noNeutral,
      noPositive,
      percNegative,
      percNeutral,
      percPositive,
      tweetId //Added by me - XOLO
    };
  };
  
  module.exports = data;
  