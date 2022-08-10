# merge sorted arrays
#  [0,3,4,31][4,6,30]

def merge_sorted_arrays(ar, arr2):
    # We have to loop trough loop through the longest array
    # and use the same index to check the second array element in the same loop

    # This might cause the code to break if the arrays are not the same length, so we 
    # need to add a conditional to check if the index is less or equal to the array length.

    longest_array = arr if len(arr) > len(arr2) else arr2
    results = []

    for index in longest_array:
        pass