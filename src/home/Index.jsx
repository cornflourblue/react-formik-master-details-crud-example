import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React + Formik - Master Details CRUD Example</h1>
            <p>An example app showing how to list, add, edit and delete user records with React and Formik.</p>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
        </div>
    );
}

export { Home };