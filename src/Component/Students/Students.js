import React, { useRef, useState } from 'react';
import Student from '../Student/Student';
import "./Students.css";

const Students = () => {

    const [text, setText] = useState("");
    const studentArray = [
        { id: 111, name: "Meti", major: "CS" },
        { id: 112, name: "Tedros", major: "CS" },
        { id: 113, name: "Pascal", major: "CS" }
    ];
    const [students, setStudents] = useState(
        studentArray
    );

    const changeNameHandler = () => {
        students[0].name = text;
        setStudents([...students]);
        console.log(text)
        setText("");
    };

    const changeName = (event) => {
        setText(event.target.value);
    }


    const studentList = students.map(student =>
        <Student key={student.id} {...student} />);
    return (
        <div className="students">
            {studentList}

            <section className="forms">
                <input onChange={changeName} type="text" value={text} />
                <button
                    type="button"
                    onClick={changeNameHandler}>
                    Change Name
                </button>
            </section>
        </div >

    );
};

export default Students;