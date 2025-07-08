import { useState } from "react";

function Toggle(){
      let [display,useDisplay]=useState("true")
    return (
        <>
         
           <button onClick={()=>useDisplay(!display)}>Toggle</button>
             {display?<h1>Display Apple</h1>:null}
        </>
      
    )
}
export function DisplayCount(){
    let count=0
    let [useData,useFun]=useState(0)

    return (
        <>
            {useData==0?<h1>Hello 1</h1>
            :useData==1?<h1>Hello 2</h1>
            :useData==2?<h1>Hello 3</h1>
            :useData==3?<h1>Hello 4</h1>
            :<h1>End Toggle</h1>
            }
            <button onClick={()=>useFun(useData+1)}>TOggle with multiple condition</button>
        </>

    )
}
export default Toggle