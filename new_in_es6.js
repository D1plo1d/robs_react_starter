// New in ES6 (Pre-reqs)
// ------------------------


// Classes!
// ------------------------

// Old
var Point = function(x, y) {
  this.x = x
  this.y = y
  return this
}
Point.prototype.move = function(x, y) {
  this.x = x
  this.y = y
}

// New
class Point {

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  move(x, y) {
    this.x = x
    this.y = y
  }
}

// Imports!
// ------------------------

// Old
$

// New
import $ from "jquery"


// And a whole lot more!
// (seriously, this could be a much longer talk!)
