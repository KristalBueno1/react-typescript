import { useReducer } from 'react';
const initialState = {
    counter: 10,
}   
type ActionType = 
| { type: 'increment' }
| { type: 'decrement' }
    | { type: 'custom', payload: number };
    const counterReducer = ( state: typeof initialState, action: ActionType ) => {
    switch ( action.type ) {
case 'increment':
            return {
        ...state,
                counter: state.counter + 1
        }
case 'decrement':
return {
                ...state,
        counter: state.counter - 1
    }
case 'custom':
            return {
        ...state,
            counter: action.payload
            }
    default:
            return state;
}
}

export const CounterRed = () => {
    const [ { counter: counter }, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
         <h2>counter: { counter }</h2> 
         <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: 'increment' }) }>
            +1
</button>
<button className="btn btn-outline-primary"
    onClick={ () => dispatch({ type: 'decrement' }) }>
            -1
        </button>
        <button className="btn btn-outline-danger"
        onClick={ () => dispatch({ type: 'custom', payload: 100 }) }>
100
         </button>
        </>
    )
} 