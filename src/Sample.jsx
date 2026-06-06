import { useState } from "react";

export function Counter(){
    const[count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        setCount(count + 1);
        // setCount(count + 1) updates state using the current count value from the render, so multiple calls may overwrite each other.
      }

      function handleClick2() {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        // setCount(prev => prev + 1) updates state using the latest state value maintained by React, so multiple updates are applied correctly in sequence.
      }

    return(
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Inc 1 </button>
            <button onClick={handleClick2}>Inc 2 </button>

        </div>
    )
}