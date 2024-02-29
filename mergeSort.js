#!/usr/bin/env node

function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0, mid) // form the first index to mid-1
    let rightArr = arr.slice(mid) // from middle to the end of the array
    return mergeSort(mergeSort(leftArr), mergeSort(rightArr))
}