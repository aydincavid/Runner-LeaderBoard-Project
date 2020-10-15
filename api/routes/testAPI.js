var express = require("express");
var router = express.Router();

var jsons;
const csvFilePath = __dirname + "/users.csv";
const csv = require("csvtojson/v2");
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {});

(async () => {
  jsons = await csv().fromFile(csvFilePath);
})().catch((err) => {
  console.log(err);
});

router.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(jsons));
});

module.exports = router;
