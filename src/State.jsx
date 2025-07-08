import { useState } from "react"
function State(){
    let fruits="banana";
    let counts=0;
    function handlefruits(){
        
        setFruits("banananaa")
        // fruits="Apple"
        // console.log(fruits)
    }
    const [count,setFruits]=useState(0)
    return (
        <>
            <div>
            <h1>{count}</h1>
            <button onClick={handlefruits}>useState</button>
            <p>{fruits}</p>
                <button onClick={()=>setFruits(count+1)}>Change state</button>
            </div>
        </>

    )



}
export default State