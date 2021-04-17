import { useState } from "react"
export const Counter = () => {

const [counter, setCounter] = useState(0)
    const increment = (numero:  number = 1):void => {
    setCounter(counter + numero);
    }
return (
<div className="mt-5">
    <h3>counter:</h3>
    <span>valor: { counter }</span>
    <button className="btn btn-outline-primary mt-2" 
    onClick= { () => increment(1)}>
        +1
</button>

    <button className="btn btn-outline-primary mt-2" 
    onClick= {() => increment(2)}>
        +2
    </button>
<button className="btn btn-outline-danger mt-2" 
onClick= {() => setCounter(0)}>
        Reset
    </button>
</div>
)
} 