import React, { useState } from 'react'
import logoLeft from '../assets/images/logoLeft.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const URL = process.env.REACT_APP_URL;

const SignIn = () => {
    const navigate = useNavigate();
    const[formData,setFormData] = useState({
        email:'',
        password:''
    })
     const[formErrors,setFormErrors] = useState({});
      const[loading,setLoading] = useState(false);

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

       const handleChange = (e) =>{
          const{name,value} = e.target;
          setFormData({...formData, [name]:value })
        };
      
        const handleSubmit = async(e) =>{
          e.preventDefault();
          const errors = validateForm();
          setFormErrors(errors);
          if (Object.keys(errors).length > 0) {
            return;
          }
          
          setLoading(true);
          try {
            const response = await axios.post(`${URL}/auth/login`,formData,{
              headers: {
                'Content-Type': 'application/json',
              }
            })
            console.log("response");
            if(response.status >= 200 && response.status < 300){
              setTimeout(() => {
                toast.success('Login successfully');
                navigate('/cheque-management/dashboard')
                localStorage.setItem("token", response.token)
                localStorage.setItem("role", response.role)
              }, 1000);
            }else{
              setTimeout(() => {
                toast.error("Failed to login")
              }, 2000);
            }
          } catch (error) {
            console.log("Error occured in submitting form",error);
            toast.error('An error occured while submitting the form');
          }finally{
            setLoading(false);
          }
        }
    return (
        <>
            <div className="container-fluid sign-page">
                <div className="row sign-main-container">
                     <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"  />
                    <div className="col-lg-6 sign-left-bg h-100 d-flex justify-content-center align-items-center">
                        <img src={logoLeft} alt="" className="" />
                    </div>
                    <div className="col-lg-6 h-100 bg-EEEEEE position-relative">
                        <div className="row h-100">
                            <div className="col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                                <div className="w-100">
                                    <h3 className="fw-semibold">Welcome!</h3>
                                    <h6 className="mb-4 text-445B64">Please enter your credentials to log in</h6>
                                    <input className="form-control mb-3 rounded-3" type="email" name='email' id='email' value={formData.email} onChange={handleChange} placeholder="Your email address" aria-label="example" />
                                    <input className="form-control mb-2 rounded-3" type="password" name='password' id='password' value={formData.password} onChange={handleChange} placeholder="Your password" aria-label="example" />
                                    <div className="form-check form-switch mb-4 p-0">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                                            <label className="form-check-label text-445B64" htmlFor="switchCheckDefault">Remember me </label>
                                        </div>
                                    </div>
                                    <button className="btn w-100 sign-btn mb-3" onClick={handleSubmit} >Sign In</button>
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