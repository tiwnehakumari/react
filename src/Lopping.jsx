function DataGet(){
    const arr=['Neha','Naina',"Pratabh","geeta"];
    let UseObjBca=[{
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

    
    return(
        <>
            <div>
                <h1>Loop in JSX with map function</h1>
                <table border={1}>
                <thead >
                    <tr>
                   
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                {UseObjBca.map((user,index)=>{
                    return(
                    <tr key={user.Id}>
                        <td>{user?.Id}</td>
                        <td>{user?.Name}</td>
                        <td>{user?.Email}</td>
                        <td>{user?.Age}</td>
                    </tr>
                    )
                })}
                    
                    
                </tbody>
                </table>
            </div>
        </>
    )
}
export default DataGet