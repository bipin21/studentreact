import React from 'react';
import Students from '../../Component/Students/Students';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="header">
                <h1>Student Dashboard</h1>
            </div>
            <Students />
        </div>
    );
};

export default Dashboard;