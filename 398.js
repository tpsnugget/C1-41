// function Person(name){
//    this.name = name
//    this.sayHi = function(){
//       return "Hi " + this.name
//    }
// }

// elie = new Person("Elie")
// elie.sayHi()

// now this code works, but it is inefficient
// every time we make an object using the new keyword we have to redefind this function
// but its the same for everyone! Let's put it on the prototype instead!

function Person(name){
   this.name = name
}

Person.prototype.sayHi = function(){
   return "Hi " + this.name
}

elie = new Person("Elie")