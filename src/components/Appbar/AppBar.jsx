import React from "react";
import { NavLink } from "react-router-dom";


const AppBar = () => (
    <header>
        <h1>Expense</h1>
        <NavLink to='/'>Dashboard</NavLink>
        <NavLink to='/add'>Create Expense</NavLink>
        <NavLink to='/edit'>Edit Expense</NavLink>
        <NavLink to='/help'>Help</NavLink>
    </header>
);

export default AppBar;