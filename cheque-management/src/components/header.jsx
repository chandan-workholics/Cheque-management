import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {

    return (
        <>
            <div className="header w-100">
                <nav className="navbar navbar-expand-lg bg-body-white px-3">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src={logo} alt="" className="me-2" />
                            <span>Check Management</span>
                        </a>
                    </div>
                    {/* Navbar right-side */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-bell fs-5"></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                <i className="fa-solid fa-circle-user fs-5"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header