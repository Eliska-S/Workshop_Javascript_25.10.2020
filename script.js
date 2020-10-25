//excercise 3 - as I have already added a script file in a previous excercise and checked the Developer console in the browser, I'm just logging my name now and going live

console.log("Eliška Šibrová")

// workshop, excercise 2

let age = 2020-1995;
console.log("My age is: " + age + ".");

let ww2 = 1945-1939;
console.log("The WW2 was " + ww2 + " years long.");

let tesla = 420.63*76;
console.log("You need to pay " + tesla + " dolars for 76 Tesla shares.");

let secondsOfDay = 3600*24;
console.log("We have " + secondsOfDay + " seconds in a day.");

let hungarians = 9773000/7819724891;
console.log(hungarians + " percent of world population is Hungarian.");

let bigger = 9597000/78866;
console.log("China is " + bigger + " times bigger than Czech Republic.");

let participants = 657 % 7;
console.log("There will be " + participants + " participants in the smallest channel.")


let names = ['Lukas', 'Jana', 'Honza', 'Pavla'];
console.log(names)

console.log(names[2].length)

//just trying if else (instead of trueOrFalse)

if (names[2].length>5){
    console.log("Control of third name length: True, third name is shorter than 5.")
}else{
    console.log("Control of third name length: False, third name is " + names[2].length + " characters long.")
}

// end of a trial

names.push('Marie');

names[0] = 'Eliska';

console.log(names.length);

//just trying if else once more

if (names.length>4) {
    console.log("Control of array's length: True.")
}else { 
    console.log("Control of array's length: False.")
}

//end of a second trial 

let colors = ["red","blue","green","purple","black"];
console.log(colors);

let trueOrFalse = colors.length > 3;
console.log(trueOrFalse);

let object = {
    colors: colors,
    hasManyColors: trueOrFalse,
};

console.log(object);


//excercise 4 

let numberCount1 = 10;

console.log("First Loop")
for (let i = 0; i < numberCount1; i++) {
    console.log(i)
};

console.log("Second Loop")
for (let i = 1; i <= numberCount1; i++) {
    console.log(i)
};

console.log("Third Loop")
for (i=1; i <= 20; i++) {
 if (i % 2 === 0) {
    console.log(i);
}
};

console.log("Print Function")
function printNumbersTill (i) {
    for (i=1; i <= 20; i++)
    console.log(i);
};

printNumbersTill(1);


console.log("Greeting Function")
let getGreetingTo = myName => {
    console.log("Hello " + myName + " !")
};

getGreetingTo("Eliška")

console.log("Function for loops and arrays n.1")
let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
printValues([0, 3, 6, 7, 9]);

console.log("Function for loops and arrays n.2")
let myNumbers = [0, 3, 6, 7, 9] 
myNumbers.forEach((number) => {
    console.log(number);
});