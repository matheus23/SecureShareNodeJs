exports.Table = Table

var ht = require("./html.js")

function Table(additionalParams) {
  var that = this
  this.content = [] // of type: [Row], where row has: cells = [Cell]
  this.additionalParams = additionalParams
  this.stdRowParams = {}
  this.stdCellParams = {}
  
  this.row = function() {
    var row = new Row(that.stdRowParams)
    that.content.push(row)
    return row
  }
  
  this.add = function(cellContent) {
    var cell = new Cell(that.stdCellParams, cellContent)
    that.content[that.content.length-1].add(cell)
    return cell
  }
  
  this.generate = function() {
    return ht.tagA("table", that.additionalParams, that.content.map(function(row) { return row.generate() }).join(""))
  }
}

function Row(additionalParams) {
  var that = this
  this.cells = []
  this.additionalParams = additionalParams
  
  this.param = function(paramName, paramVal) {
    that.additionalParams[paramName] = paramVal
    return that
  }
  
  this.rowspan = function(num) {
    that.additionalParams["rowspan"] = num
    return that
  }
  
  this.add = function(cell) {
    that.cells.push(cell)
    return cell
  }
  
  this.generate = function() {
    return ht.tagA("tr", that.additionalParams, that.cells.map(function(cell) { return cell.generate() }).join(""))
  }
}

function Cell(additionalParams, content) {
  var that = this
  this.additionalParams = additionalParams
  this.content = content
  
  this.param = function(paramName, paramVal) {
    that.additionalParams[paramName] = paramVal
    return that
  }
  
  this.colspan = function(num) {
    that.additionalParams["colspan"] = num
    return that
  }
  
  this.generate = function() {
    return ht.tagA("td", that.additionalParams, content)
  }
}