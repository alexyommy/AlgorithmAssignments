// Print 1-255
function print1to255() 
{
    var num = 1;
    while (num <= 255) {
        console.log(num);
        num += 1
    }
}

// Print Sum 0-255
function sum0to255()
{
    var sum=0;

    for (var num = 0; num<=255; num++) {
        sum +=num;
        console.log("New Number: ", num, "Sum is: ", sum )
    }
}
// Given an array, find and print its largest element
function printMax(arr) {
    if (arr.length == 0) {
        console.log("Empty array, no max value.");
        return;
    }

    max = arr[0];
    
    for (i=0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("The max of the array is: ", max)
}
// printMax([50,75,84,215,1000,25,4,5,])

//Create an array with all the odd integers between 1 and 255 (inclusive)
function oddArray1to255() 
{
    var oddArr = []
    for(var x=1; x<=255; x+= 2){
        oddArr.push(x);
    }
    console.log(oddArr);
}
// oddArray1to255()

//Given an array and a value Y, count and print the number of array values greater than Y
function greaterThanY(arr, Y){
    var numGreater = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>Y){
            numGreater++;
        }
    }
    console.log("%d values greater than %d", numGreater, Y);
}
// greaterThanY([3,4,56,7,8,9,7,54,5],20) 

//Given an array, print the max, min, and average values for that array.
function maxMinAverage(arr){
    if (arr.length == 0) {
        console.log("Null array, no max/min/average");
        return;
    }

    var sum=arr[0];
    var max=arr[0];
    var min=arr[0];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            max = arr[i];
        }
        sum += arr[i]
    }
    console.log("Max: ", max, "Min: ", min);
    console.log("Average: ", sum/arr.length);
}
// maxMinAverage([1,2,3,4]);

//Swap String for Negative Values
function negativeSwap(arr){
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}
// console.log(negativeSwap([1,2,-1,-5,7,-3,10]));

//Print Odds 1-255
function odds1to255()
{
    var num=1
    while (num <=255) {
        console.log(num);
        num+=2;
    }
}
// odds1to255();

//Iterate and Print Array
function iterateArray(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log("array[", i, "] is equal to", arr[i]);
    }
}
// iterateArray([1,2,3,4])

//Get and Print Average
function printAverage(arr) {
    if (arr.length == 0) {
        console.log("Null array, no max/min/average");
        return;
    }

    var sum = arr[0];
    for(var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Average of array is: ", sum/arr.length)
}
// printAverage([1,2,3,4,5])

//Square the Values
function squareValues(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
// console.log(squareValues([1,2,3,4,5]));

// Zero Out Negative Vlaues
function zeroOut(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
// console.log(zeroOut([-1,2,5,-4,5,-8,2]))

//Shift Array Values
function shiftValues(arr) {
    for(var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]
    }
    arr[arr.length] = 0;
    return arr;
}
// console.log(shiftValues([2,4,6,8,10]))
