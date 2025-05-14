import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = process.env.REACT_APP_URL;

const RecentCheck = () => {
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
            console.error("Error fetching check:", error);
        }
    };

    const handleDeleteCheque = async (id) => {
        if (!window.confirm("Are you sure you want to delete this check?")) return;
        try {
            const response = await axios.delete(`${URL}/check/delete-check/${id}`);
            if (response.status >= 200 && response.status < 300) {
                toast.success("Check deleted successfully!");
                fetchCheques();
            }
        } catch (error) {
            toast.error("Error in deleting check: " + error.message);
            console.error("Error in deleting check", error);
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
        <>
            <div className="row">
                <div className="col-12">
                    <h6 className="fw-semibold">Recent Check</h6>
                    <div className="card border-0 shadow rounded-4 mb-1 overflow-hidden">
                        <div className="card-body p-0">
                            {/* Table Starts Here */}
                            <div className="table-responsive">
                                <table className="table table-hover table-striped">
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
                                                            <Link to={`/cheque-management/cheque-details/${item?._id}`} className="btn py-0">
                                                                <i className="fa-solid fa-eye text-445B64"></i>
                                                            </Link><button className="btn py-0" onClick={() => handleDeleteCheque(item._id)}>
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
        </>
    )
}

export default RecentCheck