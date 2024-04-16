const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

let filed = {};

const dataTweets = function (req, res, next) {
  if (req.body.prize == 1) {
    try {
      const notebookPath1 = path.join(__dirname, "models", "Tweets-Scraping-software.ipynb");
      const notebookPath2 = path.join(__dirname, "models", "L&T_Sentiment_Analysis_Final.ipynb");
      const dataPath = path.join(__dirname, "models", "data.json");
      const executedNotebookPath1 = path.join(__dirname, "models", "Tweets-Scraping-software.ipynb_executed.ipynb");
      const executedNotebookPath2 = path.join(__dirname, "models", "L&T_Sentiment_Analysis_Final.ipynb_executed.ipynb");

      // Delete previously executed notebooks
      if (fs.existsSync(executedNotebookPath1)) {
        fs.unlinkSync(executedNotebookPath1);
        console.log("Executed notebook deleted successfully:", executedNotebookPath1);
      }

      if (fs.existsSync(executedNotebookPath2)) {
        fs.unlinkSync(executedNotebookPath2);
        console.log("Executed notebook deleted successfully:", executedNotebookPath2);
      }

      // Check if data.json exists or if 'filed' variable is populated
      if (fs.existsSync(dataPath) || Object.keys(filed).length !== 0) {
        try {
          if (fs.existsSync(dataPath)) {
            let hoteljsonFile = require(dataPath);
            filed = JSON.parse(replaceQuotes(hoteljsonFile));
            req.filed = filed;
          } else {
            req.filed = filed;
          }
          next();
        } catch (error) {
          console.error("Error reading data.json:", error);
        }
      }

      // Run Jupyter notebooks
      execNotebook(notebookPath1);
      execNotebook(notebookPath2);

    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).send("Select defined state");
  }
};

function execNotebook(notebookPath) {
  exec(`jupyter nbconvert --execute "${notebookPath}" --to notebook --output "${notebookPath}_executed.ipynb"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing notebook ${notebookPath}: ${error}`);
    } else {
      console.log(`Notebook ${notebookPath} executed successfully!`);
    }
  });
}

function replaceQuotes(str) {
  return str.replace(/(['"])/g, function (match, p1) {
    return p1 === '"' ? "'" : '"';
  });
}

module.exports = dataTweets;
