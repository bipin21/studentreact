import React, { useState } from 'react';
import Dashboard from '../../Container/Dashboard/Dashboard';
import "./Student.css";

const Student = (props) => {
//    // eslint-disable-next-line
   const [studentclick, setStudentclick] = useState(false);

    const handleStudentClick =() =>{
        setStudentclick(!studentclick);
    };
    return(
        <div onClick={handleStudentClick} className="student">
            <h1>Student</h1>
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Major: {props.major}</p>

            {studentclick ? 
            <div>
            <button>Edit</button>
             <button>Delete</button>
             </div>
              : ''}
        </div>
    );
};

export default Student;