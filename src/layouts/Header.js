import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to={'/'} className="NavLink">
                Home
            </NavLink>

            <NavLink to={'/show-users'} className="NavLink">
                Show User
            </NavLink>
            <NavLink to={'/add-users'} className="NavLink">
                Add User
            </NavLink>
        </nav>
    );
};

export default Header;
