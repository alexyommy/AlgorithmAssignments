// Given an array and an additional value, insert this value at the beginning of the array. 
function pushFront(arr, value) {
    for(let i = arr.length; i > 0; i--)
        arr[i] = arr[i-1]

    arr[0] = value;
    return arr;
}
// console.log(pushFront([1,3,5], 2));

//Given an array, remove and return the value at the beginning at the beginning of the array. 
function popFront(arr) {
    for(let i=0; i < arr.length; i++)
        arr[i] = arr[i+1]
    arr.length = arr.length-1
    return arr;
}
// console.log(popFront([2,5,7,9]));

//Given an array, index, and additional value, insert the value into array at given index. 
function insertAt(arr, index, value) {
    for(let i=arr.length; i > index; i--)
        arr[i]=arr[i-1]
    arr[index] = value
    return arr;
}
// console.log(insertAt([1,4,5,8],2,24));

//Give an array at an index into array, remove and return the array value at that index.
function removeAt(arr, index) {
    toRemove = arr[index];
    for(let i=index; i < arr.length-1; i++) {
        arr[i] + arr[i+1]
    }
    arr.length = arr.length - 1
    return toRemove;
}
// console.log(removeAt([1,5,7,9], 2));

//Swap positions of successive pairs of values of given array. If the length is off, do not change the final element. For [1,2,3,4] return [2,1,4,3]
function swapPairs(arr) {
    for(let i=0; i < arr.length-1; i = i + 2) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
// console.log(swapPairs([3,1,2,4,5]));

//Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.
function removeDuplicates(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1])
            newArr.push(arr[i])
    }
    return newArr;
}
// console.log(removeDuplicates([1,1,1,1,2,2,2,3,4,5,5,5,6,6,7,7,7,7,7,8,]))



