exports.page = page

var ht = require("./html.js")
var u = require("./util.js")
var t = require("./table.js")

var nl = "\n"

function page(req, res) {
  var reqFiles = {
    jsFiles: [],
    cssFiles: ["style.css"]
  }
  ht.header(req, res)
  var html =
    ht.xhtml([
      ht.tag("head", u.includeFiles(reqFiles)),
      ht.tag("body", [
        u.stdBodyHeader("SecureShare"),
        ht.tag("center", genTable())
      ])
    ])
  res.end(html)
}

function genTable() {
  var form = genForm()
  var table = new t.Table({})
  table.row()
  table.add(ht.tag("h1", "Sign Up"))
  table.row()
  table.add(form)
  return table.generate()
}

function genForm() {
  var table = new t.Table()
  table.row()
  table.add("Name:").param("class", "rightAlign")
  table.add(ht.sTagA("input", { type:"text", name:"name", required:"" }))
  table.row()
  table.add("Password:").param("class", "rightAlign")
  table.add(ht.sTagA("input", { type:"password", name:"password", required:"" }))
  table.row()
  table.add("Retype Password:").param("class", "rightAlign")
  table.add(ht.sTagA("input", { type:"password", name:"passwordRetype", required:"" }))
  table.row()
  table.add("Email:").param("class", "rightAlign")
  table.add(ht.sTagA("input", { type:"email", name:"email", required:"" }))
  table.row()
  table.add("")
  table.add(
    ht.sTagA("input", { type:"submit", value:"Sign Up", id:"button" }) + nl +
    ht.sTagA("input", { type:"reset", value:"Reset Form" }))
  return ht.tagA("form", { method:"post", id:"formular" }, table.generate())
}