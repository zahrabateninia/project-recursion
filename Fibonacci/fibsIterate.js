// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(num){
    if(num === 0 ) return [];
    if(num === 1) return [0];
    if (num === 2) return [0, 1];

    for(let i = 1; i<= num; i++){
        
    }
}

let result = fibs(8)
console.log(result)