import { useState } from "react"
import Submit from "./ControlComponent"

function Form(){
    const [val,setVal]=useState("")
    return(
        <>
        <Submit/>
        <hr/>
            <h1>Get input Fields</h1>
            <input type="text" name="" placeholder="Enter a value" value={val} onChange={(e)=>setVal(e.target.value)}/>
            {/* <h1>{val}</h1> */}
            <button onClick={()=>setVal("")}>Clear</button>
        </>

    )
}
export default Form