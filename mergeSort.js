#!/usr/bin/env node

// From the pseudocode of Introduction To Algorithm book page 46

function mergeSort(A, p, r){ // A[p:r]
    // Zero or one element
    if(p >= r){
        return
    }

    // Midpoint of A
    let q = Math.floor(p+r/2);
    // Recursively sort A[p:q]
    mergeSort(A, p, q)
    //  Recursively sort A[q+1:r]
    mergeSort(A, q+1, r)
    // Merge A[p:q] and A[q+1:r]
    merge(A,p,q,r)
}