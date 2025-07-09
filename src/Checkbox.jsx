import { useState } from "react"


function Skills(){                                      
    const [getSkill,setskill]=useState([])
    function handleClick(event){
        console.log(event.target.value,event.target.checked)
        if(event.target.checked==true){
            // setskill(event.target.value)
            setskill([...getSkill,event.target.value])
        }else{
            
            // console.log("<<<<<<<itemvalue",event.target.value)
            setskill([...getSkill.filter((item)=>item!=event.target.value)])
        }

    }
    return(
        <>
            <input  onChange={handleClick} type='checkbox' value="php" />
            <label htmlFor="">PHP</label>
            <br/>
            <input onChange={handleClick} type='checkbox' value="Node"/>
            <label htmlFor="Node">Node</label>
            <br/>
            <input onChange={handleClick} type='checkbox' value="React"/>
            <label htmlFor="React">React</label>
            <br/>
            <input  onChange={handleClick} type='checkbox' value="Javascript"/>
            <label htmlFor="Javascipt">Javascipt</label>
            <p>{getSkill.toString()}</p>
        </>
    )
}
export function RadioClick(){
    const [getgender,setGender]=useState('female')
    const [city,SetCity]=useState("Noida")
   
    return(
        <>
           <input type="radio"  name="gender"  onChange={(event)=>setGender(event.target.value)} value={"male"} checked={getgender=="male"}/>
           <label htmlFor="Male">Male</label>
           <input type="radio"  name="gender"  onChange={(event)=>setGender(event.target.value)} value={"female"} checked={getgender=="female"}/>
           <label htmlFor="Female">Female</label>
           <p>{getgender}</p>
           <h4>Select City</h4>
           <select defaultValue={"Delhi"}  onChange={(event)=>SetCity(event.target.value)}>
                <option value="Noida">Noida</option>
                <option value="Delhi" >Delhi</option>
                <option value="Gurugram" >Gurugram</option>
                <option value="Patna" >Patna</option>
           </select>
           <p>SELECTED STATE:{city}</p>
        </>

        )
        
}
export default Skills