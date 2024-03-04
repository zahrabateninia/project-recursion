#!/usr/bin/env node

// From the pseudocode of Introduction To Algorithms book page 46

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

function merge(A, p, q, r){
    // length of A[p:q]
    let nL = q-p+1
    //  length of A[q+1:r]
    let nR = r-q
    // Let leftArr[0 : nL-1] and rightArr[0 : nR-1] be new arrays
    // Copy A[p:q] into leftArr[0: nL-1]
    for(let i=0; i<= nL-1; i++){
        leftArr[i] = A[p+i] 
    }    
    //  Copy A[q+1:r] into rightArr[0:nR-1]
    for(let j=0; j<= nR-1; j++){
        rightArr[j] = A[q+j+1]
    }
    // i indexes the smallest remaining element in arrLeft
    let i = 0;
    // j indexes the smallest remaining element in arrRight
    let j = 0;
    // k indexes the location in A to fill
    let k = p;
    // As long as each of the arrays arrLeft and arrRight contains an unmerged element,
    // copy thn smallest unmerged element back into A[p:r].
    while(i<nL && j<nR){
        if(arrLeft[i]<= arrRight[j]){
            A[k]=arrayLeft[i]
            i +=1
        }else{
            A[k]=arrRight[j]
            j+=1;
        }
        k+=1;
    }
    // Having gone through one of arrLeft and arrRight entirely, copy the 
    //  remainder of the other to the end of A[p:r]
    while(i<nL){
        A[k]=arrLeft[i]
        i =+1
        k+=1
    }
    while(j<nR){
        A[k]= arrRight[j]
        j+=1
        k+=1
    }

    
}