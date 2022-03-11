// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Parameters: Are we ever given anything that isn't a string? What if we are given a special character? Or how about an empty string?

//Results: Return a number. This number is how many vowels are in the given string.

//Examples:

//Pseudocode: Make a function that takes in a str parameter
function vowelCount(str) {
   let count = 0 
   let arr = str.toLowerCase().split('')
   let newArr = arr.forEach(element => {
        if(element == 'a' ||
        element == 'e' ||
        element == 'i' ||
        element == 'o' ||
        element == 'u' ){
            count++
        }
   })
   return count

}
//            Break string into words and then into individual letters.
//            Make an empty variable called count
//            Map through an array and give a condition
//            If the element is a vowel, count +1
//            Return the vowel count 



console.log(vowelCount('Streaming is cool'), 6)
console.log(vowelCount('Parrots are fantastic'), 7)
console.log(vowelCount(99), 0)
console.log(vowelCount(''), 0)

//NOTE: type error in Run JS but function works just fine in CodeWars