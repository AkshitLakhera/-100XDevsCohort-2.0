import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState("");
    // Your solution starts here
//  let  expensiveValue = 0; 
    // Your solution ends here
    
    const  expensiveValue= (n) => {
          // Handle non-numeric inputs gracefully
    if (isNaN(n)) {
        return "Invalid input";
      } 
        if (n <= 0) {
            return 1; // Factorial of 0 is 1
          }
          let  fact =1 ;
          for(let i = 1; i <=n; i++) {
            fact = i * fact 
          }
          return fact;
    }
  const memoized = useMemo(() => expensiveValue(input) ,[input] )

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <p>Calculated Value: {memoized}</p>
        </div>
    );
}