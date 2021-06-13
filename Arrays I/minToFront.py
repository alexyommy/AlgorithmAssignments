# Given an array of comparable values, move the lowest element to array's front, shifting backward any elements previously ahead of it. Do not otherwise change the array's order
# Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
def minToFront(arr):
    min = arr[0]
    index = 0
    for i in range(1, len(arr)): 
        if arr[i] < min:
            min = arr[i]
            index = i
    for x in range(index, 0, -1):
        temp = arr[x]
        arr[x] = arr[x-1]
        arr[x-1] = temp
    return arr

print(minToFront([4,2,3,1,5]))