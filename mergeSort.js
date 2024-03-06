#!/usr/bin/env node

// From the pseudocode of Introduction To Algorithms book page 46


function merge(A, p, q, r){
    // length of A[p:q]
    let nL = q - p + 1
    //  length of A[q+1:r]
    let nR = r - q
    // Let leftArr[0 : nL-1] and rightArr[0 : nR-1] be new arrays
    let leftArr = new Array(nL)
    let rightArr = new Array(nR)
    // Copy A[p:q] into leftArr[0: nL-1]
    for(let i = 0; i < nL; i++){
        leftArr[i] = A[p + i] 
    }    
    //  Copy A[q+1:r] into rightArr[0:nR-1]
    for(let j = 0; j < nR; j++){
        rightArr[j] = A[q + j + 1]
    }
    // i indexes the smallest remaining element in leftArr
    let i = 0;
    // j indexes the smallest remaining element in rightArr
    let j = 0;
    // k indexes the location in A to fill
    let k = p;
    // As long as each of the arrays leftArr and rightArr contains an unmerged element,
    // copy the smallest unmerged element back into A[p:r].
    while(i < nL && j < nR){
        if(leftArr[i] <= rightArr[j]){
            A[k] = leftArr[i]
            i += 1
        } else {
            A[k] = rightArr[j]
            j += 1;
        }
        k += 1;
    }
    // Having gone through one of leftArr and rightArr entirely, copy the 
    //  remainder of the other to the end of A[p:r]
    while(i < nL){
        A[k] = leftArr[i]
        i += 1
        k += 1
    }
    while(j < nR){
        A[k] = rightArr[j]
        j += 1
        k += 1
    }

    
}

function mergeSort(A, p, r){ // A[p:r]
    // Zero or one element
    if(p >= r){
        return
    }

    // Midpoint of A
    let q = Math.floor((p + r) / 2);
    // Recursively sort A[p:q]
    mergeSort(A, p, q)
    //  Recursively sort A[q+1:r]
    mergeSort(A, q + 1, r)
    // Merge A[p:q] and A[q+1:r]
    merge(A,p,q,r)
}

// Test

let arr = [1, 99, 6, 2, 25, 9, 0];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
