import React from 'react'
import logoLeft from '../assets/images/logoLeft.png'
import { Link } from 'react-router-dom'

const Otp = () => {
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
                                    <h6 className="mb-4 text-445B64">Please enter OTP to verify</h6>
                                    <form action="" className="">
                                        <div className="d-flex justify-content-around">
                                            <input className="form-control mb-3 rounded-3 otp-input" type="number" aria-label="example" />
                                            <input className="form-control mb-3 rounded-3 otp-input" type="number" aria-label="example" />
                                            <input className="form-control mb-3 rounded-3 otp-input" type="number" aria-label="example" />
                                            <input className="form-control mb-3 rounded-3 otp-input" type="number" aria-label="example" />
                                            <input className="form-control mb-3 rounded-3 otp-input" type="number" aria-label="example" />
                                            <input className="form-control mb-3 rounded-3 otp-input" type="number" aria-label="example" />
                                        </div>
                                        <Link to='/cheque-management/dashboard' className="btn w-100 sign-btn mb-3">Verify</Link>
                                    </form>
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

export default Otp