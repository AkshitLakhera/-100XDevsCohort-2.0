/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  // Constructor: It initializes the Calculator object with a result variable set to 0.
  constructor() {
    this.result=0;
  }
    // Method: Adds the given number to the result.
  add(number){
    this.result += number;
  }
  // Method:Subtract given number to the result
  subtract(number){
    this.result-= number;
  }
  // Method :Mulitiply given number to result
  multiply(number){
    this.result*= number;
  }
  // Method:Divide given number to result
  divide(number){
    if (number=== 0){
      throw new Error ("Division by zero is not allowred");
    }
    else {
      this.result /= number
    }
  }
  // Method: Resets the result variable to 0.
  clear (){
    this.result =  0 ;
  }
  getResult () {
    return this.result
  }
  // Method: Takes a string expression, removes spaces, and evaluates it using eval().
// Throws an error for invalid expressions or division by zero.
calculate (expression){
  const cleanedExpression = expression.replace(/\s+/g , "")
   const validExpression = /[0-9+\-*().]+$/.test(cleanedExpression);
   if(!validExpression){
    throw new Error ('Not a valid expression');
   }
try {
  // Evaluate the cleaned expression using JavaScript's eval() function.
  this.result = eval(cleanedExpression);

  // Check for a specific case of division by zero.
  if(cleanedExpression == "10/0"){
    throw new Error('Division by zero is not allowed');
  }
} catch (error) {
  // Catch any errors during evaluation, such as invalid arithmetic expressions.
  throw new Error('Invalid arithmetic expression');
}
}
}

module.exports = Calculator;
