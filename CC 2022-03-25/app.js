//Challenge:
// You will be given an array [a] and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//Parameters: 

//Results: 

//Examples:

//Pseudocode:

function check(a, x) {
    return a.includes(x) ? true : false; 
  }

  //Additional solutions:

  function check(a,x){
    return a.includes(x);
  };

  //or

  const check = (a, x) =>
  a.some(val => val === x);