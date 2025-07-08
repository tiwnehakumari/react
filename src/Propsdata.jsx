function User(data,age){
    
    return(
        <>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
        </>
    )

}
 export function College(data){
        return(
           
            <div>{data.name.map((a)=>{
                return <p key={a}>{a}</p>

            })}</div>
          
        
            
            // <>{data.name[0]}</>
           
        )

    }
//props using obj para
export function Userpar({name,age,email}){
    return(
        <>
        <h1>parameter obj with same</h1> 
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Email:{email}</p>
        </>
    )
}
    export function UseCollegerpar({academy,location,stream}){
    return(
        <>
        <h1>parameter obj</h1> 
            <p>academy:{academy}</p>
            <p>location:{location}</p>
            <p>stream:{stream}r</p>
        </>
    )}

    export function OnclickProps(data){
        return(
            <>{data.name}</>
        )
    }
    
export default User