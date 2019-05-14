// let mike = {
//     likesMarioKart: true,
//     likesNintendo: true
// }

// let dave = {
//     likesMarioKart: true,
//     likesNintendo: false
// }


// function checker() {
//     if (mike.likesMarioKart === true && mike.likesNintendo === true && dave.likesMarioKart && dave.likesNintendo) {
//         console.log("Let's play next week")
//     } else {
//         console.log("You're missing out")
//     }
// 

// Cafe Object
// const cafe = {
//     name: "WhiteSheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: false,
//     drinks: [
//         cappicino,
//         americano,
//         latte,
//         tea
//     ]
// }

// Person Object
// let person = {
//     name: "John",
//     age: 43,
//     hairColor: "Brown",
//     eyeColor: "Green"
// }

// const coffeeshop = {
//     name: "Stubucks",
//     seatingCapacity: 5000,
//     hasSpecialOffers: false,
//     coffees: ["Americano", "Espresso", "Flat White", "Something for tea drinkers…"],
//     breakfastOffer: "free croissant with coffee",
//     lunchOffer: "free coffee with surprisingly priced sandwich",
//     none: "Sod off" ,
//     openStubucks (){
//     if (this.hasSpecialOffers) {
//         return "open up and let the world know it’s time for a special offer"
//     }
//     }
// }

// console.log(coffeeshop.openStubucks())

// let rabbit = {
//     name:" Sherlock",
//     colour: "black and white",
//     ears: "uppy",
//     bunHop(){
//         return `${this.name} is hopping`
//     },
//     bunChew(){
//         return `${this.name} is chewing`
//     }
// }

// console.log(rabbit.bunChew())

let obj = {
    key: "value",
    key2: "value2"
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// let arr = [var1, var2]

// let objArr = {
//     arrKey: [var1, var2, var3],
//     key: value
// }

// let arrObjs = [
//     {
//         key: value,
//         key1: value1
//     },
//     {
//         key2: value2,
//         key3: value3
//     }
// ]