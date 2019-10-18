function Vehicle(make, model, year) {
   this.make = make
   this.model = model
   this.year = year
}

Vehicle.prototype.isRunning = false

Vehicle.prototype.turnOn = function () {
   this.isRunning = true
}

Vehicle.prototype.turnOff = function () {
   this.isRunning = false
}

Vehicle.prototype.honk = function () {
   if (this.isRunning === true) {
      console.log("beep")
   }
}

Audi = new Vehicle("Audi", "Q5", "2014")

