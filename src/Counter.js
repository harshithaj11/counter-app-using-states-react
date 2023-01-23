import {React,useState} from "react";
import "./App.css"
const Counter=()=>{
    const [count,setCount]= useState(0);
    return(<>
    <h1>Counter App</h1>
    <h3>Your current value is: {count} </h3>
    <button onClick={()=>setCount(0)}>Reset Counter</button>
    <button onClick={()=>count<10?setCount(count+1):""}>Increment Counter</button>
    <button onClick={()=>count>0?setCount(count-1):""}>Decrement Counter</button>
    </>)
}
export default Counter;