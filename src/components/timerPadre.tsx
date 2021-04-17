mport { useState } from 'react';
import { Timer } from './Timer';
export const TimerPadre = () => {
    const [miliseg, setmiliseg] = useState(1000);
    return (
        <>
        <span>miliseg { miliseg }</span>
            <br/>
        <button className="btn btn-outline-success"
            onClick={ () => setmiliseg(1000) }>
                1000
    </button>
        <button className="btn btn-outline-success"
            onClick={ () => setmiliseg(2000) }>
                2000
    </button>
            <Timer miliseg={ miliseg } />
        </>)} 