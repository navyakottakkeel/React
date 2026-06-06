import { useState } from "react";

export function Count(){

    let [num, setCount] = useState(0);
    return(
        <div>
        <p>{num}</p>
        <button onClick={() => setCount(num + 1)}>Click me</button>
        </div>
    )
}