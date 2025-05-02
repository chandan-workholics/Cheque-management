import React, { useState } from 'react';
import logoLeft from '../assets/images/logoLeft.png'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <>
            <div className="container-fluid sign-page">
                <div className="row sign-main-container">
                    <div className="col-lg-6 sign-left-bg h-100 d-flex justify-content-center align-items-center">
                        <img src={logoLeft} alt="" className="" />
                    </div>
                    <div className="col-lg-6 h-100 bg-EEEEEE position-relative">
                        <div className="row h-100">
                            <div className="col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                                <div className="w-100">
                                    <h3 className="fw-semibold">Welcome!</h3>
                                    <h6 className="mb-4 text-445B64">Please enter your credentials to log in</h6>

                                    <input
                                        className="form-control mb-3 rounded-3"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your email address"
                                        aria-label="example"
                                        required
                                    />

                                    <div className="position-relative">
                                        <input
                                            className="form-control mb-1 rounded-3"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="Your password"
                                            aria-label="example"
                                            required
                                        />
                                        <span
                                            className="position-absolute end-0 top-0 mt-3 me-3"
                                            style={{ cursor: 'pointer' }}
                                            onClick={togglePasswordVisibility}
                                        >
                                            <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} text-445B64`}></i>
                                        </span>
                                    </div>

                                    <h6 className="text-end text-445B64 mb-3">
                                        <Link to="/cm-admin/forget-password" className="text-00C7BE text-decoration-none">
                                            Forget Password
                                        </Link>
                                    </h6>

                                    <Link to="/cm-admin/dashboard" className="btn w-100 sign-btn mb-3">Sign In</Link>

                                    {/* <h6 className="text-center text-445B64">
                                        Don't have an account?
                                        <Link to="/cm-admin/sign-up" className="text-00C7BE text-decoration-none"> Sign up</Link>
                                    </h6> */}
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute bottom-0 start-0 w-100">
                            <h6 className="text-445B64 text-center">Terms & Conditions • Privacy Policy</h6>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default SignIn