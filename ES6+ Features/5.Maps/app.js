// Maps - Key - Value

// let myMap = new Map(); /// creating Map

// console.log(myMap);

// const key1 = "Serhat";
// const key2 = {a:10, b:20};
// const key3 = () => 2;

// myMap.set(key1, "String Value");
// myMap.set(key2, "Object Literal Value");
// myMap.set(key3, "Function value");

// Get
/*
console.log(myMap.get(key1)); //String Value
console.log(myMap.get(key2)); //Object Literal Value
console.log(myMap.get(key3)); //Function value

console.log(myMap);*/

// Map Size

// console.log(myMap.size); 



// For Each

/*
cities.forEach(function(value,key) {
    console.log(key,value);
});
*/

// For Of 

/*
for (let [key,value] of cities) { // destructing
    console.log(key,value);
}
*/

//Map keys
/*
for (let key of cities.keys()) {
    console.log(key);
}*/

// Map values
/*
for (let value of cities.values()) {
    console.log(value);
}*/


//creating Map from arrays
/*
const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);

console.log(lastMap);
*/

// Creating array from map


const cities = new Map();

cities.set("İstanbul",5);
cities.set("kocaeli",4);
cities.set("izmir",2);
    
const array = Array.from(cities);
console.log(array);








