var express = require("express");
var app = express();

var signup = require("./signup.js")

app.use(express.static(__dirname + '/public'))

webpages({
  "/signup.js": signup.page
})

function webpages(pages) {
  for (page in pages) {
    app.get(page, pages[page])
  }
}

app.listen(3000)