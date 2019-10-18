function House(bedrooms, bathrooms, numSqft){
   this.bedrooms = bedrooms
   this.bathrooms = bathrooms
   this.numSqft = numSqft
}

var myHouse = new House(4, 3, 3000)

function Dog(name, age){
   this.name = name
   this.age = age
   this.bark = function(){
      console.log(this.name + " just barked")
   }
}

var Mona = new Dog("Mona", "13")
var Hank = new Dog("Hank", "10")