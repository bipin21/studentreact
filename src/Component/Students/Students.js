import React, { useState } from 'react';
import Student from '../Student/Student';
import "./Students.css";

const Students = () => {
    // eslint-disable-next-line
    const [students, setStudents] = useState(
        [
            { id : 111, name:"Meti", major:"CS"},
            { id : 112, name:"Tedros", major:"CS"},
            { id : 113, name:"Pascal", major:"CS"}
        ]
    );
    
    
    const studentList = students.map( s => 
    <Student key={s.id} id={s.id} name={s.name} major={s.major} />) ;
    return(
        <div className="students">
            {studentList}
            
        </div>
    );
};

export default Students;