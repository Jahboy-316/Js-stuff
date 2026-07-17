
const car = {
    brand: "Ferrari",
    model: "Purosangue",
    year: 2026,
    owner:{name: "Jason", city:"Jos"},
    features:["V12 Engine", "All-wheel Drive", "715 Horse power", "Premium Sound System"]

}

// turn to Json string with 2 space indentation
const myCar = JSON.stringify(car, null, 2)

console.log(myCar)

const convertedCar = JSON.parse(myCar)

console.log(convertedCar)

console.log(`My name is ${convertedCar.owner.name}, and I drive a car that has ${convertedCar.features[1]}`)

if(car.brand === convertedCar.brand){
    console.log("They match oo")
}
else{console.log("They don't match")}