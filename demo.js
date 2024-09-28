class MathHelper{
    
     addNumbers(a,b){
        return `The sum of ${a} and ${b} is ${a+b}`;
    }
}
let result = new MathHelper();
console.log(result.addNumbers(1,4));
