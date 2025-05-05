import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
const URL = process.env.REACT_APP_URL;

const AllCheques = () => {
    const usersData = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        companyName: 'State Bank of India',
        licenseNo: `64644444`,
        chequeType: 'Self Check',
        amount: '$487441',
        comment: 'Lorem Ipsum..',
        date: 'July 14, 2015',
        status: 'Active'
    }));

    const [cheques, setCheques] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = usersData.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(usersData.length / rowsPerPage);

    const fetchCheques = async () => {
        try {
            const response = await axios.get(`${URL}/admin/get-all-checks`);
            if (response.status >= 200 && response.status < 300) {
                setCheques(response?.data?.data)
            }
        } catch (error) {
            console.log("Error in fetching data", error);
        }
    }

    useEffect(() => {
       fetchCheques();
    })

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
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 16" fill="none">
                                                                            <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                                                                        </svg>
                                                                    </div>
                                                                    <span className="text-445B64 fw-semibold">All Cheques</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6">
                                                            <div className="row">
                                                                <div className="d-flex">
                                                                    <div className="position-relative pe-0 pe-lg-4"
                                                                        style={{ width: "-webkit-fill-available" }}>
                                                                        <input className="form-control rounded-3 me-2 shadow-none bg-F0F5F6" style={{ paddingLeft: "40px" }}
                                                                            type="search" placeholder="Search" aria-label="Search" />
                                                                        <i className="fa-solid fa-magnifying-glass text-445B64 position-absolute top-0 start-0"
                                                                            style={{ margin: "11px" }}></i>
                                                                    </div>
                                                                    <div className="table-circular-icon bg-F0F5F6" style={{ cursor: "pointer" }}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12"
                                                                            viewBox="0 0 14 12" fill="none">
                                                                            <path
                                                                                d="M2.16667 13.6668V7.8335H0.5V6.16683H5.5V7.8335H3.83333V13.6668H2.16667ZM2.16667 4.50016V0.333496H3.83333V4.50016H2.16667ZM5.5 4.50016V2.8335H7.16667V0.333496H8.83333V2.8335H10.5V4.50016H5.5ZM7.16667 13.6668V6.16683H8.83333V13.6668H7.16667ZM12.1667 13.6668V11.1668H10.5V9.50016H15.5V11.1668H13.8333V13.6668H12.1667ZM12.1667 7.8335V0.333496H13.8333V7.8335H12.1667Z"
                                                                                fill="#445B64" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card border-0 rounded-3">
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
                                                                        {cheques?.map((cheque, index) => (
                                                                            <tr key={index}>
                                                                                <td className="text-center">
                                                                                    <input className="form-check-input table-checkbox" type="checkbox" />
                                                                                </td>
                                                                                <td>{indexOfFirstRow + index + 1}</td>
                                                                                <td>{cheque.customerName}</td>
                                                                                <td>{cheque.company}</td>
                                                                                <td>{cheque.licenseNo}</td>
                                                                                <td>{cheque.chequeType}</td>
                                                                                <td>{cheque.amount}</td>
                                                                                <td>{cheque.comment}</td>
                                                                                <td>{cheque.date}</td>
                                                                                <td className="text-01A99A">{cheque.status}</td>
                                                                                <td>
                                                                                    <div className="d-flex justify-content-center">
                                                                                        <Link to={`/cm-admin/cheque-details/${cheque?._id}`} className="btn">
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

export default AllCheques