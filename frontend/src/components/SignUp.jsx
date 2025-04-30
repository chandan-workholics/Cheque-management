import React, { useState } from 'react'
import logoLeft from '../assets/images/logoLeft.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from '../pages/Common_Method/api';

const SignUp = () => {
  const navigate = useNavigate();
  const[formData,setFormData] = useState({
    fullName:'',
    email:'',
    mobile:'',
    password:'',
    confirmPassword:''
  })
  const[formErrors,setFormErrors] = useState({});
  const[loading,setLoading] = useState(false);

  const validateForm = () => {
    const { fullName, email, mobile, password, confirmPassword } = formData;
    let errors = {};
  
    if (fullName.trim() === '') {
      errors.fullName = 'Full Name is required';
    }
  
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailPattern.test(email)) {
        errors.email = 'Invalid email format';
      }
    }

    if (mobile.trim() === '') {
      errors.mobile = 'Mobile number is required';
    }else{
      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(mobile)) {
          errors.mobile = 'Mobile number must be exactly 10 digits.';
      }
    }
  
    if (password.trim() === '') {
      errors.password = 'Password is required';
    }
  
    if (confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormData({...formData, [name]:value })
  };

  const handleMobileSubmit = async(e) =>{
    e.preventDefault();
    if(!validateForm()){
      return;
    }
    setLoading(true);
    try {
      const response = await callAPI.post(`/users/registerUser`,formData)
      if(response.status >= 200 && response.status < 300){
        setTimeout(() => {
          toast.success('Sign up successfully');
          navigate('/')
        }, 2000);
      }else{
        setTimeout(() => {
          toast.error("Failed to sign up")
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
                  <h3 className="fw-semibold">Register now</h3>
                  <h6 className="mb-4 text-445B64">Please enter your credentials to sign up</h6>
                  <input className="form-control mb-3 rounded-3" type="text" id='fullName' name='fullName' value={formData.fullName} onChange={handleChange} placeholder="Full name" aria-label="example" />
                  <input className="form-control mb-3 rounded-3" type="email" id='email' name='email' value={formData.email} onChange={handleChange} placeholder="Your email address" aria-label="example" />
                  <input className="form-control mb-3 rounded-3" type="number" id='mobile' name='mobile' value={formData.mobile} onChange={handleChange} placeholder="Your phone number" aria-label="example" />
                  <input className="form-control mb-3 rounded-3" type="password" id='password' name='password' value={formData.password} onChange={handleChange} placeholder="Password" aria-label="example" />
                  <input className="form-control mb-2 rounded-3" type="password" id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" aria-label="example" />
                  <div className="form-check form-switch mb-4 p-0">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                      <label className="form-check-label text-445B64" htmlFor="switchCheckDefault">Remember me </label>
                    </div>
                  </div>
                  <button type="button" className="btn w-100 sign-btn mb-3" onClick={handleMobileSubmit}>Sign Up</button>
                  <h6 className="text-center text-445B64">Don't have an account? <Link to='/cheque-management/' className='text-00C7BE text-decoration-none'> Sign up</Link></h6>
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

export default SignUp