import Header from "./Header"
import Operation from "./Operation"
import Blog from "./Blog"
import State from "./State"
import Toggle, {DisplayCount} from "./ToggleDispkay"
import User ,{Userpar,UseCollegerpar,College,OnclickProps} from "./Propsdata"
import Jsxprops from './passjsxwithprops'
import { useEffect, useState } from "react"
import Form from "./Form"
import Skills ,{RadioClick}from "./Checkbox"
import { createBrowserRouter } from "react-router-dom"
import DataGet from "./Lopping"
import UserRe from "./ReuseCom"
import Clock from "./Clock"
import CollegeNew from "./Nestedloop"
function App(){
  let username="Swati";
  let email="abc@gmail.com"

  let UseObjBca={
    academy:"Shardauniversity",
    location:"Noida",
    stream:"MCA"
  }
   let UseObj=[{
        Id:1,
        Name:"Shardauniversity",
        Email:"Noida",
        Age:"MCA"
      },
      {
        Id:2,
        Name:"AN college",
        Email:"Delhi",
        Age:"BCA"
      },{
        Id:3,
        Name:"BN college",
        Email:"Gurugram",
        Age:"RCa"
      }
]
let collgeObj=[{
  name:"RB d collge",
  city:"jaipur",
  website:"https::abc.com",
  student:[{
        Id:1,
        Name:"Shardauniversity",
        Email:"Noida",
        Age:"MCA"
      },
      {
        Id:2,
        Name:"AN college",
        Email:"Delhi",
        Age:"BCA"
      },{
        Id:3,
        Name:"BN college",
        Email:"Gurugram",
        Age:"RCa"
      }
      ]
    },
    {
  name:"An collge",
  city:"jaipur",
  website:"https::abc.com",
  student:[{
        Id:1,
        Name:"Shardauniversity",
        Email:"Noida",
        Age:"MCA"
      },
      {
        Id:2,
        Name:"AN college",
        Email:"Delhi",
        Age:"BCA"
      },{
        Id:3,
        Name:"BN college",
        Email:"Gurugram",
        Age:"RCa"
      }
      ]
    },{
  name:"Sharda collge",
  city:"jaipur",
  website:"https::abc.com",
  student:[{
        Id:1,
        Name:"Shardauniversity",
        Email:"Noida",
        Age:"MCA"
      },
      {
        Id:2,
        Name:"AN college",
        Email:"Delhi",
        Age:"BCA"
      },{
        Id:3,
        Name:"BN college",
        Email:"Gurugram",
        Age:"RCa"
      }
      ]
    }
]
  //props with arr
  let clg=["MCA","BCA","BSCIT","BSC"]
  const [student,useStudent]=useState("bhaskar")
  
  const [color,SetColor]=useState('Red')
  return(
    <>
    <div>
  <h1>Nested looping</h1>
  {collgeObj.map((clg,index)=>{
    return(
      <div key={index}><CollegeNew college={clg}/></div>
      
    )
    })}
  </div>
  


    {/* clock code */}
    
    <div>
    <select defaultValue={'red'} onChange={(event)=>SetColor(event.target.value)}>
      <option value={"red"} >red</option>
      <option value={"green"} >green</option>
      <option value={"blue"} >blue</option>
    </select>
    <Clock color={color}/>
    <hr/>
    {UseObj.map((user)=>{
      return(
      <div key={user.Id}>
      <UserRe data={user}/>
      </div>
      )
      

    })}
    
    <hr/>
    <DataGet/>
    <hr/>
    <RadioClick/>
    <hr/>
    <Skills/>
    <hr/>
      <Form/>
    </div>
    <hr/>
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
