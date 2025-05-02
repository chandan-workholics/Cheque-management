import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

const MyTicket = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);

    const handleBack = () => {
        navigate('/cheque-management/support');
    }
    const fetchTickets = async () => {
        try {
            const vendorId = localStorage.getItem("userId");
            const response = await axios.get(`${URL}/complain/tickets/vendor/${vendorId}`)
            if (response.status >= 200 && response.status < 300) {
                setTickets(response?.data || [])
            }
        } catch (error) {
            console.log("Error in fetching complaints" + error.message);
        }
    }
    useEffect(() => {
        fetchTickets();
    }, [])
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="">
                    <div className="row mh-100vh">
                        <div className="col-lg-3 col-xl-2 position-relative">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9 col-xl-10 bg-F6F6F6">
                            <div className="main-content">
                                <div className="container-fluid p-3 px-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card border-0 rounded-3 mb-2">
                                                <div className="card-body p-2">
                                                    <div className="row">
                                                        <div className="col-12 col-lg-6">
                                                            <div className="d-flex justify-content-between mb-3 mb-lg-0">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="table-circular-icon bg-F0F5F6 me-3"
                                                                        style={{ cursor: "pointer" }}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                                                            <path d="M6 0.5C5.23002 0.5 4.49157 0.811674 3.94711 1.36646C3.40265 1.92124 3.09677 2.67368 3.09677 3.45827C3.09677 4.24285 3.40265 4.99529 3.94711 5.55008C4.49157 6.10486 5.23002 6.41653 6 6.41653C6.76998 6.41653 7.50843 6.10486 8.05289 5.55008C8.59735 4.99529 8.90323 4.24285 8.90323 3.45827C8.90323 2.67368 8.59735 1.92124 8.05289 1.36646C7.50843 0.811674 6.76998 0.5 6 0.5ZM2.90323 7.99427C2.13324 7.99427 1.3948 8.30595 0.850335 8.86073C0.305875 9.41551 0 10.168 0 10.9525V11.8897C0 12.4845 0.42271 12.991 0.99871 13.0864C4.31071 13.6379 7.68929 13.6379 11.0013 13.0864C11.2799 13.0397 11.5331 12.8938 11.716 12.6747C11.8989 12.4555 11.9995 12.1774 12 11.8897V10.9525C12 10.168 11.6941 9.41551 11.1497 8.86073C10.6052 8.30595 9.86676 7.99427 9.09677 7.99427H8.83355C8.68903 7.9948 8.54865 8.01741 8.41239 8.06212L7.74194 8.28537C6.61004 8.6619 5.38996 8.6619 4.25806 8.28537L3.58761 8.06212C3.45172 8.0177 3.30994 7.99482 3.16723 7.99427H2.90323Z" fill="#445B64" />
                                                                        </svg>
                                                                    </div>
                                                                    <span className="text-445B64 fw-medium">My Ticket</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6">
                                                            <div className="d-flex justify-content-end">
                                                                <button className="btn btn-sm rounded-2 btn-light text-445B64" onClick={handleBack}>
                                                                    <i className="fa-solid fa-arrow-left-long me-2 text-445B64"></i>
                                                                    Back
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card border-0 rounded-3 mb-2">
                                                <div className="card-body p-2">
                                                    <div className="row">
                                                        <div className="col-12 col-lg-6">
                                                            <div className="d-flex justify-content-between mb-3 mb-lg-0">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="d-flex gap-4">
                                                                        <div className="form-check align-items-center">
                                                                            <input className="form-check-input table-checkbox"
                                                                                type="checkbox" value="" id="flexCheckDefault" />
                                                                            <label className="form-check-label ms-2" htmlFor="all">All</label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input table-checkbox"
                                                                                type="checkbox" value="" id="flexCheckDefault" />
                                                                            <label className="form-check-label ms-2" htmlFor="inprogress">In Progress</label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input table-checkbox"
                                                                                type="checkbox" value="" id="flexCheckDefault" />
                                                                            <label className="form-check-label ms-2" htmlFor="completed">Completed</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card border-0 rounded-3 mb-2 overflow-hidden">
                                                <div className="card-body p-0">
                                                    <div className="table-responsive">
                                                        <table className="table table-borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th className='border-bottom'>S.No</th>
                                                                    <th className='border-bottom'>Subject</th>
                                                                    <th className='border-bottom'>Status</th>
                                                                    <th className='border-bottom'>Category</th>
                                                                    <th className='border-bottom'>Descrition</th>
                                                                    <th className='border-bottom'></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                                {/* Ticket Row 1 */}
                                                                {tickets?.map((ticket, index) => (
                                                                    <tr key={index} data-bs-toggle="collapse" data-bs-target={`#ticket${index}`} className="cursor-pointer">
                                                                        <td>{index + 1}</td>
                                                                        <td>{ticket.subject}</td>
                                                                        <td><span className="text-primary">{ticket.status}</span></td>
                                                                        <td>{ticket.category}</td>
                                                                        <td>{ticket.description}</td>
                                                                        <td><i className="fa-solid fa-chevron-down text-01A99A"></i></td>
                                                                    </tr>
                                                                ))}
                                                                <tr className="collapse" id="ticket1">
                                                                    <td className='border-bottom bg-FAFAFA' colSpan="6">
                                                                        {/* Message 1 */}
                                                                        <div className="border-bottom">
                                                                            <div className="text-muted fs-13 mb-1">Apr 27, 2023 11:32 AM</div>
                                                                            <h6 className='fs-14'>Hi, I'm unable to login to my account since yesterday. Please help.</h6>
                                                                            <div className="mb-2 btn btn-light border py-0 px-2 border-bottom">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                                                                                    <path d="M5.60938 0.5H1.14062C0.691922 0.5 0.328125 0.863797 0.328125 1.3125V12.6875C0.328125 13.1362 0.691922 13.5 1.14062 13.5H8.85938C9.30808 13.5 9.67188 13.1362 9.67188 12.6875V4.5627L5.60938 0.5ZM8.85938 4.89928V4.96875H5.20312V1.3125H5.273L8.85938 4.89928ZM1.14062 12.6875V1.3125H4.39062V5.78125H8.85938V12.6875H1.14062Z" fill="#445B64" />
                                                                                </svg>
                                                                                <span className="text-445B64 fs-13 ms-1">screenshot.png</span>
                                                                            </div>
                                                                        </div>
                                                                        {/* Message 2 */}
                                                                        <div className="border-bottom ">
                                                                            <div className="text-muted my-2 fs-13">Apr 28, 2023 11:15 AM</div>
                                                                            <p>Hello John, we are looking into it.</p>
                                                                        </div>
                                                                        {/* Reply Box */}
                                                                        <div className="mt-3">
                                                                            <textarea className="form-control bg-FAFAFA mb-3 fs-14" placeholder="Write your reply" rows="3" disabled></textarea>
                                                                            <div className="d-flex justify-content-between">
                                                                                <button className="btn bg-F6FFFE text-445B64 fs-14" style={{ border: '1px solid #D7D7D7' }}>
                                                                                    <span className="me-2 text-00C7BE"><i class="fa-solid fa-arrow-up-from-bracket text-4FD1C5 fs-6"></i></span>
                                                                                    Upload Attachment</button>
                                                                                <button className="btn sign-btn p-0 px-5 fs-14">Send reply</button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MyTicket