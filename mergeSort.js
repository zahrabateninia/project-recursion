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

function mergeSort(arr, l, h){
    if(l>=h){
        return;
    }
    let mid = parseInt((r-l)/2) //middle of the array
    mergeSort(arr, l, mid)
    mergeSort(arr, mid+1, h)


}

function printSortedArray(){

}