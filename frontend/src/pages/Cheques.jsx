import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = process.env.REACT_APP_URL;

const Cheques = () => {
    const navigate = useNavigate();
    const [cheques, setCheques] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchCheques = async () => {
        try {
            const vendorId = localStorage.getItem('userId');
            const response = await axios.get(`${URL}/check/get-checkByVenderId/${vendorId}`);
            if (response.data.data) {
                setCheques(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching cheques:", error);
        }
    };

    const handleDeleteCheque = async (id) => {
        if (!window.confirm("Are you sure you want to delete this cheque?")) return;
        try {
            const response = await axios.delete(`${URL}/check/delete-check/${id}`);
            if (response.status >= 200 && response.status < 300) {
                toast.success("Cheque deleted successfully!");
                fetchCheques();
            }
        } catch (error) {
            toast.error("Error in deleting cheque: " + error.message);
            console.error("Error in deleting cheque", error);
        }
    };

    const handleAddCheque = () => {
        navigate("/cheque-management/dashboard");
    };

    const filteredCheques = cheques.filter((item, index) => {
        const search = searchTerm.toLowerCase();
        return (
            (index + 1).toString().includes(search) ||
            item.customerName?.toLowerCase().includes(search) ||
            item.company?.toLowerCase().includes(search) ||
            item.licenseNo?.toString().toLowerCase().includes(search) ||
            item.checkType?.toLowerCase().includes(search) ||
            item.amount?.toString().toLowerCase().includes(search) ||
            item.comment?.toLowerCase().includes(search) ||
            item.date?.toLowerCase().includes(search) ||
            item.status?.toLowerCase().includes(search)
        );
    });

    useEffect(() => {
        fetchCheques();
    }, []);

    return (
        <div className="container-fluid">
            <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Header />
            <div className="row mh-100vh">
                <div className="col-lg-3 col-xl-2 d-none d-lg-block position-relative">
                    <Sidebar />
                </div>
                <div className="col-lg-9 col-xl-10 bg-F6F6F6">
                    <div className="main-content">
                        <div className="container-fluid p-3 px-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card border-0 rounded-3 mb-1">
                                        <div className="card-body p-2">
                                            <div className="row">
                                                <div className="col-12 col-lg-6">
                                                    <div className="d-flex justify-content-between mb-3 mb-lg-0">
                                                        <div className="d-flex align-items-center">
                                                            <div className="table-circular-icon bg-F0F5F6 me-3" style={{ cursor: "pointer" }}>
                                                                <i className="fa fa-list"></i>
                                                            </div>
                                                            <span className="text-445B64 fw-medium">All Checks</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="d-flex position-relative" style={{ width: "100%" }}>
                                                                <input
                                                                    className="form-control form-control-sm rounded-3 me-2 shadow-none bg-F0F5F6"
                                                                    value={searchTerm}
                                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                                    type="search"
                                                                    placeholder="Search"
                                                                    aria-label="Search"
                                                                    style={{ paddingLeft: "35px" }}
                                                                />
                                                                <i className="fa fa-search text-445B64 position-absolute top-0 start-0" style={{ margin: "8px" }}></i>
                                                            </div>
                                                        </div>
<<<<<<< HEAD
                                                        <div className="col-lg-5 d-flex justify-content-around align-items-center">
                                                            <button className='btn fs-14 text-445B64 p-0' onClick={handleAddCheque}>
                                                                <i className="fa fa-plus me-2"></i>Add Check
=======
                                                        <div className="col-lg-3 d-flex justify-content-around align-items-center">
                                                            <button className='btn btn-light py-1 px-2 fs-14 text-445B64 p-0' onClick={handleAddCheque}>
                                                                <i className="fa fa-plus me-2"></i>Add Cheque
>>>>>>> 3f56af5b5e79b3f3b232d60601ae455c7c334d9c
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card border-0 rounded-3 mb-1 overflow-hidden">
                                        <div className="card-body p-0">
                                            {/* Table Starts Here */}
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Customer Name</th>
                                                            <th>Company</th>
                                                            <th>License No</th>
                                                            <th>Type</th>
                                                            <th>Amount</th>
                                                            <th>Comment</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filteredCheques.length > 0 ? (
                                                            filteredCheques.map((item, index) => (
                                                                <tr key={item._id}>
                                                                    <td>{index + 1}</td>
                                                                    <td>{item.customerFirstName}</td>
                                                                    <td>{item.company}</td>
                                                                    <td>{item.licenseNo}</td>
                                                                    <td>{item.checkType}</td>
                                                                    <td>{item.amount}</td>
                                                                    <td>{item.comment?.length > 10 ? item.comment.substring(0, 10) + '...' : item.comment}</td>
                                                                    <td>
                                                                        {item?.date &&
                                                                            new Date(item.date).toLocaleDateString("en-GB", {
                                                                                day: "numeric",
                                                                                month: "long",
                                                                                year: "numeric",
                                                                            }).replace(/(\w+) (\d{4})$/, "$1, $2")}
                                                                    </td>

                                                                    <td>{item.status}</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-center">
                                                                            <Link to={`/cheque-management/cheque-details/${item?._id}`} className="btn">
                                                                                <i className="fa-solid fa-eye text-445B64"></i>
                                                                            </Link><button className="btn" onClick={() => handleDeleteCheque(item._id)}>
                                                                                <i className="fa-solid fa-trash-can text-danger"></i>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="10" className="text-center">No cheques found</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* Table Ends Here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cheques;

