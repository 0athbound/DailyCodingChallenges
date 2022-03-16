// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//Parameters: 

//Results: 

//Examples:

//Pseudocode: create a function that takes in a number and adds it to a variable 
//            return sum

var summation = function(num) {
    let sum = 0 
    for(let i=0; i <= num; i++){
        sum += i 
    }
    return sum
}

//Additional Solutions:

var summation = function (num) { /* Gauss Formula */
    return num * (num + 1) / 2
}

//or 

var summation = function (num) { /* recursion*/
    return num ? num + summation(num - 1) : num
}