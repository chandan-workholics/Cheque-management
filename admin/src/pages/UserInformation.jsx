import React, { useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const UserInformation = () => {
    const usersData = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        companyName: 'State Bank of India',
        licenseNo: `64644444`,
        chequeType:'Self Check',
        amount:'$487441',
        comment:'Lorem Ipsum..',
        date: 'July 14, 2015',
        status: 'Active'
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = usersData.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(usersData.length / rowsPerPage);

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
                                            <div className="card border-0 rounded-3 mb-3">
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
                                                                    <span className="text-445B64 fw-semibold">User Information</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center">
                                                            <div className="d-flex justify-content-end align-items-center">
                                                                <button className="btn btn-sm rounded-2 btn-light text-445B64">
                                                                    <i className="fa-solid fa-arrow-left-long me-2 text-445B64"></i>
                                                                    Back
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card border-0 rounded-3 mb-1">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex gap-5">
                                                            <div className="">
                                                                <h6 className="text-445B64 fs-14 mb-1">User Name </h6>
                                                                <h6 className="text-0D161A fw-medium mb-0">Darrell Steward</h6>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="text-445B64 fs-14 mb-1">Phone Number</h6>
                                                                <h6 className="text-0D161A fw-medium mb-0">(704) 555-0127</h6>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="text-445B64 fs-14 mb-1">Email Address</h6>
                                                                <h6 className="text-0D161A fw-medium mb-0">curtis.weaver@example.com</h6>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="text-445B64 fs-14 mb-1">Total Checks</h6>
                                                                <h6 className="text-0D161A fw-medium mb-0">2000</h6>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="text-445B64 fs-14 mb-1">Total Amount</h6>
                                                                <h6 className="text-0D161A fw-medium mb-0">$50000</h6>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="text-445B64 fs-14 mb-1">Date</h6>
                                                                <h6 className="text-0D161A fw-medium mb-0">July 14, 2015</h6>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex gap-5">
                                                            <div className="">
                                                                <h6 className="text-445B64 fs-14 mb-1">Status</h6>
                                                                <div className="">
                                                                    <button className="btn btn-sm rounded-2 lh-1 bg-4FD1C5 text-white me-3">
                                                                        Active
                                                                    </button>
                                                                    <button className="btn btn-sm rounded-2 lh-1 bg-E84D4D text-white">
                                                                        Deactive
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card border-0 rounded-3">
                                                <div className="card-body">
                                                    <h6 className="text-0D161A fw-medium mb-0">Check List</h6>
                                                </div>
                                                <div className="card-body p-0">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="table-responsive">
                                                                <table className="table rounded-3">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col" className="text-center">
                                                                                <input className="form-check-input table-checkbox"
                                                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                                            </th>
                                                                            <th scope="col" className="text-445B64">SNo.</th>
                                                                            <th scope="col" className="text-445B64">Customer Name</th>
                                                                            <th scope="col" className="text-445B64">Company Name</th>
                                                                            <th scope="col" className="text-445B64">License No</th>
                                                                            <th scope="col" className="text-445B64">Check Type</th>
                                                                            <th scope="col" className="text-445B64">Amount</th>
                                                                            <th scope="col" className="text-445B64">Comment</th>
                                                                            <th scope="col" className="text-445B64">Date</th>
                                                                            <th scope="col" className="text-445B64">Status</th>
                                                                            <th scope="col" className="text-445B64 text-center">Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {currentRows.map((user, index) => (
                                                                            <tr key={user.id}>
                                                                                <td className="text-center">
                                                                                    <input className="form-check-input table-checkbox" type="checkbox" />
                                                                                </td>
                                                                                <td>{indexOfFirstRow + index + 1}</td>
                                                                                <td>{user.name}</td>
                                                                                <td>{user.companyName}</td>
                                                                                <td>{user.licenseNo}</td>
                                                                                <td>{user.chequeType}</td>
                                                                                <td>{user.amount}</td>
                                                                                <td>{user.comment}</td>
                                                                                <td>{user.date}</td>
                                                                                <td className="text-01A99A">{user.status}</td>
                                                                                <td>
                                                                                    <div className="d-flex justify-content-center">
                                                                                        <Link to="/cheque-management/cheque-details" className="btn">
                                                                                            <i className="fa-solid fa-eye text-445B64"></i>
                                                                                        </Link>
                                                                                        <button className="btn">
                                                                                            <i className="fa-solid fa-trash-can text-danger"></i>
                                                                                        </button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Pagination Controls */}
                                            <div className="d-flex justify-content-between mt-4 mb-1 pt-2">
                                                <h6 className="mb-0 text-445B64">Showing 1 to 10 of 50 entries</h6>
                                                <nav>
                                                    <ul className="pagination justify-content-end">
                                                        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                                                            <button className="page-link border-0" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                                                                <i class="fa-solid fa-angle-left"></i>
                                                            </button>
                                                        </li>
                                                        {Array.from({ length: totalPages }, (_, i) => (
                                                            <li
                                                                key={i + 1}
                                                                className={`page-item ${currentPage === i + 1 && 'active'}`}
                                                            >
                                                                <button className="page-link border-0 mx-1 px-3 rounded-2" onClick={() => setCurrentPage(i + 1)}>
                                                                    {i + 1}
                                                                </button>
                                                            </li>
                                                        ))}
                                                        <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
                                                            <button className="page-link border-0" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
                                                                <i class="fa-solid fa-angle-right"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInformation