function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  //Check if both inputs are numbers.If not, return an error message or default value.
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return "Invalid input: Both parameters must be numbers.";
  }
  return a + b; 
} 