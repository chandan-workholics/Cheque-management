import React from 'react'
import logoLeft from '../assets/images/logoLeft.png'
import emailVerifyExpired from '../assets/images/emailVerifyExpired.png'
import { Link } from 'react-router-dom'

const VerifyEmailExpired = () => {
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
                                <div className="w-100 text-center">
                                    <img src={emailVerifyExpired} alt="" className="mb-3" style={{ width: '70px' }} />
                                    <h5 className="text-center fw-semibold">Email verification link expired</h5>
                                    <h6 className="mb-4 text-445B64 fs-14 text-center">Looks like the email verification link has expired. No worries we can send the link agin  </h6>
                                    <Link to='/cheque-management/email-verification-successfully' className="btn w-100 sign-btn mb-3">Resend verification link</Link>
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

export default VerifyEmailExpired