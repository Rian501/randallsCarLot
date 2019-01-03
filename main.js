const outputElement = document.querySelector("#app")

//STEP ONE - JUST THE VALUES
// Iterate the array of cars with forEach(). Individual objects stored in `car`.
allCars.forEach(car => {
  
  console.log('object values of car!', Object.values(car));
  // Iterate all of the values of the current car using Object.values() which provides an array of the values in the object given to the method(into the parentheses)
  for (const value of Object.values(car)) {
    outputElement.innerHTML += `<div>${value}</div>`
  }
})


//STEP TWO - KEYS FIRST THEN VALUES

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

//for ... in loops always get variable key even though you can name it whatever you want.
for (let key in firstCar) {
  console.log("key then value", key, firstCar[key])
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

  // Iterate all of the values of the current car
  for (const value of Object.values(car)) {
    outputElement.innerHTML += `<div>${value}</div>`
  }
})


//STEP THREE - PRINT BOTH KEY AND VALUE
//Object.entries(objectHere)gives an array of arrays - mini arrays have key and value, and the big array contains a mini array for each property

outputElement.innerHTML = "<h1>Car List</h1>"

allCars.forEach(car => {
  outputElement.innerHTML += "<hr/>"
  for (const entry of Object.entries(car)) {
    outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
  }
})























// // Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.
// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

// const doctorBill = {
//   officeName: "Office",
//   streetAddress: "500 Baker Street Interstate",
//   doctorName: "Doctor Who Medicine Pepper",
//   patientName: "Emily",
//   visitDate: "1/19/2008",
//   amountBilled: "$.12",
//   dueDate: "1/19/2019"
// }

// // Lightning Exercise 2: Copy the code below and paste it above your object.
// // Use square bracket notation to output the value of those three properties to the console in Chrome.

// console.log(doctorBill[dateVisited], doctorBill[owed], doctorBill[patient]);
// console.log(doctorBill["visitDate"], doctorBill["amountBilled"], doctorBill["patientName"]);
// console.log(doctorBill.visitDate, doctorBill.amountBilled, doctorBill.patientName);


// // Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

// for (const value of Object.values(doctorBill)) {
//   console.log(value);
// }

// Object.values(doctorBill).forEach(value => {
//   console.log(value)
// })

// // Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

// //since Object.keys() gives us an array, that can be used in a for...of
// for (const key of Object.keys(doctorBill)) {
//   console.log(key);
// }

// //for ... in can only be used on an object to loop through it
// for (let key in doctorBill) {
//   console.log(key);
// }

// // Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

// const doctorBillSection = document.createElement("section");

// outputElement.appendChild(doctorBillSection);

// for (const key of Object.keys(doctorBill)) {
//   doctorBillSection.innerHTML += `<span>${key}</span>`
// }




// Lightning Exercise 1: Create an array of objects to represent your favorite dinner items(e.g.meatloaf, spaghetti, fried fish, gumbo).Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favDinnerItems = [
  {
    name: "chicken tacos",
    ethnicity: "Mexican",
    vegetarian: false
  },
  {
    name: "spaghetti",
    vegetarian: true,
    ethnicity: "Italian"
  },
  {
    name: "sweet potatoes",
    vegetarian: true,
    origin: "dirt"
  },
  {
    name: "sushi",
    vegetarian: "pescetarian",
    origin: "the sea",
    ethnicity: "Japanese"
  },
  {
    name: "alpaca burgers",
    vegetarian: false,
    ethnicity: "Peruvian"
  },
  {
    name: "Cricket Crunchies",
    vegetarian: false,
    type: "snack"
  }
]

// Lightning Exercise 2: Output all of the key / value pairs into the DOM inside an <article> element with a class of food.
//each dinner item is an article 

favDinnerItems.forEach(dinnerItem => {
  let stringOfHtml ="<article class='food'>";
  for (const entrySet of Object.entries(dinnerItem)) {
    stringOfHtml += `<div>${entrySet[0]}: ${entrySet[1]}</div>`
  }
  outputElement.innerHTML += stringOfHtml + "</article>"
})

