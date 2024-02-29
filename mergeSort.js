#!/usr/bin/env node
// Pseudocode:
// if(l<r)
//     mid = l+r/2
//     mergeSort(l, mid)
//     mergeSort(mid+1, h)
//     merge(l,mid, h)
//     in which l is the lowest and h is the highest elements of array

// Merges two subarrays of array[].
// First subarray is arr[begin..mid]
// Second subarray is arr[mid+1..end]
function merge(){
    

}


function mergeSort(arr){
    // Divide the array(subarray) into two halves
    // until there is only one element in each subarray(left index and right index are equal)
    // when splitting is finished, call merge function to combine them and return the sorted array
    if (arr.length > 1){ // so don't go in this block if the array has only one element
        // define the left and right new arrays

        // indexes of mid left and right
        let mid = Math.round(arr.length /2);

        let leftArr = arr.slice(0, mid+1)
        let rightArr = arr.slice(mid+1, arr.length + 2)

        mergeSort(leftArr) // sort the left half
        mergeSort(rightArr) // sort the right half
    }else{
        merge(arr)
    }
  

}

function printSortedArray(){

}