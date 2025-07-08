import Header from "./Header"
import Operation from "./Operation"
import Blog from "./Blog"
import State from "./State"
import Toggle, {DisplayCount} from "./ToggleDispkay"
import User ,{Userpar,UseCollegerpar,College,OnclickProps} from "./Propsdata"
import Jsxprops from './passjsxwithprops'
import { useState } from "react"
import Form from "./Form"
function App(){
  let username="Swati";
  let email="abc@gmail.com"

  let UseObjBca={
    academy:"Shardauniversity",
    location:"Noida",
    stream:"MCA"
  }
  //props with arr
  let clg=["MCA","BCA","BSCIT","BSC"]
  const [student,useStudent]=useState("bhaskar")
  
  return(
    <>
    <div>
      <Form/>
    </div>
    
    <div>

    <OnclickProps name={student}/>
    
   <button onClick={()=>useStudent("Naina Tiwari")}>Onclick</button>
   <hr/>
   <Jsxprops>
   <h1>Hello EveryOne</h1>
   </Jsxprops>
   <Jsxprops color="blue">
   <h1>Hello Anil</h1>
   </Jsxprops>

    <College name={clg} />
    <User name="Neha" age="27"/>
    <hr/>
    <Userpar name="Naina" age="26"/>
    <hr/>
    <Userpar name={username} email={email}/>
    <hr/>
    <UseCollegerpar academy={UseObjBca.academy} location={UseObjBca.location} stream={UseObjBca.stream}/>
    <DisplayCount/>
    <br/>
    <br/>
    <Toggle/>
    <br/>
    <State/>
    <Blog/>
      <Header/>
      <h1>hello React</h1> 
      <h1>hello React</h1> 
      <Operation/>
    </div>
    </>
   
  )
  
}
export default App
