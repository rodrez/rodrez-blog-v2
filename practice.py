def solution(inputArray):
    # loop through the array
    # create left and right pointers (lptr starts at - and rptr starts at 1)
    # sum the values and check if the value is greater than the total to replace it
    # if the left pointer is less than the right pointer
    # set left pointer to right pointer and move right pointer once
    
    lptr, rptr = 0, 1
    total = inputArray[lptr] * inputArray[rptr]
    
    while rptr <= len(inputArray) - 1:

        if inputArray[lptr] * inputArray[rptr] > total:
            total = inputArray[lptr] * inputArray[rptr]

        lptr += 1
        rptr += 1

    return total
s = solution([-23, 4, -3, 8, -12])

print(s)