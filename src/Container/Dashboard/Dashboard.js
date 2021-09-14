import React from 'react';
import Student from '../../Component/Student/Student';
import Students from '../../Component/Students/Students';
import "./Dashboard.css";

const Dashboard = () => {
    return(
        <div className="Dashboard">
            <div className="header">
                <h1>Student Dashboard</h1>
            </div>
            <Students />
            
            <section className="forms">
                <input type="text" />
                <button className="change-button">Change Name</button>
            </section>

            {/* <Student name={editstudent ? editstudent.name : ''} /> */}
            
        </div>
    );
};

export default Dashboard;