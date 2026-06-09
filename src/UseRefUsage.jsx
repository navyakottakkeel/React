import { useRef } from "react";

export function Focus(){
    const inputRef = useRef(null);
    const inputFocus = () =>{
        inputRef.current.focus();
    }
    const inputValue = () => {
        inputRef.current.value();
    }
    return(
        <div>
        <input type="text" ref={inputRef} />
        <button onClick={inputFocus}>Focus</button>
        <button onClick={inputValue}>Value</button>
        <p>{}</p>
        </div>
    )
}