import { useState } from 'react'
import './App.css'

function Info() {

    const [counter, setcounter] = useState(0)

    // let counter =3
    const addOne = () =>{
        setcounter(counter+1)
        console.log(counter)
    }
    const minusOne = () =>{
        setcounter(counter-1)
        console.log(counter)
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={addOne}>Add one in {counter}</button>
            <br />
            <button onClick={minusOne}>Minus one in {counter}</button>
        </div>
    )
}

export default Info