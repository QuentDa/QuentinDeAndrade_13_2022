import React, { useEffect } from 'react';
import { setToken } from '../../store/features/authSlice';
import { getToken } from '../../store/features/authSelector';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png'
import './Header.css';

export default function Header() {
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        } else {
            localStorage.removeItem('token');
        }
    }, [dispatch]);
    
    function handleLogout() {
        localStorage.removeItem('token');
        dispatch(setToken(''));
    }

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
                    {token ? (
                        <span onClick={handleLogout} className="main-nav-item">
                            Se déconnecter
                        </span>
                    ) : (
                        <NavLink to="/SignIn" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    )}
                </div>
            </nav>
        </div>
    );
}