function NestStudent({student}){
    
    return(
        
                                <ul>
                                <li>
                                    Name:{student.Name}
                                    </li>
                                    <li>
                                    Email:{student.Email}
                                    </li>
                                    <li>
                                    Age:{student.Age}
                                    </li>
                                    <hr/>
                                </ul>
                       
    )
}
export default NestStudent