import { useEffect, useState } from "react"

const Clock=({color})=>{
    const[time,setTime]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())

        },1000)

    },[])
    return (
        <>
        <h1>React DIgital Clock</h1>
        <h3  style={{color:color,width:"100px",padding:"10px", borderRadius:"5px",backgroundColor:"#000"}}>{time}</h3>
        </>
    )
}
export default Clock