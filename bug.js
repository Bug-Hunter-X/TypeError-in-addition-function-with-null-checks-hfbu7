function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; //This will throw an error if either a or b is not a number
}