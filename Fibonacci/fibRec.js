#!/usr/bin/env node

function fibonacci(n, sequence = []) {
    if (n === 0) {
        return sequence;
    }
    if (sequence.length < 2) {
        sequence.push(sequence.length);
        return fibonacci(n, sequence);
    }
    const nextFibonacci = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextFibonacci <= n) {
        sequence.push(nextFibonacci);
        return fibonacci(n, sequence);
    }
    return sequence;
}

let result = fibonacci(5);
console.log(result);
