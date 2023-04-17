"use strict";

window.addEventListener("load", initApp);


// ========== Global Variables ========== //

const names = [
    "Peter",
    "Magdalena",
    "Frederikke",
    "Oskar",
    "Rasmus",
    "Sofie",
    "Anders",
    "Birgitte"
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
    {
        name: "Magdalena Maria Otap",
        mail: "mago@kea.dk",
        phone: "77880000",
        title: "Lecturer",
        age: 36,
        image: "https://share.cederdorff.com/images/mago.jpg"
    },
    {
        name: "Birgitte Jensen",
        mail: "birgitte@mail.dk",
        phone: "77226010",
        title: "Senior Lecturer",
        age: 49,
        image: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp"
    },
    {
        name: "Dan Nielsen",
        mail: "dan@mail.dk",
        phone: "77226027",
        title: "Lecturer",
        age: 36,
        image: "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp"
    },
    {
        name: "Rasmus Cederdorff",
        mail: "race@kea.dk",
        phone: "72286318",
        title: "Senior Lecturer",
        age: 33,
        image: "https://share.cederdorff.com/images/race.jpg"
    },
    {
        name: "Martin Hansen",
        mail: "martin@mail.dk",
        phone: "77886620",
        title: "Lecturer",
        age: 34,
        image: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp"
    },
    {
        name: "Peter Lind",
        mail: "petl@kea.dk",
        phone: "77886699",
        title: "Senior Lecturer",
        age: 46,
        image: "https://share.cederdorff.com/images/petl.jpg"
    }
];

const teacher = {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg"
};

// ========== initApp ========== //

function initApp() {
    console.log("initApp: app.js is running 🎉");
    loopThroughNames();
    loopThroughYears();
    loopThroughYTeachers();
    displayData();
    forTeachers();
    loopThroughFiveFirstYears();
    loopThroughFiveLastYears();
    logNumbers(); 
}

// ========== forEach ========== //
function loopThroughNames() {
  names.forEach(function(name, index) {
    logName(name, index);
  });
}

function logName(name, index) {
    if (index === 0) {
    console.log("First name in the array:", name);
    }
    if(index === names.length -1){
        console.log("First name in the array:", name);
    }
    if(index % 2 === 1) {
        console.log("Every second name in the array:", name);
    }
}

function loopThroughYears(){
    years.forEach(function(year, index) {
        logYear(year, index);
    });
}

function logYear(year, index) {
    if (index === 0) {
        console.log("First year in the array:", year);
    }
    if (index === year.length -1){
        console.log("First year in the array:", year);
    }
    if (index % 2 === 1) {
        console.log("Every second year in the array:", year);
    }
}

function loopThroughYTeachers() {
    teachers.forEach(function(teacher, index){
        logTeacher(teacher, index);
    });
}

function logTeacher(teacher, index) {
    if (index === 0) {
        console.log("First teacher in the array:", teacher);
    }
    if (index === teacher.length -1){
        console.log("First teacher in the array:", teacher);
    }
    if (index % 2 === 1) {
        console.log("Every second teacher in the array:", teacher);
    }
}
// ========== for loop ========== //

function forTeachers() {
    for (let index = 0; index < years.length; index++) {
        const year = years[index];
        console.log(`Year ${index}: ${year}`);

        if(index === years.length -1){
            console.log("This is the last year in the list:", year);
        }

        if (years[index]=== 2023) {
            console.log("Current year:", year);
        }
    }
}

function loopThroughFiveFirstYears() {
    for (let index = 0; index < 5; index++ ) {
        console.log(years[index]);
    }
}

function loopThroughFiveLastYears() {
    for (let index = years.length -5; index < years.length; index++) {
        console.log(years[index]);
    }
}

function logNumbers() {
  // Fra 0 til 9
  let numbers0Til9 = '';
  for (let index = 0; index < 10; index++) {
    numbers0Til9 += index + ' ';
  }
  console.log('Fra 0 til 9:', numbers0Til9);

    // Fra 1 til 10
    let numbers1Til10 = '';
    for (let index = 1; index <= 10; index++) {
        numbers1Til10 += index + ' ';
    }
    console.log('Fra 1 til 10:', numbers1Til10);

    // Fra 10 til 0
    let numbers10Til0 = '';
    for (let index = 10; index >= 0; index--) {
        if (index === 0) {
            numbers10Til0 += 'liftoff';
        } else {
            numbers10Til0 += index + ' ';
        }
    }
    console.log('10 til 0 liftoff:', numbers10Til0);


}

// ========== for of loop ========== //

// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
console.log(names);
console.log(years);
console.log(teacher);
console.log(teachers);

// ========== DOM Manipulation showing in a table the data ========== //

// Function that displays the data in the table 
function displayData() {
    const tableBody = document.getElementById("data");
    // Loops through each teacher object in the teachers array
    teachers.forEach(function(teacher, index){
        const row = document.createElement("tr");
        const nameCol = document.createElement("td");
        const yearCol = document.createElement("td");
        const teacherCol = document.createElement("td");

        // Sets text content for name, year, and teacher col
        nameCol.textContent = names[index];
        yearCol.textContent = years[index];
        teacherCol.textContent = teacher.name;

        // Appends the name, year and teacher col to row element
        row.appendChild(nameCol);
        row.appendChild(yearCol);
        row.appendChild(teacherCol);

        // Appends row element to tbody element
        tableBody.appendChild(row);
    });
}