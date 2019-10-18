// strict mode does not make a difference here
var person = {
   firstName: "Elie",
   sayHi: () => {
      return "Hi " + this.firstName
   }, determineContext: () => {
      return this === person
   }
}

// What happens when we have a nested object?
var personA = {
   firstName: "Colt",
   sayHi: function(){
      return "Hi " + this.firstName
   }, determineContext: function(){
      return this === person
   },
   dog: {
      sayHello: () =>{
         return "Hello " + this.firstName
      },
      determineContext: () => {
         return this === person
      }
   }
}