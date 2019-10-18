function Car(make, model, year){
   this.make = make
   this.model = model
   this.year = year
   this.numWheels = 4
}

// function Motorcycle(make, model, year){
//    this.make = make
//    this.model = model
//    this.year = year
//    this.numWheels = 2
// }

// Change the Motorcycle constructor to be:
function Motorcycle1(make, model, year){
   Car.call(this, make, model, year)
   this.numWheels = 2
}

// Change the Motorcycle constructor to be:
function Motorcycle2(make, model, year){
   Car.apply(this, [make, model, year])
   this.numWheels = 2
}

// Change the Motorcycle constructor to be:
function Motorcycle3(make, model, year){
   Car.apply(this, arguments)
   console.log(arguments[0])
   this.numWheels = 2
}

var HD = new Motorcycle1("Harley Davidson", "Road King Special", "2018")
var BMW = new Motorcycle2("BMW", "K1200GT", "2012")
var Honda = new Motorcycle3("Honda", "Goldwing", "2020")