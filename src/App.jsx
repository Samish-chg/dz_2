import './App.css'
import React, {useState} from "react";

function App() {
    const [color1,setColor1]=useState("blue")
    const [color2,setColor2]=useState('red')



   const SwapColor = ()=>{
        setColor1(color2)
       setColor2(color1)
   }

  return (


    <div>

        <div className="Square"
             onClick={SwapColor}
        style={{backgroundColor:color2}}></div>
        <div className="Square_2"
             onClick={SwapColor}
        style={{backgroundColor:color1}}></div>

    </div>
  )
}

export default App
