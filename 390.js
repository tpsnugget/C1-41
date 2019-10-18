// firstName here is not defined as the setTimeout() function is a window function
// and therefore the this operator is the window object
var colt = {
   firstName: "Colt",
   sayHi: function() {
      setTimeout(function(){
         console.log("Hi " + this.firstName)
      }, 1000);
   }
}

// It is now fixed
var mike = {
   firstName: "Mike",
   sayHi: function() {
      setTimeout(function(){
         console.log("Hi " + this.firstName)
      }.call(this), 1000);
   }
}