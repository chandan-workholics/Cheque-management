import React from 'react';
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setTimeout(() => {
            toast.success("Logged out successfully!")
        }, 1000);
        setTimeout(() => {
            navigate("/cheque-management/");
        }, 2000);
    };

    return (
        <>
            <div className="header w-100">
                <nav className="navbar navbar-expand-lg bg-body-white px-3 w-100">
                    <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false}  closeOnClick  rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                    <div className="d-flex align-items-center">
                        <Link className="navbar-brand d-flex align-items-center" to=''>
                            <img src={logo} alt="" className="me-2" />
                            <span className='fs-6 fw-semibold'>Check Management</span>
                        </Link>
                    </div>
                    {/* Navbar right-side */}

                    <ul className="navbar-nav ms-auto mb-lg-0 d-flex flex-row">
                        <li className="nav-item me-lg-0">
                            <Link className="nav-link header-icon me-2" to=''>
                                <i className="fa-solid fa-bell fs-5"></i>
                            </Link>
                        </li>
                        <li className="nav-item dropdown me-4">
                            <Link className="nav-link header-icon dropdown-toggle " to='' data-bs-toggle="dropdown">
                                <i className="fa-solid fa-circle-user fs-5"></i>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end mt-3">
                                <li><Link className="dropdown-item" to=''>Profile</Link></li>
                                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </li>
                        <li className="nav-item me-lg-0 d-block d-lg-none">
                            <Link className="nav-link" to=''>
                                <button className="btn border-0 bg-transparent p-0 mb-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="offcanvas offcanvas-start w-75" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Cheque Management</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="sidebar d-flex flex-column py-3 px-1">
                        <ul className="nav nav-pills flex-column mb-auto gap-2">
                            <li>
                                <Link to="/cheque-management/dashboard" className="nav-link active">
                                    <div className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                            <path d="M7.66289 3.46751C7.61927 3.42578 7.56124 3.4025 7.50088 3.4025C7.44052 3.4025 7.38248 3.42578 7.33887 3.46751L1.94531 8.61995C1.92241 8.64186 1.90418 8.66819 1.89175 8.69735C1.87931 8.7265 1.87291 8.75788 1.87295 8.78958L1.87207 13.6253C1.87207 13.874 1.97084 14.1124 2.14666 14.2882C2.32247 14.464 2.56093 14.5628 2.80957 14.5628H5.625C5.74932 14.5628 5.86855 14.5134 5.95645 14.4255C6.04436 14.3376 6.09375 14.2184 6.09375 14.0941V10.1097C6.09375 10.0475 6.11844 9.98792 6.1624 9.94396C6.20635 9.90001 6.26596 9.87532 6.32812 9.87532H8.67187C8.73403 9.87532 8.79365 9.90001 8.8376 9.94396C8.88155 9.98792 8.90625 10.0475 8.90625 10.1097V14.0941C8.90625 14.2184 8.95563 14.3376 9.04354 14.4255C9.13145 14.5134 9.25068 14.5628 9.375 14.5628H12.1893C12.4379 14.5628 12.6764 14.464 12.8522 14.2882C13.028 14.1124 13.1268 13.874 13.1268 13.6253V8.78958C13.1268 8.75788 13.1204 8.7265 13.108 8.69735C13.0955 8.66819 13.0773 8.64186 13.0544 8.61995L7.66289 3.46751Z" fill="white" />
                                            <path d="M14.3825 7.65369L12.1911 5.5572V2.37585C12.1911 2.25153 12.1417 2.13231 12.0538 2.0444C11.9659 1.95649 11.8467 1.9071 11.7223 1.9071H10.3161C10.1918 1.9071 10.0725 1.95649 9.98464 2.0444C9.89673 2.13231 9.84735 2.25153 9.84735 2.37585V3.31335L8.15047 1.69089C7.99168 1.53035 7.75555 1.43835 7.50037 1.43835C7.24608 1.43835 7.01053 1.53035 6.85174 1.69119L0.620299 7.6531C0.438073 7.82888 0.415221 8.11804 0.581041 8.30847C0.622681 8.35654 0.673667 8.39563 0.730894 8.42337C0.788122 8.4511 0.850395 8.46691 0.913924 8.46981C0.977453 8.47272 1.04091 8.46266 1.10043 8.44026C1.15995 8.41787 1.21429 8.38359 1.26014 8.33953L7.33924 2.53054C7.38286 2.48882 7.44089 2.46553 7.50125 2.46553C7.56161 2.46553 7.61965 2.48882 7.66327 2.53054L13.7429 8.33953C13.8325 8.42541 13.9525 8.47228 14.0765 8.46986C14.2006 8.46745 14.3186 8.41594 14.4048 8.32663C14.5846 8.14031 14.5697 7.83269 14.3825 7.65369Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className="">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cheque-management/cheques" className="nav-link">
                                    <div className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                            <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                                        </svg>
                                    </div>
                                    <span className="">Cheques</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='' className="nav-link">
                                    <div className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                                            <path d="M7.875 6.45H12.6875L7.875 1.775V6.45ZM1.75 0.5H8.75L14 5.6V15.8C14 16.2509 13.8156 16.6833 13.4874 17.0021C13.1592 17.3209 12.7141 17.5 12.25 17.5H1.75C1.28587 17.5 0.840752 17.3209 0.512563 17.0021C0.184374 16.6833 0 16.2509 0 15.8V2.2C0 1.2565 0.77875 0.5 1.75 0.5ZM2.625 15.8H4.375V10.7H2.625V15.8ZM6.125 15.8H7.875V9H6.125V15.8ZM9.625 15.8H11.375V12.4H9.625V15.8Z" fill="#445B64" />
                                        </svg>
                                    </div>
                                    <span className="">Report</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='' className="nav-link">
                                    <div className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <mask id="mask0_2104_254" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                                <rect width="20" height="20" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_2104_254)">
                                                <path d="M11.6666 9.16666C12.3611 9.16666 12.9513 8.92361 13.4375 8.4375C13.9236 7.95139 14.1666 7.36111 14.1666 6.66666C14.1666 5.97222 13.9236 5.38194 13.4375 4.89583C12.9513 4.40972 12.3611 4.16666 11.6666 4.16666C10.9722 4.16666 10.3819 4.40972 9.89579 4.89583C9.40968 5.38194 9.16663 5.97222 9.16663 6.66666C9.16663 7.36111 9.40968 7.95139 9.89579 8.4375C10.3819 8.92361 10.9722 9.16666 11.6666 9.16666ZM6.66663 15C6.20829 15 5.81593 14.8368 5.48954 14.5104C5.16315 14.184 4.99996 13.7917 4.99996 13.3333V3.33333C4.99996 2.875 5.16315 2.48264 5.48954 2.15625C5.81593 1.82986 6.20829 1.66666 6.66663 1.66666H16.6666C17.125 1.66666 17.5173 1.82986 17.8437 2.15625C18.1701 2.48264 18.3333 2.875 18.3333 3.33333V13.3333C18.3333 13.7917 18.1701 14.184 17.8437 14.5104C17.5173 14.8368 17.125 15 16.6666 15H6.66663ZM3.33329 18.3333C2.87496 18.3333 2.4826 18.1701 2.15621 17.8437C1.82982 17.5174 1.66663 17.125 1.66663 16.6667V5H3.33329V16.6667H15V18.3333H3.33329ZM6.66663 13.3333H16.6666C16.0833 12.5417 15.3507 11.9271 14.4687 11.4896C13.5868 11.0521 12.6527 10.8333 11.6666 10.8333C10.6805 10.8333 9.74649 11.0521 8.86454 11.4896C7.9826 11.9271 7.24996 12.5417 6.66663 13.3333Z" fill="#445B64" />
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="">Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='' className="nav-link">
                                    <div className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                            <path d="M6.08333 17.3333L5.75 14.6667C5.56944 14.5972 5.39931 14.5139 5.23958 14.4167C5.07986 14.3194 4.92361 14.2153 4.77083 14.1042L2.29167 15.1458L0 11.1875L2.14583 9.5625C2.13194 9.46527 2.125 9.37153 2.125 9.28125V8.71875C2.125 8.62847 2.13194 8.53472 2.14583 8.4375L0 6.8125L2.29167 2.85416L4.77083 3.89583C4.92361 3.78472 5.08333 3.68055 5.25 3.58333C5.41667 3.48611 5.58333 3.40278 5.75 3.33333L6.08333 0.666664H10.6667L11 3.33333C11.1806 3.40278 11.3507 3.48611 11.5104 3.58333C11.6701 3.68055 11.8264 3.78472 11.9792 3.89583L14.4583 2.85416L16.75 6.8125L14.6042 8.4375C14.6181 8.53472 14.625 8.62847 14.625 8.71875V9.28125C14.625 9.37153 14.6111 9.46527 14.5833 9.5625L16.7292 11.1875L14.4375 15.1458L11.9792 14.1042C11.8264 14.2153 11.6667 14.3194 11.5 14.4167C11.3333 14.5139 11.1667 14.5972 11 14.6667L10.6667 17.3333H6.08333ZM8.41667 11.9167C9.22222 11.9167 9.90972 11.6319 10.4792 11.0625C11.0486 10.4931 11.3333 9.80555 11.3333 9C11.3333 8.19444 11.0486 7.50694 10.4792 6.9375C9.90972 6.36805 9.22222 6.08333 8.41667 6.08333C7.59722 6.08333 6.90625 6.36805 6.34375 6.9375C5.78125 7.50694 5.5 8.19444 5.5 9C5.5 9.80555 5.78125 10.4931 6.34375 11.0625C6.90625 11.6319 7.59722 11.9167 8.41667 11.9167Z" fill="#445B64" />
                                        </svg>
                                    </div>
                                    <span className="">Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header