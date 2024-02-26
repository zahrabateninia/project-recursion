#!/usr/bin/env node

function fibonacci(n){
    if(n<2){
        return n
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

let result = fibonacci(5)
console.log(result)