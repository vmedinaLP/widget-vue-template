const concat = require("concat-files");
const fs = require("fs");
const path = require("path");

const files = [
  path.resolve(__dirname, "./dist/js/app.js"),
  path.resolve(__dirname, "./dist/js/chunk-vendors.js"),
];

concat(
  files,
  path.resolve(__dirname, "./dist/js/widgetVUE.js"),
  function (err) {
    if (files) {
      files.forEach((file) => fs.unlinkSync(file));
    }
    if (err) throw err;
    console.log("done");
  }
);
