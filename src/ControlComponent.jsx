import { useState } from "react"

function Submit(){
     let [username,setName]=useState("")
     let [email,setEmail]=useState("")
     let [password,setPassword]=useState("")
    return(
       
        <>
        <p>ControlComponent</p>
            <input type="text" name="username" placeholder="Enter name" value={username} onChange={(event)=>setName(event.target.value)}/><br/>
            <input type="password" name="password" placeholder="Enter napassword" value={password} onChange={(event)=>setPassword(event.target.value)}/><br/>
            <input type="text" name="email" placeholder="Entername" value={email} onChange={(event)=>setEmail(event.target.value)}/><br/>
            <button type="submit">Submit</button>
            <button type="submit" onClick={()=>{setName(''),setPassword(''),setEmail('')}}>Clear</button>
        </>

    )
}
export default Submit