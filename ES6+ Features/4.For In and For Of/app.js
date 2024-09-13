const person = {
    name: "Serhat Geçgin",
    age: 23,
    salary: 80000,
};

const langs = ["Python", "Java", "C++", "JavaScript"];

const name = "Serhat";


//For In
/*
for(let prop in person) {
    console.log(prop,person[prop]);
}
*/

/*
for (let index in langs) {
    console.log(index,langs[index]);
}
*/

/*
for (let index in name) {
    console.log(index,name[index]);
}
*/

// Object

/*
for (let value of person) {
    console.log(value);
}*/

/*
for (let value of langs) {
    console.log(value);
}*/

//string

for (let character of name) {
    console.log(character);
}


