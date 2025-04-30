import React from 'react'
import logoLeft from '../assets/images/logoLeft.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
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
                  <h3 className="fw-semibold">Register now</h3>
                  <h6 className="mb-4 text-445B64">Please enter your credentials to sign up</h6>
                  <input class="form-control mb-3 rounded-3" type="text" placeholder="Full name" aria-label="example" />
                  <input class="form-control mb-3 rounded-3" type="email" placeholder="Your email address" aria-label="example" />
                  <input class="form-control mb-3 rounded-3" type="number" placeholder="Your phone number" aria-label="example" />
                  <input class="form-control mb-3 rounded-3" type="password" placeholder="Password" aria-label="example" />
                  <input class="form-control mb-2 rounded-3" type="password" placeholder="Confirm Password" aria-label="example" />
                  <div class="form-check form-switch mb-4 p-0">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                      <label class="form-check-label text-445B64" for="switchCheckDefault">Remember me </label>
                    </div>
                  </div>
                  <button type="button" class="btn w-100 sign-btn mb-3">Sign Up</button>
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