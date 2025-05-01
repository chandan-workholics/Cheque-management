import React, { useEffect, useState } from 'react'
import logoLeft from '../assets/images/logoLeft.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const URL = process.env.REACT_APP_URL;

const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);


    const validateForm = () => {
        const { email, password } = formData;
        let errors = {};
        if (email.trim() === '') {
            errors.email = 'Email is required';
        } else {
            const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!emailPattern.test(email)) {
                errors.email = 'Invalid email format';
            }
        }
        if (password.trim() === '') {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
         const { email, password } = formData;
            if ( !email.trim() || !password.trim()) {
              setTimeout(()=>{
                toast.error('Please enter the fields first');
              },1000)
              return;
            }
        const errors = validateForm();
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${URL}/auth/login`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status >= 200 && response.status < 300) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                // if (rememberMe) {
                //     localStorage.setItem('rememberedEmail', formData.email);
                //     localStorage.setItem('rememberedPassword', formData.password);
                // } else {
                //     localStorage.removeItem('rememberedEmail');
                //     localStorage.removeItem('rememberedPassword');
                // }
                setTimeout(() => {
                    toast.success('Login successfully');
                }, 1000);
                setTimeout(()=>{
                    navigate('/cheque-management/dashboard');
                },2000);
            } else {
                setTimeout(() => {
                    toast.error("Failed to login");
                }, 2000);
            }
        } catch (error) {
            console.log("User not registered. Please try again!", error);
            toast.error('User not registered. Please try again!');
        } finally {
            setLoading(false);
        }
    };
    // useEffect(() => {
    //     const savedEmail = localStorage.getItem('rememberedEmail');
    //     const savedPassword = localStorage.getItem('rememberedPassword');
    //     if (savedEmail) {
    //         setFormData({ email: savedEmail, password: savedPassword || '' });
    //         setRememberMe(true);
    //     }
    // }, []);
    return (
        <>
            <div className="container-fluid sign-page">
                <div className="row sign-main-container">
                    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
                    <div className="col-lg-6 sign-left-bg h-100 d-flex justify-content-center align-items-center">
                        <img src={logoLeft} alt="" className="" />
                    </div>
                    <div className="col-lg-6 h-100 bg-EEEEEE position-relative">
                        <div className="row h-100">
                            <div className="col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                                <div className="w-100">
                                    <h3 className="fw-semibold">Welcome!</h3>
                                    <h6 className="mb-4 text-445B64">Please enter your credentials to log in</h6>
                                    <input className="form-control mb-3 rounded-3" type="email" name='email' id='email' value={formData.email} onChange={handleChange} placeholder="Your email address" aria-label="example" required/>
                                    {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
                                    <input className="form-control mb-2 rounded-3" type="password" name='password' id='password' value={formData.password} onChange={handleChange} placeholder="Your password" aria-label="example" required />
                                    {formErrors.password && <small className="text-danger">{formErrors.password}</small>}
                                    {/* <div className="form-check form-switch mb-4 p-0">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                                            <label className="form-check-label text-445B64" htmlFor="switchCheckDefault" onChange={() => setRememberMe(!rememberMe)}>Remember me </label>
                                        </div>
                                    </div> */}
                                    <button className="btn w-100 sign-btn mb-3" onClick={handleSubmit} >  {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Signing in...
                                        </>
                                    ) : (
                                        "Sign In"
                                    )}</button>
                                    <h6 className="text-center text-445B64">Don't have an account?
                                        <Link to='/cheque-management/sign-up' className='text-00C7BE text-decoration-none'> Sign up</Link>
                                    </h6>
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