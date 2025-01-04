# JavaScript Bug: TypeError in Addition Function

This repository demonstrates a common JavaScript error: a `TypeError` occurring during addition when null checks are present but other non-numeric types aren't considered. The `bug.js` file contains the erroneous code, and `bugSolution.js` provides a corrected version.

## Bug Description

The function `foo` intends to add two numbers. It correctly handles `null` inputs by returning 0. However, it fails if either input is a non-numeric type (e.g., string, boolean).  This leads to a `TypeError`. 

## Solution

The improved version in `bugSolution.js` uses `typeof` operator checks and `isNaN()` function to explicitly handle various input types and prevent type errors. It provides more robust error handling and clearer behavior.