const utils = require('./index')

//values for the first two tests
const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
const expectedValue = { foo: 'foo', bar: 'bar', baz: 'baz' }
let actualValue = ""

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    actualValue = utils.trimProperties(input)
    expect(actualValue).toEqual(expectedValue) //our values match the expected values
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    expect(input).not.toEqual(expectedValue) // input value does not equal expected value, given our previous tests, this implies that our original object has not changed
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    actualValue = utils.trimPropertiesMutation(input)
    expect(input).toEqual(expectedValue) //our object mutated
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    expect(input).toBe(actualValue) //we got the same object back
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  const numbers = [1, 2, 3, 4, 5]
  it('[5] returns the largest number in an array of numbers', () => {
    const largestNumber = utils.findLargestInteger(numbers)
    expect(largestNumber).toBe(5)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter = null
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.number).toBe(3)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.number).toBe(2)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown() //2
    counter.countDown() //1
    counter.countDown() //0
    counter.countDown() //0
    counter.countDown() //0
    expect(counter.number).toBe(0) //it hit 0 and did not pass 0
  })
})


describe('[Exercise 5] Seasons', () => {
  let seasons = null
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    seasons.next()
    expect(seasons.season).toEqual("summer")
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual("fall")
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual("winter")
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual("spring")
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toEqual("summer")
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    let calls = 40
    while (calls > 0) {
      seasons.next()
      calls = calls - 1
    }
    expect(seasons.season).toEqual("spring")
  })
})


describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) //model, tank size, mpg
  })
  it('[15] driving the car returns the updated odometer', () => {
    focus.drive(300)
    expect(focus.odometer).toBe(300)
  })
  it('[16] driving the car uses gas', () => {
    focus.drive(30)
    expect(Math.round(focus.fuel)).toBe(19)
  })
  it('[17] refueling allows to keep driving', () => {
    focus.drive(999)
    focus.refuel(10)
    focus.drive(999)
    expect(focus.odometer).toBe(900)
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(30)
    expect(focus.fuel).toBe(20)
  })
})


describe('[Exercise 7] isEvenNumberAsync', async () => {
  let check = async (num) => await utils.isEvenNumberAsync(num)
  it('[19] resolves true if passed an even number', async () => {
    expect(await check(2)).toBe(true)
    expect(await check(4)).toBe(true)
    expect(await check(6)).toBe(true)
    expect(await check(8)).toBe(true)
  })
  it('[20] resolves false if passed an odd number', async () => {
    expect(await check(3)).toBe(false)
    expect(await check(5)).toBe(false)
    expect(await check(7)).toBe(false)
    expect(await check(9)).toBe(false)
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    expect(await check("test")).toBe("number must be a number")
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    expect(await check(NaN)).toBe("number must be a number")
  })
})
