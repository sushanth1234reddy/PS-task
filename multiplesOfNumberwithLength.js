// Create a function that takes two numbers as arguments (num, length) and
// returns an array of multiples of num until the array length reaches length.
// Examples :

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
function multiples(num,len){
    let arr=[];
    while(arr.length<len){
        if(arr.length==0){
            arr.push(num);
        }
        else{
        let a=num+arr[arr.length-1];
        arr.push(a);
        }
    }
    console.log(arr);
}
multiples(7,5);
multiples(12,10);
multiples(17,6);