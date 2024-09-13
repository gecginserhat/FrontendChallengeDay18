
// let number1,number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];


// Destructing

// [number1,number2] = arr;

// const [number1,number2] = arr;

// console.log(number1, number2);


// Object Destructing
/*
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number1, c, e} = numbers;

console.log(number1, c, e);
*/

//Function Destructing
/*
const getLangs = () => ["Python", "JavaScript", "C++"];

const [lang1, lang2, lang3] = getLangs();
console.log(lang1, lang2, lang3);
*/

const person = {
    name: "Serhat Geçgin",
    year: 2001,
    salary: 80000,
    showInfos: () => console.log("information is displayed")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgilerigoster} = person;

console.log(isim, yil, maas);

bilgilerigoster();











