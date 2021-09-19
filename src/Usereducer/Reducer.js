import { useReducer } from "react";
import "./Reducer.css";

export default function Index( ) {
//Inisialisasi nilai count 
    const initialState = {count: 0};

//dan pemanggilan fungsi Counter
return(   
    Counter()
)
//Fungsi untuk menaikkan dan megurangi nilai count
    function reducer(state, action) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        default:
        throw new Error();
    }
    }

    //Fungsi yang berisi useReducer dan tombol2 untuk mengubah nilai count
    function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div className="titleWrapper">
                <p className="title">Counter dengan useReduce </p>
            </div>
            <div>
                <p className="countValue">{state.count}</p>
            </div>
            <div className="btnWrapper">
                <button className="Button" onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button className="Button" onClick={() => dispatch({type: 'increment'})}>+</button>
            </div>
        </div>
    );
    }
}