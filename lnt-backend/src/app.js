const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const proj1router = require("./routers/proj1");
const proj2router = require("./routers/proj2");

app.use(proj1router);
app.use(proj2router);


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
