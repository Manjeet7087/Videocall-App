import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
export const Home = () => {
    const [input,setInput] = useState("");
    const navigate =useNavigate();

const submitHandler = () => {
    navigate(`/room/${input}`);
}

  return (

    <div>
      <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your name...'/>  
      <button onClick={submitHandler}>join</button>
    </div>
    
  )
}
