import './App.css'

import { ReusableComponent } from './Assignment1'
import { IncDec } from './Assignment2'
import { Dropdown } from './Dropdown'
import {Counter} from './Sample'
import { Focus } from './UseRefUsage'
import { AddNumbers, CheckMatch, ColorChange, Counters, ShowValue, ToggleButton } from './UseStateUsage'

const data = [
  {id:1, name: 'Navya', email: 'navyakottakkeel@gmail.com'},
  {id:2, name: 'Nithin', email: 'nithin@gmail.com'},
  {id:3,name:'Nythik', email: 'nythik@gmail.com'}
]

function App() {
  return (
    <>
    <Focus/>
    <Counters/>
    <ShowValue/>
    <AddNumbers/>
    <CheckMatch/>
    <ToggleButton/>
    <ColorChange/>


      {/* {data.map((data) => (
        <ReusableComponent 
        key={data.id}
        name={data.name}
        email = {data.email} />
      ))}
      
        <IncDec/>
      <Counter/>
      <Dropdown/>  */}
      
    </>
  )
}

export default App
