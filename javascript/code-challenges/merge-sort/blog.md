# Merge-Sort

## Psuedo-Code

```  
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Trace and Step-Thru

**mergeSort(arr)**

Here we have a function 'mergeSort', which takes in an array. 

The first action we perform is to initiate variable "n" equal to the length of the array, and enter an if statement if n > 1.

In this if statement, we first declare "mid" by dividing n in half, and set a left and right variable each to arr[0-mid] and arr[mid-n].

We then recursively call thue function mergeSort again on both the left and right sides of the function, to sort each side, and finally call a tird function "merge", which will merge the sorted left and right sides together. 

**merge(left, right, arr)**

In this function, we declare three vairables i, j, and k, all set to 0. We then enter a while lop which will run while i < left.length and j < right.length. 

Here we say if left[i] <= right[j], push left[i] to arr[k] and increment the value of i - else, push right[j] into the arr[k] position, and increment the value of j.

Then, increment the value of k.

Finally, if i = left.length(left array 'finishes'), push remaining values in right to arr - and do the opposite if the right array "finishes" - push remaining values of left to arr.

