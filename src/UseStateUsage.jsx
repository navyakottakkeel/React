import { useState } from "react";

// Implement a counter
export function Counters(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////

//  Create input field and show entered text in p tag
export function ShowValue(){
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');
    return(
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setDisplayText(text)}>Show</button>
            <p>{displayText}</p>
        </div>
    )
}

////////////////////////////////////////////////////////////////////////////////

// Create a component to add two numbers by clicking a button
export function AddNumbers(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    return(
        <div>
            <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <button onClick={() => setResult(Number(num1) + Number(num2))}>Add</button>
            <p>{result}</p>
        </div>
    )
}
/////////////////////////////////////////////////////////////////////////////////////

// Check if text in two input fields matches
export function CheckMatch(){
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [status, setStatus] = useState('')
    const checkText = ()=>{
        if(text1.toLowerCase() === text2.toLowerCase()){
            setStatus("Match")
        }else{
            setStatus("Not match")
        }
    }
    return(
        <div>
            <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} />
            <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} />
            <button onClick={checkText}>Check</button>
            <p>{status}</p>
        </div>
    )
}

///////////////////////////////////////////////////////////////////////////////////

// Toggle Button
export function ToggleButton(){
    const [show, setShow] = useState(false);
    return(
        <div>
            <button onClick={() => setShow(!show)}>{show?'Show':'Hide'}</button>
            {show && (<p>Hello</p>)}
        </div>
    )
}

/////////////////////////////////////////////////////////////////////////////

// Chnage color of p tag
export function ColorChange(){
    const [color, setColor] = useState('black')
    return(
        <div>
            <p style={{color:color}}>Please change my color</p>
            <button onClick={() => setColor('red')}>Change Color</button>
        </div>
        
    )
}