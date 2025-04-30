import React, { useState } from 'react';
import logoLeft from '../assets/images/logoLeft.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const URL = process.env.REACT_APP_URL;

const Otp = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const navigate = useNavigate();
    const email = localStorage.getItem("email");

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");

        try {
            const res = await axios.post(`${URL}/auth/verify-otp`, {
                email,
                otp: enteredOtp
            });

            if (res.data.message === "OTP verified. Registration complete.") {
                setTimeout(() => {
                    toast.success("OTP Verified Successfully!")
                    navigate('/cheque-management/');
                }, 1000);
            }
        } catch (err) {
            setTimeout(() => {
                toast.error("OTP Verified Failed!")
            }, 1000);
        }
    };

    const handleResendOtp = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem("email");
        if (!email) {
            setTimeout(() => {
                toast.error("Email not found. Please go back and register again.")
            }, 1000);
            return;
        }
        try {
            const res = await axios.post(`${URL}/auth/resend-otp`, {
                email,
            });
            if (res.status === 200) {
                setTimeout(() => {
                    toast.success("otp resent !")
                }, 1000);
            }
        } catch (error) {
            console.error("Error resending OTP:", error);
            setTimeout(() => {
                toast.error("Failed to resend OTP. Please try again.")
            }, 1000);
        }
    };


    return (
        <div className="container-fluid sign-page">
            <div className="row sign-main-container">
                <div className="col-lg-6 sign-left-bg h-100 d-flex justify-content-center align-items-center">
                    <img src={logoLeft} alt="" />
                </div>
                <div className="col-lg-6 h-100 bg-EEEEEE position-relative">
                    <div className="row h-100">
                        <div className="col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                            <div className="w-100">
                                <h3 className="fw-semibold">Welcome!</h3>
                                <h6 className="mb-4 text-445B64">Please enter OTP to verify</h6>
                                <form onSubmit={handleVerify}>
                                    <div className="d-flex justify-content-around">
                                        {otp.map((data, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                className="form-control mb-3 rounded-3 otp-input text-center"
                                                maxLength="1"
                                                value={otp[index]}
                                                onChange={e => handleChange(e.target, index)}
                                                onFocus={e => e.target.select()}
                                            />
                                        ))}
                                    </div>
                                    <button type="submit" className="btn w-100 sign-btn mb-3">Verify</button>
                                </form>
                                <button type="submit" className="btn w-100 sign-btn mb-3" onClick={handleResendOtp}>Resend OTP</button>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute bottom-0 start-0 w-100">
                        <h6 className="text-445B64 text-center">Terms & Conditions • Privacy Policy</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
