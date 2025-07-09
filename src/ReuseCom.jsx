const UserRe=({data})=>{
    return(
        <div style={{
            border:"10px solid green",
            padding:"10px",
            margin:"10px",
            width:"400px",
            borderRadius:"10px"
        }}>
        <h3>Name:<span style={{color:"green"}}>{data.Name}</span></h3>
        <h3>Age:<span style={{color:"green"}}>{data.Age}</span></h3>
        <h3>Email:<span style={{color:"green"}}>{data.Email}</span></h3>

        </div>
    )

}
export default UserRe