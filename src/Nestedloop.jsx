import NestStudent from "./NestedStudent"
function CollegeNew({college}){
    
    return(
        <>
            <div style={{width:"500px",backgroundColor:"#ccc",padding:"20px",borderBottom:"5px solid black",gap:"10px",margin:"20px",borderRadius:"10px"}}>
                <h1>Name:{college?.name}</h1>
                <ul>
                <li>City:{college.city}</li>
                <li>Website:{college.website}</li>
                <li>
                <h4>Student</h4>
                    {
                        college.student.map((student,index)=>{
                           
                            return(
                                <div key={index}>
                                <NestStudent student={student}/>
                                </div>
                            )
                        })
                    }
                </li>
                </ul>
            </div>
        </>
    )
}
export default CollegeNew