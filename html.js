exports.xhtml = xhtml
exports.header = header
exports.tag = tag
exports.sTagA = sTagA
exports.tagA = tagA

function header(req, res) {
  res.setHeader("Content-Type", "text/html")
  res.setHeader("charset", "utf-8")
}

var indentation = 2
var indent = true

function spaces(num) {
  var spaces = ""
  for (var i = 0; i < num; i++) {
    spaces += " "
  }
  return spaces
}

function xhtml(inner) {
  return (
    "<?xml version=\"1.0\" ?>\n" +
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "    \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n" +
    indented(((typeof inner == "object") ? inner.join("\n") : inner)) + "\n" +
    "</html>")
}

function sTagA(name, attrs) {
  return tagBegin(name, attrs, true)
}

function tag(name, inner) {
  return tagA(name, {}, inner)
}

function tagA(name, attrs, inner) {
  // Argument stuff:
  inner = (typeof inner == "object" ? inner.join("\n") : inner)
  
  // Actual function:
  return (
    tagBegin(name, attrs, false) + "\n" +
    indented(inner) +
    "\n</" + name + ">")
}

function indented(text) {
  if (typeof text != "string") return ""
  if (indent) {
    var s = spaces(indentation)
    return s + text.replace(/\n/g, "\n" + s)
  } else {
    return text
  }
}

function tagBegin(name, attrs, singleTag) {
  var text = "<" + name
  for (attrName in attrs) {
    text += " " + attrName + "=\"" + attrs[attrName] + "\""
  }
  text += (singleTag ? "/" : "") + ">"
  return text
}