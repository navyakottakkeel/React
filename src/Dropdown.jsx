import { useEffect } from "react";
import { useState } from "react";

export function Dropdown(){
    const data = {
        'Kerala': 'Thiruvananthapuram',
        'Karnataka': 'Bengaluru',
        'Tamilnadu': 'Chennai'
    };

    const [selectState, setSelectedState] = useState('Kerala');
    const [selectStateCapital, setSelectedStateCapital] = useState('Thiruvananthapuram');

    const changeState = (e) =>{
        setSelectedState(e.target.value);
    }

    useEffect(() => {
        setSelectedStateCapital(data[selectState])
    }, [selectState])


    return (
        <div>
        <select onChange={changeState}>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamilnadu">Tamilnadu</option>
        </select>

        <p>SelectedState : {selectState}</p>
        <p>Selected State Capital : {selectStateCapital}</p>
        </div>
    )
}