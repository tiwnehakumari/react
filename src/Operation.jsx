
function Operation(){
    function callfun()
    {
        alert("hello")
    }
    function callfunwithpara(a,b){
        alert(`call with para" ${a} |${b}`)
    }
    let userobj={
            name:"Neha",
            email:"nk@gmail.com",
        };
        let userarr=["Neha",
            "nk@gmail.com",]
            
        
    function defaultop(a,b,op){
        
        if(op=='+'){
            return a+b;
        }
        if(op=='-'){
            return a-b;
        }
        if(op=='*'){
            return a*b;
        }
        if(op=='%'){
            return a%b;
        }

    }
    return (
        <>
        <div>
            <h1>Hello Javascript</h1>
            <p>Hi here we are working ad learning Javascript</p>
            <p>{defaultop(3,4,'%')}</p>
           <p>{userobj.name} | {userobj.email}</p> 
           <p>{userobj.name} | {userobj.email}</p> 
           <button type="submit" onClick={callfun}>Click me</button>
           <br/>
           <button type="submit" onClick={()=>callfunwithpara("apple","banana")}>Click me with para</button>
        </div>
        </>
    )
}

export default Operation