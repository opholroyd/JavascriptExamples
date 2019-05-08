// let var1 =  "string";
// let var2 = 1;
// let var3 = true;

let arr = ["item", "item1", "item2", "item3"];

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for(let item in arr ) {
//     console.log(item)
// }

for(let item of arr) {
    console.log(item)
}


// const withdrawal = (balance, withdraw) => {
//     console.log("please withdraw an amount")

//     if (balance > withdraw) {
//         console.log(balance - withdraw)
//     } else {
//         console.log("insufficient funds")
//     }
// }

// withdrawal(1000, 100)

//Object Oriented Programming - Classes

// let Rosie = {
//     bunName: "Rosie",
//     bunHops: 0,

//     get name() {
//         return this.bunName;
//     },

//     get hops() {
//         return this.bunHops;
//     },
    
//     increaseHops() {
//         this.bunHops++;
//     }
// }

// class Bunny{
//     constructor(name){
//         this._name = name;
//         this._hops = 0;
//     }
//     get name(){
//         return this._name;
//     }
//     get hops(){
//         return this._hops;
//     }
//     increaseHops(){
//         this._hops++
//     }
// }

// const floppy = new Bunny("floppy");
// console.log(floppy.name)
// floppy.increaseHops();
// console.log(floppy.hops)

// class Bunny extends Animal {
//     constructor(name, lovesCarrots){
//         super(name);
//         this._lovesCarrot = lovesCarrots;
//     }
//     get lovesCarrots(){
//         return this._lovesCarrot;
//     }
// }
// const rosie = new Bunny("Rosie", true)

// class Car{
//     constructor(regnum){
//         this._regnum = regnum;
//         this._price = 0.00;
//         this._hours = 0
//     }
//     get regnum(){
//         return this._regnum
//     }
//     get price(){
//         return this._price
//     }
//     get hours(){
//         return this._hours
//     }
//     increaseHours(){
//         this._hours++
//         this._price += 1.50;
//     }
// }

// const pay = (reg, hr) => {
//     const car = new Car(reg);
//     for (i = 0; i < hr; i++){
//         car.increaseHours();
//     }
//     console.log(`You need to pay £${car.price} for ${car.hours} hours.`)
// }
// pay("YK54 LRF", 7);

// class Staff extends Car{
//     constructor(staffNum, credits){
//         super(regnum)
//         this.staffNumber = staffNum;
//         this.credit = credits;
//     }
//     get checkStaff(){
//         this.staffNumber = staffNum
//         this.credit = "5"
//     }
// }

