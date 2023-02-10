import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png'
import './Header.css';

export default function Header() {
    return (
        <div>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/SignIn" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}