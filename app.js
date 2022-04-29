// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P: Is is always going to be integers? Are we going to be given special characters? An empty arr ever?
//R: Return a new arr with each value doubled
//E: If we are given [2,3,4], should return [4,6,8]
//   If we are given [4,5,6], should return [8,10,12]   
//   If we are given [2,22], should return [4,44]

//Psuedo-code:
//Make a function that takes in an array
function doubled(arr){
    return arr.map(element=>element*2)
}
//Map through the array and multiply each element by two. Also return 
//doubled([1,2,3]) or:
console.log(double([2,3,4]),[4,6,8])

