// 1. Write a function that converts an object into an array, where each element
// represents a key-value pair in the form of an array.
// Examples :

// toArray({ a: 1, b: 2 }) ➞ [[&quot;a&quot;, 1], [&quot;b&quot;, 2]]

let input={"a":1,"b":2};
let out=[];

for(i in input){
    let inn=[];
    inn.push(i);
    inn.push(input[i]);
    
    out.push(inn);
    
}
console.log(out);
