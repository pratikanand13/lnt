const express = require("express");
const router = new express.Router();
const calculation = require("../utils/calc.js");

router.post("/proj1/pred_Prod", async function (req, res) {
  // console.log(req.body)
  const productivity =  calculation.calc(req.body);
  
  res.status(201).send(productivity);
});

module.exports = router;
