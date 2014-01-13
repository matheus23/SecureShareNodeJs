exports.includeFiles = includeFiles
exports.stdBodyHeader = stdBodyHeader

var ht = require("./html.js")

var nl = "\n"

// "files" param example:
// files = {
//   jsFiles: ["myJsCode.js", "anotherJsFile.js"],
//   cssFiles: ["style.css", "blah.css"]
// }
function includeFiles(files) {
  var jsIncludes = files.jsFiles.map(function(file) { return ht.tagA("script", { type:"text/javascript", src:file }, "") }).join(nl)
  var cssIncludes = files.cssFiles.map(function(file) { return ht.sTagA("link", { type:"text/css", rel:"stylesheet", href:file }) }).join(nl)
  
  return (cssIncludes + nl + jsIncludes)
}

function stdBodyHeader(bannerText) {
  return (
    ht.tagA("div", { id:"header" },
      ht.tag("i", 
        ht.tagA("h1", { id:"banner" }, bannerText))))
}