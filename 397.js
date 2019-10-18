// Constructor function
function Person(name){
   this.name = name
}

// Objects created from Person constructor
var elie = new Person("Elie")
var colt = new Person("Colt")

elie.__proto__ === Person.prototype // true
colt.__proto__ === Person.prototype // true

// The Person.prototype object also has a property called constructor which
// points back to the function
Person.prototype.constructor === Person // true

Person.prototype.isInstructor = true

elie.isInstructor // true
colt.isInstructor // true