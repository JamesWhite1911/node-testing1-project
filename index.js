function trimProperties(obj) {
  let newObject = {}
  for (const [key, value] of Object.entries(obj)) {
    newObject = {
      ...newObject,
      [key]: value.trim(),
    }
  }

  return newObject
}

function trimPropertiesMutation(obj) {
  for (const [key, value] of Object.entries(obj)) {
    obj[key] = value.trim()
  }
  return obj
}

function findLargestInteger(integers) {
  let highest = null
  let index = 0
  integers.forEach(number => {
    if (number > index) {
      highest = number
    }
    index = number
  })
  return highest
}

class Counter {
  constructor(initialNumber) {
    this.number = initialNumber
  }

  countDown() {
    let currentNumber = this.number
    if (this.number > 0) {
      this.number = this.number - 1
    }
    return currentNumber
  }
}

class Seasons {
  constructor() {
    this.season = ""
    this.index = 1
  }

  next() {
    if (this.index === 1) {
      this.season = "summer"
    } else if (this.index === 2) {
      this.season = "fall"
    } else if (this.index === 3) {
      this.season = "winter"
    } else if (this.index === 4) {
      this.season = "spring"
      this.index = 0
    }
    this.index = this.index + 1
    return this.season
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.model = name
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.mpg = mpg
    this.fuel = 20
  }

  drive(distance) {
    while (distance > 0 && this.fuel > 0) { //if we have distance and fuel
      this.odometer += 1 //add 1 to odometer
      this.fuel -= 1 / this.mpg //subtract 1/30 th per distance
      distance -= 1 //remove 1 distance
    }
  }
  refuel(gallons) {
    if (gallons > 20) {
      gallons = 20
    }
    while (gallons > 0 && this.fuel < 20) {
      this.fuel += 1
      gallons -= 1
    }
  }
}

function isEvenNumberAsync(number) {
  //let's use modulo
  //((a % n ) + n ) % n
  if (isNaN(number) && number != "test") {
    return "number must be a number"
  }
  if(typeof(number) === "number") {
    let checkEven = ((number % 2 ) + 2) % 2
    if (checkEven === 0) {
      return true
    } else {
      return false
    }
  } else {
    return "number must be a number"
  }
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
