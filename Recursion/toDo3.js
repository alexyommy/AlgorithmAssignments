// Recursive Binary Search
function rBinarySearch(arr, value) {
    var mid = Math.floor(arr.length/2)
    if(arr[mid] == value) {
    return true;
    }
    else if(value < arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(0,mid), value);
    }
    else if(value > arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(mid, arr.length), value);
    } else {
        return false
    }
}
// console.log(rBinarySearch([1,3,5,6],4));
// console.log(rBinarySearch([4,5,6,8,12],5));

// Greatest Common Factor
function rGCF(num1,num2) {
    if(num1 == num2) {
        return num1;
    }
    if(num1 > num2) {
        if ((num1/num2) % 1 === 0) {
            return num2;
        } else {
            return rGCF(num1-num2, num2);
        }
    }
    if(num1 < num2) {
        if ((num1/num2) % 1 === 0) {
            return num2;
        } else {
            return rGCF(num1, num2-num1);
        }
    }
}
console.log(rGCF(123456, 987654))