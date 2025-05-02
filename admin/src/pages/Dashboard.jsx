import React from 'react'
import Header from '../components/header';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="">
                    <div className="row mh-100vh">
                        <div className="col-lg-2 col-xl-2 position-relative">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10 col-xl-10 bg-F6F6F6">
                            <div className="main-content">
                                <div className="container-fluid p-3 px-2">
                                    {/* Status Cards */}
                                    <div className="row mb-2">
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-F2F2F7 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M14.6667 18.6667H5.33333V16H14.6667M18.6667 13.3333H5.33333V10.6667H18.6667M18.6667 8H5.33333V5.33333H18.6667M21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#445B64" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1 fw-medium text-445B64">Total Vendor</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">5000</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-F2F2F7 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M14.6667 18.6667H5.33333V16H14.6667M18.6667 13.3333H5.33333V10.6667H18.6667M18.6667 8H5.33333V5.33333H18.6667M21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#445B64" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1 fw-medium text-445B64">New Checks</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">50</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-F2F2F7 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M14.6667 18.6667H5.33333V16H14.6667M18.6667 13.3333H5.33333V10.6667H18.6667M18.6667 8H5.33333V5.33333H18.6667M21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#445B64" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1 fw-medium text-445B64">Good Checks</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">30</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-F2F2F7 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M14.6667 18.6667H5.33333V16H14.6667M18.6667 13.3333H5.33333V10.6667H18.6667M18.6667 8H5.33333V5.33333H18.6667M21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#445B64" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1 fw-medium text-445B64">Bed Checks</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">80</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-F2F2F7 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M14.6667 18.6667H5.33333V16H14.6667M18.6667 13.3333H5.33333V10.6667H18.6667M18.6667 8H5.33333V5.33333H18.6667M21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#445B64" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1 fw-medium text-445B64">Today’s Status</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">$1,000</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-F2F2F7 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M14.6667 18.6667H5.33333V16H14.6667M18.6667 13.3333H5.33333V10.6667H18.6667M18.6667 8H5.33333V5.33333H18.6667M21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#445B64" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1 fw-medium text-445B64">Weekly Status</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">$25,000</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-F2F2F7 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M14.6667 18.6667H5.33333V16H14.6667M18.6667 13.3333H5.33333V10.6667H18.6667M18.6667 8H5.33333V5.33333H18.6667M21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#445B64" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1 fw-medium text-445B64">Monthly Status</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">$53,000</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-xl-7 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-5 mb-3">
                                            <div className="card shadow-sm border-0 rounded-4">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center">
                                                       
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

export default Dashboard