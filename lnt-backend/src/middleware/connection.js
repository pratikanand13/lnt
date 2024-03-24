const { exec } = require("child_process");
const path = require("path");

const dataTweets = function (req, res, next) {
  if (req.body.prize == 1) {
    try {
      const notebookPath1 = path.join(
        __dirname,
        "models",
        "Tweets-Scraping-software.ipynb"
      );
      const notebookPath2 = path.join(
        __dirname,
        "models",
        "L&T_Sentiment_Analysis_Final.ipynb"
      );

  

      executeNotebook(notebookPath1);
      executeNotebook(notebookPath2);

      const hoteljsonFile = require(path.join(
        __dirname,
        "models",
        "data.json"
      ));
      function replaceQuotes(str) {
     
        return str.replace(/(['"])/g, function(match, p1) {
           
            return p1 === '"' ? "'" : '"';
        });
    }
      
      req.hoteljsonFile = JSON.parse(replaceQuotes(hoteljsonFile));
      next();
    } catch (error) {
      console.error("Error executing notebooks:", error);
      res
        .status(500)
        .json({ error: "An error occurred while executing the notebooks" });
    }
  } else res.status(405).send("select defined state");
};


function executeNotebook(notebookPath) {
  exec(
    `jupyter nbconvert --execute "${notebookPath}" --to notebook --output "${notebookPath}_executed.ipynb"`,
    (error, stdout, stderr) => {
      
    }
  );
}

module.exports = dataTweets;
