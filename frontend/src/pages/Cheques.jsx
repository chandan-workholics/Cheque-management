import React from 'react'
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Cheques = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="">
                    <div className="row">
                        <div className="col-lg-2">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10 bg-F6F6F6">
                            <div className="main-content">
                                <div className="container-fluid p-3 px-2">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card border-0 rounded-3 mb-1">
                                                <div class="card-body p-2">
                                                    <div class="row">
                                                        <div class="col-12 col-lg-6">
                                                            <div class="d-flex justify-content-between mb-3 mb-lg-0">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="table-circular-icon bg-F0F5F6 me-3"
                                                                        style={{ cursor: "pointer" }}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 16" fill="none">
                                                                            <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                                                                        </svg>
                                                                    </div>
                                                                    <span class="text-445B64 fw-medium">All Cheques</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-lg-6">
                                                            <div className="row">
                                                                <div className="col-lg-7">
                                                                    <div class="d-flex position-relative"
                                                                        style={{ width: "-webkit-fill-available" }}>
                                                                        <input class="form-control form-control-sm rounded-3 me-2 shadow-none bg-F0F5F6" style={{ paddingLeft: "35px" }}
                                                                            type="search" placeholder="Search" aria-label="Search" />
                                                                        <i class="fa-solid fa-magnifying-glass text-445B64 position-absolute top-0 start-0"
                                                                            style={{ margin: "8px" }}></i>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-5 d-flex justify-content-around">
                                                                    <div className="">
                                                                        <button className='btn fs-14 text-445B64 p-0'>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                                                <path d="M9.49229 5.07022C9.66013 5.07022 9.82109 5.13689 9.93977 5.25557C10.0584 5.37425 10.1251 5.53521 10.1251 5.70305V8.86718H13.2893C13.4571 8.86718 13.6181 8.93386 13.7367 9.05253C13.8554 9.17121 13.9221 9.33217 13.9221 9.50001C13.9221 9.66785 13.8554 9.82881 13.7367 9.94749C13.6181 10.0662 13.4571 10.1328 13.2893 10.1328H10.1251V13.297C10.1251 13.4648 10.0584 13.6258 9.93977 13.7445C9.82109 13.8631 9.66013 13.9298 9.49229 13.9298C9.32445 13.9298 9.16349 13.8631 9.04481 13.7445C8.92614 13.6258 8.85946 13.4648 8.85946 13.297V10.1328H5.69533C5.52749 10.1328 5.36653 10.0662 5.24785 9.94749C5.12917 9.82881 5.0625 9.66785 5.0625 9.50001C5.0625 9.33217 5.12917 9.17121 5.24785 9.05253C5.36653 8.93386 5.52749 8.86718 5.69533 8.86718H8.85946V5.70305C8.85946 5.53521 8.92614 5.37425 9.04481 5.25557C9.16349 5.13689 9.32445 5.07022 9.49229 5.07022Z" fill="#445B64" />
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.10778C0 5.27272 0 3.85518 0.551825 2.76672C1.03954 1.81439 1.81439 1.03954 2.76672 0.551825C3.85012 3.77194e-08 5.27272 0 8.10778 0H10.8922C13.7273 0 15.1448 3.77194e-08 16.2333 0.551825C17.1863 1.03657 17.9546 1.81115 18.4482 2.76672C19 3.85012 19 5.27272 19 8.10778V10.8922C19 13.7273 19 15.1448 18.4482 16.2333C17.9605 17.1856 17.1856 17.9605 16.2333 18.4482C15.1499 19 13.7273 19 10.8922 19H8.10778C5.27272 19 3.85518 19 2.76672 18.4482C1.81439 17.9605 1.03954 17.1856 0.551825 16.2333C0 15.1499 0 13.7273 0 10.8922V8.10778ZM8.10019 1.27325H10.8846C12.3275 1.27325 13.3273 1.27325 14.112 1.3378C14.8778 1.40108 15.3182 1.51752 15.6561 1.68712C16.3689 2.05243 16.9488 2.6324 17.3141 3.34512C17.4837 3.67799 17.6002 4.11844 17.6635 4.88922C17.7268 5.67013 17.728 6.67379 17.728 8.11664V10.9011C17.728 12.3439 17.728 13.3438 17.6635 14.1285C17.6002 14.8942 17.4837 15.3347 17.3141 15.6726C16.9502 16.3863 16.3699 16.9667 15.6561 17.3306C15.3233 17.5002 14.8828 17.6166 14.112 17.6799C13.3311 17.7432 12.3275 17.7445 10.8846 17.7445H8.10019C6.65734 17.7445 5.65747 17.7445 4.87277 17.6812C4.10705 17.6179 3.6666 17.5002 3.32867 17.3306C2.61492 16.9667 2.03457 16.3863 1.67066 15.6726C1.50107 15.3397 1.38463 14.9005 1.32134 14.1285C1.25806 13.3476 1.25679 12.3439 1.25679 10.9011V8.11664C1.25679 6.67379 1.25679 5.67393 1.32134 4.88922C1.38463 4.1235 1.50107 3.68305 1.67066 3.34512C2.03598 2.6324 2.61595 2.05243 3.32867 1.68712C3.66154 1.51752 4.10198 1.40108 4.87277 1.3378C5.65368 1.27451 6.65734 1.27325 8.10019 1.27325Z" fill="#445B64" />
                                                                            </svg>
                                                                            <span className="ms-2">Add New Checks</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="table-circular-icon bg-F0F5F6" style={{ cursor: "pointer" }}>
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
                                            <div class="card border-0 rounded-3">
                                                <div class="card-body p-0">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="table-responsive">
                                                                <table class="table rounded-3">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col" class="text-center">
                                                                                <input class="form-check-input table-checkbox"
                                                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                                            </th>
                                                                            <th scope="col" class="text-445B64">SNo.</th>
                                                                            <th scope="col" class="text-445B64">Customer Name</th>
                                                                            <th scope="col" class="text-445B64">Company Name</th>
                                                                            <th scope="col" class="text-445B64">License No</th>
                                                                            <th scope="col" class="text-445B64 text-center">Check Type</th>
                                                                            <th scope="col" class="text-445B64">Amount</th>
                                                                            <th scope="col" class="text-445B64">Comment</th>
                                                                            <th scope="col" class="text-445B64">Date
                                                                            </th>
                                                                            <th scope="col" class="text-445B64 text-center">Status</th>
                                                                            <th scope="col" class="text-445B64 text-center">Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="text-center">
                                                                                <input class="form-check-input table-checkbox"
                                                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                                            </td>
                                                                            <td scope="row"> 01 </td>
                                                                            <td>Rohit Sharma</td>
                                                                            <td>State Bank of India</td>
                                                                            <td>64644444</td>
                                                                            <td>Self Check</td>
                                                                            <td>$487441</td>
                                                                            <td>Lorem Ipsum..</td>
                                                                            <td>July 14, 2015</td>
                                                                            <td class="text-01A99A">Active</td>
                                                                            <td class="">
                                                                                <div className="d-flex justify-content-center">
                                                                                    <Link to="/cheque-management/cheque-details" className="btn">
                                                                                        <i class="fa-solid fa-eye text-445B64"></i>
                                                                                    </Link>
                                                                                    <button className="btn">
                                                                                        <i class="fa-solid fa-trash-can text-danger"></i>
                                                                                    </button>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cheques