import { useState } from "react";

export function IncDec(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>{count}</p><br />
            <button onClick={() => setCount(count + 1)}>+</button>&nbsp;
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}