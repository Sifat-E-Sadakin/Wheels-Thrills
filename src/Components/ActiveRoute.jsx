import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "font-bold text-purple-950"
                    : ""
                       
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;