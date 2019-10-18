var firstName = "Mike"

// What happens when we have a nested object?
var person = {
   firstName: "Colt",
   sayHi: function () {
      return "Hi " + this.firstName
   }, determineContext: function () {
      return this === person
   },
   dog: {
      firstName: "Elie",
      sayHello: function () {
         return "Hello " + this.firstName
      },
      determineContext: function () {
         return this === person
      }
   }
}


// These two objects can be refactored so that both make use of the colt.saHi() function
// var colt = {
//    firstName: "Colt",
//    sayHi: ()=>{
//       return "Hi " + this.firstName
//    }
// }

// var elie = {
//    firstName: "Elie",
//    sayHi: ()=>{
//       return "Hi " + this.firstName
//    }
// }

// Refactored
var colt = {
   firstName: "Colt",
   sayHi: function () {
      return "Hi " + this.firstName
   }
}

var elie = {
   firstName: "Elie",
}

console.log(colt.sayHi())
console.log(colt.sayHi.call(elie))