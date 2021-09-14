import React, { useState } from 'react';
import Dashboard from '../../Container/Dashboard/Dashboard';
import "./Student.css";

const Student = (props) => {
//    // eslint-disable-next-line
//    const [studentedit, setStudentedit] = useState( {
//     name : ""
// });

// const handleStudentClick =() =>{
//     console.log(props.name);
    
//         <Dashboard name={props.name} />
    
// };
    return(
        <div className="student">
            <h1>Student</h1>
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Major: {props.major}</p>
        </div>
    );
};

export default Student;