import React from 'react'
import Header from '../components/header';
import Sidebar from '../components/Sidebar';

const TicketDetails = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="">
                    <div className="row mh-100vh">
                        <div className="col-lg-3 col-xl-2 d-none d-lg-block position-relative">
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
                                                        <div className="col-8 col-lg-6">
                                                            <div className="d-flex justify-content-between mb-lg-0">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="table-circular-icon bg-F0F5F6 me-3"
                                                                        style={{ cursor: "pointer" }}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 12 13" fill="none">
                                                                            <path d="M6 0.5C2.68941 0.5 0 2.786 0 5.6C0 8.414 2.68941 10.7 6 10.7H6.35294V12.5C9.78353 11.096 12 8.3 12 5.6C12 2.786 9.31059 0.5 6 0.5ZM6.70588 9.2H5.29412V8H6.70588V9.2ZM6.70588 7.1H5.29412C5.29412 5.15 7.41177 5.3 7.41177 4.1C7.41177 3.44 6.77647 2.9 6 2.9C5.22353 2.9 4.58824 3.44 4.58824 4.1H3.17647C3.17647 2.774 4.44 1.7 6 1.7C7.56 1.7 8.82353 2.774 8.82353 4.1C8.82353 5.6 6.70588 5.75 6.70588 7.1Z" fill="#000000" />
                                                                        </svg>
                                                                    </div>
                                                                    <span className="text-445B64 fw-medium">Ticket ID 0002</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 col-lg-6 d-flex justify-content-end align-items-center">
                                                            <div className="d-flex justify-content-end">
                                                                <button className="btn btn-sm rounded-2 btn-light text-445B64">
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
                                                <div className="card-body p-0">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="border-bottom">
                                                                <div className="row gap-3 p-3">
                                                                    <div class="col-12 col-lg-3 col-xl-2 ">
                                                                        <select class="form-control bg-F0F5F6">
                                                                            <option value="">New</option>
                                                                            <option value="Personal">New 1</option>
                                                                            <option value="Business">New 2</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-12 col-lg-3 col-xl-2">
                                                                        <select class="form-control bg-F0F5F6">
                                                                            <option value="">Jane smith</option>
                                                                            <option value="Personal">New 1</option>
                                                                            <option value="Business">New 2</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div className="d-lg-flex ">
                                                                    <div className="w-100 w-lg-50">
                                                                        <h6 className="text-445B64 fw-semibold p-3 mb-0 border-end border-bottom">User Info</h6>
                                                                        <div className="border-end">
                                                                        <div className="table-responsive p-2">
                                                                            <table className="table mb-0">
                                                                                <tr>
                                                                                    <td className='text-445B64-img w-60px'>Name</td>
                                                                                    <td><span className="text-445B64-img">-</span> John Doe</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className='text-445B64-img w-60px'>Email</td>
                                                                                    <td><span className="text-445B64-img">-</span> john@example.com</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className='text-445B64-img w-60px'>Phone</td>
                                                                                    <td><span className="text-445B64-img">-</span> 6466466464654</td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-100 w-lg-50">
                                                                        <h6 className="text-445B64 fw-semibold p-3 mb-0  border-bottom">Ticket Info</h6>
                                                                        <div className="table-responsive p-2">
                                                                            <table className="table mb-0">
                                                                                <tr>
                                                                                    <td className='text-445B64-img w-110px'>Priority</td>
                                                                                    <td><span className="text-445B64-img">-</span> High</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className='text-445B64-img w-110px'>Created</td>
                                                                                    <td><span className="text-445B64-img">-</span>  Apr 25, 2023</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className='text-445B64-img w-110px'>Last Updated</td>
                                                                                    <td><span className="text-445B64-img">-</span> Apr 28, 2023 02:15 PM</td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div className="row">
                                                                    
                                                                    <div className="col-12 col-lg-6">
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card border-0 rounded-3 mb-2">
                                                <div className="card-body p-0">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="border-bottom p-3">
                                                                <div className="text-muted fs-13 mb-1">
                                                                    Apr 27, 2023 11:32 AM
                                                                </div>
                                                                <h6 className='mb-0 fs-14'>Hi, I'm unable to login to my account since yesterday. Please help.
                                                                </h6>
                                                            </div>
                                                            <div className="border-bottom p-3">
                                                                <div className="text-muted fs-13 mb-1">
                                                                    Apr 28, 2023 11:32 AM
                                                                </div>
                                                                <h6 className='mb-0 fs-14'>Hello John, we are looking into it.</h6>
                                                            </div>
                                                            {/* Reply Box */}
                                                            <div className="p-3">
                                                                <textarea
                                                                    className="form-control bg-white mb-3 fs-14"
                                                                    placeholder="Write your reply"
                                                                    rows="3"
                                                                />
                                                                <div className="d-flex justify-content-between">
                                                                    <button className="btn bg-F6FFFE text-445B64 fs-14 me-2 me-lg-0" style={{ border: '1px solid #D7D7D7' }}>
                                                                        <span className="me-2 text-00C7BE">
                                                                            <i className="fa-solid fa-arrow-up-from-bracket text-4FD1C5 fs-6"></i>
                                                                        </span>
                                                                        Upload Attachment
                                                                    </button>
                                                                    <button className="btn sign-btn p-0 px-5 fs-14">
                                                                        Send reply
                                                                    </button>
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
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TicketDetails