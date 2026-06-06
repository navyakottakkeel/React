import './App.css'
import { ReusableComponent } from './Assignment1'
import { Dropdown } from './Dropdown'
import {Counter} from './Sample'

const data = [
  {id:1, name: 'Navya', email: 'navyakottakkeel@gmail.com'},
  {id:2, name: 'Nithin', email: 'nithin@gmail.com'},
  {id:3,name:'Nythik', email: 'nythik@gmail.com'}
]

function App() {
  return (
    <>
      {data.map((data) => (
        <ReusableComponent 
        key={data.id}
        name={data.name}
        email = {data.email} />
      ))}
      

      <Counter/>
      <Dropdown/>
    </>
  )
}

export default App
