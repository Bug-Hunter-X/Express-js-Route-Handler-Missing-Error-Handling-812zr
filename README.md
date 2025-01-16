# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input, resulting in unexpected 500 errors instead of appropriate 404 errors.

## Bug

The `bug.js` file contains an Express.js route handler that retrieves a user by ID.  It lacks proper error handling for the case where the provided ID is invalid or a user with that ID doesn't exist.  This results in a 500 Internal Server Error.

## Solution

The `bugSolution.js` file demonstrates the correct approach.  It includes explicit checks for invalid input and handles the 'user not found' scenario by returning a 404 Not Found error.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the `bug` directory and run `node bug.js`.
3. Send a GET request to `/users/abc` (or any invalid ID). 
4. Observe that a 500 Internal Server Error is returned.

## How to fix the bug

Refer to `bugSolution.js` for the corrected code that returns 404 Not Found for missing users and handles other potential errors.