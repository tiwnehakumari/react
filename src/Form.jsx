function Form(){
    return(
        <>
            <h1>Get input Fields</h1>
            <input type="text" name="" onChange={(e)=>alert(e.target.value)}></input>
        </>

    )
}
export default Form