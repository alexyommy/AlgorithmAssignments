# Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
def reverse(arr):
    for i in range(int(len(arr)/2)):
        temp = arr[i]
        arr[i] = arr[len(arr)-1-i]
        arr[len(arr)-1-i] = temp
    return arr
    # or return arr[::-1] does the same thing
# print(reverse([5,3,8,1,4,6]))

# Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around any values that shift off array's end to the other side, so that there is no data lost. Operate in-palce: given ([1,2,3],1), change the array to [3,1,2]
# Second: allow negative shiftBy (shift L, not R)
# Third: Minimize memory usage. With no new array, handle arrays/shiftBys in the millions
def rotateArr(arr, shiftBy):
    newArr = []
    posShiftBy = abs(shiftBy)
    for i in range(len(arr)):
        if i < posShiftBy:
            newArr.append(arr[len(arr)+i-posShiftBy])
        else:
            newArr.append(arr[i-posShiftBy])
    arr = newArr
    return arr
# print(rotateArr([1,2,3,4], -2))
# print(rotateArr([1,2,3,4,5,6], -3))

# Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order.
def filterRange(arr, min, max):
    newArr=[]
    for i in range(len(arr)):
        if(arr[i] > min and arr[i] < max):
            newArr.append(arr[i])
    return newArr
# print(filterRange([1,2,3,4,5],2,5))

# Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays.
# Ex.:arrConcat( ['a','b'], [1,2]) should return new array ['a','b',1,2]
def arrConcat(arr1,arr2):
    newArr = []
    for i in range(len(arr1)):
        newArr.append(arr1[i])
    for j in range(len(arr2)):
        newArr.append(arr2[j])
    return newArr
print(arrConcat(['a','b'], [1,2]))

