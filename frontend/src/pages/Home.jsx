import React, { useEffect } from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import { useState,useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileHeader from '../components/MobileHeader';
import { Link } from 'react-router-dom';
const URL = process.env.REACT_APP_URL;

const Home = () => {
  const licenseFrontRef = useRef(null);
const licenseBackRef = useRef(null);
const checkFrontRef = useRef(null);
const checkBackRef = useRef(null);
  const venderId = localStorage.getItem("userId");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const [formData, setFormData] = useState({
    customerFirstName: '',
    customerMiddleName: '',
    customerLastName: '',
    licenseNo: '',
    date: '',
    company: '',
    checkType:'Personal',
    amount: '',
    imageUrl: '',
    extractedText: '',
  });

  const [formDataback, setFormDataback] = useState({
    customerFirstName: '',
    customerMiddleName: '',
    customerLastName: '',
    licenseNo: '',
    date: '',
    company: '',
    checkType:'Personal',
    amount: '',
    imageUrl: '',
    extractedText: '',
  });

  const [licenseData, setLicenseData] = useState({
    imageUrl: '',
    name: '',
    licenseNo: '',
    class: '',
    dob: '',
    sex: '',
    eyes: '',
    height: '',
    address: '',
    issuedDate: '',
    expiryDate: '',
  });

  const [licenseDataback, setLicenseDataback] = useState({
    imageUrl: '',
    name: '',
    licenseNo: '',
    class: '',
    dob: '',
    sex: '',
    eyes: '',
    height: '',
    address: '',
    issuedDate: '',
    expiryDate: '',
  });

  const handleCancelLicenseFront = () => {
    setLicenseData({ ...licenseData, imageUrl: '' });
    if (licenseFrontRef.current) {
      licenseFrontRef.current.value = '';
    }
  };
  
  const handleCancelLicenseBack = () => {
    setLicenseDataback({ ...licenseDataback, imageUrl: '' });
    if (licenseBackRef.current) {
      licenseBackRef.current.value = '';
    }
  };
  
  const handleCancelCheckFront = () => {
    setFormData({ ...formData, imageUrl: '' });
    if (checkFrontRef.current) {
      checkFrontRef.current.value = '';
    }
  };
  
  const handleCancelCheckBack = () => {
    setFormDataback({ ...formDataback, imageUrl: '' });
    if (checkBackRef.current) {
      checkBackRef.current.value = '';
    }
  };
  
  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState({});

  const requiredFields = ['customerFirstName', 'amount'];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerFirstName?.trim()) {
      newErrors.customerFirstName = "Please fill this field";
    }
    if (!formData.amount?.trim()) {
      newErrors.amount = "Please enter amount";
    }

    setErrors(newErrors);
    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = true;
      }
    }
    );
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      alert("Please upload a cheque image.");
      return;
    }
    const formData = new FormData();
    formData.append('image', file);
    try {
      setLoading(true)
      const response = await axios.post(`${URL}/scan-check`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTimeout(() => {
        toast.success('Check front image upload successfully!');
      }, 1000);
      const result = response.data;
      if (result && result.customerName) {
        const parsedData = {
          customerFirstName: result.customerFirstName || '',
          customerMiddleName: result.customerMiddleName || '',
          customerLastName: result.customerLastName || '',
          date: result.date || '',
          company: result.company || '',
          checkType: result.checkType || '',
          amount: result.amountNumeric || '',
          amountWords: result.amountWords || '',
          payee: result.payee || '',
          memo: result.memo || '',
          imageUrl: result.imageUrl || '',
          extractedText: result.extractedText || ''
        };
        setFormData(parsedData);
      }
    } catch (error) {
      setTimeout(() => {
        toast.error("Error in image uploading", error);
      }, 1000);
      console.error('Error during image upload:', error);
    } finally {
      setLoading(false)
    }
  };

  const handleSubmitback = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      alert("Please upload a check image.");
      return;
    }
    const formData = new FormData();
    formData.append('image', file);
    try {
      setLoading1(true)
      const response = await axios.post(`${URL}/scan-check`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTimeout(() => {
        toast.success('Check Back image upload successfully!');
      }, 1000);
      const result = response.data;
      if (result && result.customerName) {
        const parsedData = {
          customerName: result.customerName || '',
          date: result.date || '',
          company: result.company || '',
          checkType: result.checkType || '',
          amount: result.amountNumeric || '',
          amountWords: result.amountWords || '',
          payee: result.payee || '',
          memo: result.memo || '',
          imageUrl: result.imageUrl || '',
          extractedText: result.extractedText || ''
        };
        setFormDataback(parsedData);
      }
    } catch (error) {
      setTimeout(() => {
        toast.error("Error in image uploading", error);
      }, 1000);
      console.error('Error during image upload:', error);
    } finally {
      setLoading1(false)
    }
  };

  const handleSubmitLicense = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      alert("Please upload a License image.");
      return;
    }
    const formData = new FormData();
    formData.append('image', file);
    try {
      setLoading2(true)
      const response = await axios.post(`${URL}/scan-license`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTimeout(() => {
        toast.success('License Front image upload successfully!');
      }, 1000);
      const result = response.data;
      if (result) {
        const parsedData = {
          imageUrl: result.imageUrl || '',
          name: result.name || '',
          licenseNo: result.licenseNo || '',
          dob: result.dob || '',
          sex: result.sex || '',
          eyes: result.eyes || '',
          height: result.height || '',
          address: result.address || '',
          issuedDate: result.issuedDate || '',
          expiryDate: result.expiryDate || '',
        };
        setLicenseData(parsedData);
      }
    } catch (error) {
      setTimeout(() => {
        toast.error("Error in image uploading", error);
      }, 1000);
      console.error('Error during image upload:', error);
    } finally {
      setLoading2(false)
    }
  };

  const handleSubmitLicenseback = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      alert("Please upload a License image.");
      return;
    }
    const formData = new FormData();
    formData.append('image', file);
    try {
      setLoading3(true)
      const response = await axios.post(`${URL}/scan-license`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTimeout(() => {
        toast.success('License Back image upload successfully!');
      }, 1000);
      const result = response.data;
      if (result) {
        const parsedData = {
          imageUrl: result.imageUrl || '',
          name: result.name || '',
          licenseNo: result.licenseNo || '',
          dob: result.dob || '',
          sex: result.sex || '',
          eyes: result.eyes || '',
          height: result.height || '',
          address: result.address || '',
          issuedDate: result.issuedDate || '',
          expiryDate: result.expiryDate || '',
        };
        setLicenseDataback(parsedData);
      }
    } catch (error) {
      setTimeout(() => {
        toast.error("Error in image uploading", error);
      }, 1000);
      console.error('Error during image upload:', error);
    } finally {
      setLoading3(false)
    }
  };

  const handleStatus = async () => {
    try {
      const response = await axios.get(`${URL}/check/status`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (response.status >= 200 && response.status < 300) {
        setStatus(response?.data || []);
      }
    } catch (error) {
      console.log("Error in fetching data");
    }
  }

  useEffect(() => {
    handleStatus();
  }, [])

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.imageUrl || !licenseData.imageUrl) {
      toast.error('Please upload both Cheque and License front images');
      return;
    }
    if (!validateForm()) {
      toast.error('Please fill all required fields');
      return;
    }
    try {
      const response = await axios.post(`${URL}/check/add-check`, {
        imageUrl: formData.imageUrl || '',
        imageUrl2: formDataback.imageUrl || '',
        imageUrl3: licenseData.imageUrl || '',
        imageUrl4: licenseDataback.imageUrl || '',
        customerFirstName: formData.customerFirstName,
        customerLastName: formData.customerLastName,
        customerMiddleName: formData.customerMiddleName,
        licenseNo: licenseData.licenseNo,
        date: new Date(Date.now()).toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }),
        company: formData.company,
        checkType: formData.checkType||'Personal',
        amount: formData.amount,
        status: formData.status,
        extractedText: formData.extractedText,
        comment: formData.comment,
        venderId: venderId
      });
      console.log(response)
      if (response.status >= 200 && response.status < 300) {
        toast.success('Check added successfully!');
      } else {
        toast.error('Failed to add check');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred while submitting the form');
    }
  };

  console.log(formData)

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="container-fluid d-none d-lg-block">
        <Header />
        <div className="">
          <div className="row mh-100vh">
            <div className="col-lg-2 col-xl-2 d-none d-lg-block position-relative">
              <Sidebar />
            </div>
            <div className="col-lg-10 col-xl-10 bg-F6F6F6">
              <div className="main-content">
                <div className="container-fluid p-3 px-2">
                  {/* Status Cards */}
                  <div className="row mb-2">
                    <div className="col-md-6 col-xl-4 mb-3">
                      <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#000000" />
                              </svg>
                            </div>
                            <div>
                              <h6 className="mb-1 fw-medium text-445B64">Today's Status</h6>
                              <h4 className="mb-0 text-00C7BE fw-bold">
                                ${parseFloat(status?.day?.totalAmount || 0).toFixed(2)}
                              </h4>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <span className="badge bg-F5EEFF text-515151">{status?.day?.totalChecks || 0} New Checks</span>
                            <span className="badge bg-EFFFFE text-01A99A">{status?.day?.goodChecks || 0} Good Checks</span>
                            <span className="badge bg-FFF6F6 text-E84D4D">{status?.day?.badChecks || 0} Bad Checks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-3">
                      <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#000000" />
                              </svg>
                            </div>
                            <div>
                              <h6 className="mb-1 fw-medium text-445B64">Weekly Status</h6>
                              <h4 className="mb-0 text-00C7BE fw-bold">${parseFloat(status?.week?.totalAmount || 0).toFixed(2)}</h4>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <span className="badge bg-F5EEFF text-515151">{status?.week?.totalChecks || 0} New Checks</span>
                            <span className="badge bg-EFFFFE text-01A99A">{status?.week?.goodChecks || 0} Good Checks</span>
                            <span className="badge bg-FFF6F6 text-E84D4D">{status?.week?.badChecks || 0} Bad Checks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-3">
                      <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#000000" />
                              </svg>
                            </div>
                            <div>
                              <h6 className="mb-1 fw-medium text-445B64">Monthly Status</h6>
                              <h4 className="mb-0 text-00C7BE fw-bold">${parseFloat(status?.month?.totalAmount || 0).toFixed(2)}</h4>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <span className="badge bg-F5EEFF text-515151">{status?.month?.totalChecks || 0} New Checks</span>
                            <span className="badge bg-EFFFFE text-01A99A">{status?.month?.goodChecks || 0} Good Checks</span>
                            <span className="badge bg-FFF6F6 text-E84D4D">{status?.month?.badChecks || 0} Bad Checks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* New Check Form */}
                  <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                    <div className="card-header bg-white d-flex align-items-center py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#000000" />
                      </svg>
                      <h6 className='ms-2 mb-0 text-445B64'>New Checks</h6>
                    </div>



                    <div className="card-body">
                      <div className="row g-3 new-cheque-form">

                      <div className="col-md-6">
                          <label className="form-label text-445B64">Check Image</label>


                          <div className="d-flex gap-2 gap-lg-3">
                            <div className="form-control inputFile p-3 p-lg-4 text-center position-relative d-flex justify-content-center align-items-center">
                              <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmit} style={{ opacity: 0, cursor: 'pointer' }} />
                              <div className="">
                                <i className="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
                                <div className="text-445B64">Upload/Capture Front </div>
                              </div>
                            </div>

                            <div className="form-control inputFile p-3 p-lg-4 text-center position-relative d-flex justify-content-center align-items-center">
                              <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmitback} style={{ opacity: 0, cursor: 'pointer' }} />
                              <div className="">
                                <i className="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
                                <div className="text-445B64">Upload/Capture Back </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            {loading ? (
                              <div className="col-6 text-center py-5 px-5">
                                <div className="spinner-border text-primary" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                              </div>

                            ) : (
                              <>
                                {formData?.imageUrl && (
                                  <div className='col-lg-6'>
                                    <label className="form-label text-445B64 mb-1 mt-3">Front Image</label>
                                    <div className='position-relative mt-3'>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-dark position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                        onClick={() => setFormData({ ...formData, imageUrl: '' })}
                                        style={{ zIndex: 1 }}
                                      >
                                        &times;
                                      </button>
                                      <img src={formData.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                            {loading1 ? (
                              <div className="col-6 text-center py-5 px-5">
                                <div className="spinner-border text-primary" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                              </div>

                            ) : (
                              <>
                                {formDataback?.imageUrl && (
                                  <div className='col-lg-6'>
                                    <label className="form-label text-445B64 mb-1 mt-3">Back Image</label>
                                    <div className='position-relative mt-3'>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-dark position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                        onClick={() => setFormDataback({ ...formDataback, imageUrl: '' })}
                                        style={{ zIndex: 1 }}
                                      >
                                        &times;
                                      </button>
                                      <img src={formDataback.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>


                        <div className="col-md-6">
                          <label className="form-label text-445B64">License Image</label>
                          <div className="d-flex gap-2 gap-lg-3">
                            <div className="form-control inputFile p-3 p-lg-4 text-center position-relative d-flex justify-content-center align-items-center">
                              <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmitLicense} style={{ opacity: 0, cursor: 'pointer' }} />
                              <div className="">
                                <i className="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
                                <div className="text-445B64">Upload/Capture Front </div>
                              </div>
                            </div>
                            <div className="form-control inputFile p-3 p-lg-4 text-center position-relative d-flex justify-content-center align-items-center">
                              <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmitLicenseback} style={{ opacity: 0, cursor: 'pointer' }} />
                              <div className="">
                                <i className="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
                                <div className="text-445B64">Upload/Capture Back  </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            {loading2 ? (
                              <div className="col-6 text-center py-5 px-5">
                                <div className="spinner-border text-primary" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                              </div>

                            ) : (
                              <>
                                {licenseData?.imageUrl && (
                                  <div className='col-lg-6 '>
                                    <label className="form-label text-445B64 mb-1 mt-3">Front Image</label>
                                    <div className='position-relative mt-3'>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-dark position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                        onClick={() => setLicenseData({ ...licenseData, imageUrl: '' })}
                                        style={{ zIndex: 1 }}
                                      >
                                        &times;
                                      </button>
                                      <img
                                        src={licenseData.imageUrl}
                                        alt="Front License"
                                        className='w-100 border rounded-4 overflow-hidden'
                                      />
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                            {loading3 ? (
                              <div className="col-6 text-center py-5 px-5">
                                <div className="spinner-border text-primary" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                              </div>

                            ) : (
                              <>
                                {licenseDataback?.imageUrl && (
                                  <div className='col-lg-6'>
                                    <label className="form-label text-445B64 mb-1 mt-3">Back Image</label>
                                    <div className='position-relative mt-3'>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-dark position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                        onClick={() => setLicenseDataback({ ...licenseDataback, imageUrl: '' })}
                                        style={{ zIndex: 1 }}
                                      >
                                        &times;
                                      </button>
                                      <img
                                        src={licenseDataback.imageUrl}
                                        alt="Back License"
                                        className='w-100 border rounded-4 overflow-hidden'
                                      />
                                    </div>
                                  </div>
                                )}
                              </>
                            )}

                            <div className="col-lg-6"></div>
                          </div>
                        </div>



                      



                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-md-9">
                              <div className="row">
                                <label className="form-label text-445B64">Customer Name <span className='text-danger'>*</span></label>
                                <div className="col-md-4 mb-3">
                                  <input
                                    type="text"
                                    placeholder='First name'
                                    className={`form-control ${errors.customerFirstName ? 'border border-danger' : formData.customerFirstName ? 'border border-success' : ''}`}
                                    value={formData.customerFirstName || ''}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setFormData({ ...formData, customerFirstName: value });
                                      if (value.trim() !== '') {
                                        setErrors((prev) => ({ ...prev, customerFirstName: null }));
                                      }
                                    }}
                                  />
                                  {errors.customerFirstName && (
                                    <div className="text-danger mt-1" style={{ fontSize: '0.6rem' }}>
                                      "Please fill the customer first name"
                                    </div>
                                  )}
                                </div>
                                <div className="col-md-4 mb-3">
                                  <input type="text" className="form-control" placeholder='Middle Name' value={formData.customerMiddleName} onChange={(e) => setFormData({ ...formData, customerMiddleName: e.target.value })} />
                                </div>
                                <div className="col-md-4 mb-3">
                                  <input type="text" className="form-control" placeholder='Last Name' value={formData.customerLastName} onChange={(e) => setFormData({ ...formData, customerLastName: e.target.value })} />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">License No </label>
                              <input type="text" className="form-control" value={licenseData.licenseNo || formData.licenseNo} onChange={(e) => setFormData({ ...licenseData, licenseNo: e.target.value })} />
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64"> Check Type </label>
                              <select className="form-control" value={formData.checkType} onChange={(e) => { const value = e.target.value; setFormData({ ...formData, checkType: value }) }} >
                                {/* <option value="">Select Check Type</option> */}
                                <option value="Personal">Personal</option>
                                <option value="Business">Business</option>
                              </select>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">Amount <span className='text-danger'>*</span></label>
                              <input
                                type="text"
                                className={`form-control ${errors.amount ? 'border border-danger' : formData.amount ? 'border border-success' : ''}`}
                                value={formData.amount || ''}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setFormData({ ...formData, amount: value });
                                  if (value.trim() !== '') {
                                    setErrors((prev) => ({ ...prev, amount: null }));
                                  }
                                }}
                              />
                              {errors.amount && (
                                <div className="text-danger mt-1" style={{ fontSize: '0.6rem' }}>
                                  "Please fill the amount"
                                </div>
                              )}
                            </div>
                            <div className="col-md-6 mb-3 ">
                              <label className="form-label text-445B64">Comments</label>
                              <input className="form-control" value={formData.comment || ''} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
                            </div>
                          </div>
                          <div className="col-lg-4 me-auto mt-0 text-center">
                            <button className="btn theme-btn px-5 py-2 rounded-3 mt-3 w-100" onClick={handleSave}>Save</button>
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

      {/* image-preview-Modal */}
      < div className="modal modal-xl fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title text-445B64" id="exampleModalLabel">Preview Details</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className='col-lg-6'>
                  {/* {licenseData?.imageUrl && <img src={licenseData.imageUrl} alt="Profile" className='w-100' />} */}
                  {formData?.imageUrl && <img src={formData.imageUrl} alt="Profile" className='w-100' />}
                </div>
                <div className='col-lg-6 d-flex align-items-center'>
                  <div
                    className="form-control border-0 bg-F0F5F6"
                    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                    dangerouslySetInnerHTML={{ __html: formData?.extractedText }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-sm btn-light bg-F0F5F6 border rounded-3 px-5" data-bs-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile-View Start */}
      <div className="container-fluid mobile-bg d-block d-lg-none">
        <MobileHeader />
        <div className="row mb-2 pt-5 mt-4">
          <div className="col-12 mb-3">
            <Link to='/cheque-management/upload-check' className="btn btn-light bg-F8F8F8 rounded-3 border w-100 text-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M9.49253 5.07022C9.66037 5.07022 9.82133 5.13689 9.94001 5.25557C10.0587 5.37425 10.1254 5.53521 10.1254 5.70305V8.86718H13.2895C13.4573 8.86718 13.6183 8.93386 13.737 9.05253C13.8557 9.17121 13.9223 9.33217 13.9223 9.50001C13.9223 9.66785 13.8557 9.82881 13.737 9.94749C13.6183 10.0662 13.4573 10.1328 13.2895 10.1328H10.1254V13.297C10.1254 13.4648 10.0587 13.6258 9.94001 13.7445C9.82133 13.8631 9.66037 13.9298 9.49253 13.9298C9.3247 13.9298 9.16374 13.8631 9.04506 13.7445C8.92638 13.6258 8.85971 13.4648 8.85971 13.297V10.1328H5.69557C5.52774 10.1328 5.36677 10.0662 5.2481 9.94749C5.12942 9.82881 5.06274 9.66785 5.06274 9.50001C5.06274 9.33217 5.12942 9.17121 5.2481 9.05253C5.36677 8.93386 5.52774 8.86718 5.69557 8.86718H8.85971V5.70305C8.85971 5.53521 8.92638 5.37425 9.04506 5.25557C9.16374 5.13689 9.3247 5.07022 9.49253 5.07022Z" fill="#008CFF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.10778C0 5.27272 0 3.85518 0.551825 2.76672C1.03954 1.81439 1.81439 1.03954 2.76672 0.551825C3.85012 3.77194e-08 5.27272 0 8.10778 0H10.8922C13.7273 0 15.1448 3.77194e-08 16.2333 0.551825C17.1863 1.03657 17.9546 1.81115 18.4482 2.76672C19 3.85012 19 5.27272 19 8.10778V10.8922C19 13.7273 19 15.1448 18.4482 16.2333C17.9605 17.1856 17.1856 17.9605 16.2333 18.4482C15.1499 19 13.7273 19 10.8922 19H8.10778C5.27272 19 3.85518 19 2.76672 18.4482C1.81439 17.9605 1.03954 17.1856 0.551825 16.2333C0 15.1499 0 13.7273 0 10.8922V8.10778ZM8.10019 1.27325H10.8846C12.3275 1.27325 13.3273 1.27325 14.112 1.3378C14.8778 1.40108 15.3182 1.51752 15.6561 1.68712C16.3689 2.05243 16.9488 2.6324 17.3141 3.34512C17.4837 3.67799 17.6002 4.11844 17.6635 4.88922C17.7268 5.67013 17.728 6.67379 17.728 8.11664V10.9011C17.728 12.3439 17.728 13.3438 17.6635 14.1285C17.6002 14.8942 17.4837 15.3347 17.3141 15.6726C16.9502 16.3863 16.3699 16.9667 15.6561 17.3306C15.3233 17.5002 14.8828 17.6166 14.112 17.6799C13.3311 17.7432 12.3275 17.7445 10.8846 17.7445H8.10019C6.65734 17.7445 5.65747 17.7445 4.87277 17.6812C4.10705 17.6179 3.6666 17.5002 3.32867 17.3306C2.61492 16.9667 2.03457 16.3863 1.67066 15.6726C1.50107 15.3397 1.38463 14.9005 1.32134 14.1285C1.25806 13.3476 1.25679 12.3439 1.25679 10.9011V8.11664C1.25679 6.67379 1.25679 5.67393 1.32134 4.88922C1.38463 4.1235 1.50107 3.68305 1.67066 3.34512C2.03598 2.6324 2.61595 2.05243 3.32867 1.68712C3.66154 1.51752 4.10198 1.40108 4.87277 1.3378C5.65368 1.27451 6.65734 1.27325 8.10019 1.27325Z" fill="#008CFF" />
              </svg>
              <span className="text-00C7BE fw-semibold ms-2">Add New Checks</span>
            </Link>
          </div>
          <div className="col-md-6 col-xl-4 mb-3">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-FFF9EE rounded-4 p-3 me-3 d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 15 16" fill="none">
                      <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#FFAA0F" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-medium text-616161">Today's Status</h6>
                    <h3 className="mb-0 text-000000 fw-bold">
                      ${parseFloat(status?.day?.totalAmount || 0).toFixed(2)}
                    </h3>
                  </div>
                </div>
                <div className="d-flex justify-content-between small">
                  <span className="badge bg-F5EEFF text-8A48E9 fs-12">{status?.day?.totalChecks || 0} New Checks</span>
                  <span className="badge bg-light-green-EFFFFE text-green-01A99A fs-12">{status?.day?.goodChecks || 0} Good Checks</span>
                  <span className="badge bg-FFF6F6 text-E84D4D fs-12">{status?.day?.badChecks || 0} Bad Checks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-3">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 15 16" fill="none">
                      <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#FFAA0F" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-medium text-616161">Weekly Status</h6>
                    <h3 className="mb-0 text-000000 fw-bold">${parseFloat(status?.week?.totalAmount || 0).toFixed(2)}</h3>
                  </div>
                </div>
                <div className="d-flex justify-content-between small">
                  <span className="badge bg-F5EEFF text-8A48E9 fs-12">{status?.week?.totalChecks || 0} New Checks</span>
                  <span className="badge bg-light-green-EFFFFE text-green-01A99A fs-12">{status?.week?.goodChecks || 0} Good Checks</span>
                  <span className="badge bg-FFF6F6 text-E84D4D fs-12">{status?.week?.badChecks || 0} Bad Checks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-3">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 15 16" fill="none">
                      <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#FFAA0F" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-medium text-616161">Monthly Status</h6>
                    <h3 className="mb-0 text-000000 fw-bold">${parseFloat(status?.month?.totalAmount || 0).toFixed(2)}</h3>
                  </div>
                </div>
                <div className="d-flex justify-content-between small">
                  <span className="badge bg-F5EEFF text-8A48E9 fs-12">{status?.month?.totalChecks || 0} New Checks</span>
                  <span className="badge bg-light-green-EFFFFE text-green-01A99A fs-12">{status?.month?.goodChecks || 0} Good Checks</span>
                  <span className="badge bg-FFF6F6 text-E84D4D fs-12">{status?.month?.badChecks || 0} Bad Checks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid mobile-bg d-block d-lg-none">
        <div className="card border-0 bg-transparent">
          <div className="card-header bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 8V9H17V8V7H1V8Z" fill="black" />
            </svg>
            <span className="fs-6 ms-2 text-000000 fw-semibold">Upload Check Image</span>
          </div>
          <div className="card-body bg-transparent">
            <div className="mb-4">
              <div className="form-control inputFile p-4 mb-3 text-center position-relative d-flex justify-content-center align-items-center">
                <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmitLicense} style={{ opacity: 0, cursor: 'pointer' }} />
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="35" viewBox="0 0 46 35" fill="none">
                    <path d="M24.625 34.875V25.125H31.125L23 15.375L14.875 25.125H21.375V34.875H13.25V34.7938C12.977 34.81 12.717 34.875 12.4375 34.875C9.20517 34.875 6.10524 33.591 3.81964 31.3054C1.53404 29.0198 0.25 25.9198 0.25 22.6875C0.25 16.4345 4.97875 11.3385 11.0465 10.6398C11.5785 7.85871 13.063 5.34997 15.2446 3.54502C17.4262 1.74007 20.1685 0.751736 23 0.75C25.8319 0.751565 28.5747 1.73977 30.7569 3.54468C32.939 5.3496 34.4241 7.85843 34.9567 10.6398C41.0245 11.3385 45.7467 16.4345 45.7467 22.6875C45.7467 25.9198 44.4627 29.0198 42.1771 31.3054C39.8915 33.591 36.7916 34.875 33.5592 34.875C33.2862 34.875 33.023 34.81 32.7467 34.7938V34.875H24.625Z" fill="#008CFF" />
                  </svg>
                  <div className="text-445B64 fw-semibold mt-3">Upload or Capture Front Image </div>
                </div>
              </div>
              <div className="card bg-transparent">
                <div className="card-body bg-transparent p-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 13 17" fill="none">
                        <path d="M7.29175 6.125V1.77083L11.6459 6.125M1.75008 0.583334C0.871331 0.583334 0.166748 1.28792 0.166748 2.16667V14.8333C0.166748 15.2533 0.333563 15.656 0.630496 15.9529C0.927428 16.2499 1.33016 16.4167 1.75008 16.4167H11.2501C11.67 16.4167 12.0727 16.2499 12.3697 15.9529C12.6666 15.656 12.8334 15.2533 12.8334 14.8333V5.33333L8.08342 0.583334H1.75008Z" fill="#008CFF" />
                      </svg>
                      <div className="ms-2">
                        <h6 className="fs-14 text-000000 mb-0">main.jpg</h6>
                        <h6 className="fs-13 text-000000 mb-0">2KB</h6>
                      </div>
                    </div>
                    <button className="border-0 bg-transparent">
                      <i class="fa-solid fa-trash text-FF0808"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="form-control inputFile p-4 mb-3 text-center position-relative d-flex justify-content-center align-items-center">
                <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmitLicense} style={{ opacity: 0, cursor: 'pointer' }} />
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="35" viewBox="0 0 46 35" fill="none">
                    <path d="M24.625 34.875V25.125H31.125L23 15.375L14.875 25.125H21.375V34.875H13.25V34.7938C12.977 34.81 12.717 34.875 12.4375 34.875C9.20517 34.875 6.10524 33.591 3.81964 31.3054C1.53404 29.0198 0.25 25.9198 0.25 22.6875C0.25 16.4345 4.97875 11.3385 11.0465 10.6398C11.5785 7.85871 13.063 5.34997 15.2446 3.54502C17.4262 1.74007 20.1685 0.751736 23 0.75C25.8319 0.751565 28.5747 1.73977 30.7569 3.54468C32.939 5.3496 34.4241 7.85843 34.9567 10.6398C41.0245 11.3385 45.7467 16.4345 45.7467 22.6875C45.7467 25.9198 44.4627 29.0198 42.1771 31.3054C39.8915 33.591 36.7916 34.875 33.5592 34.875C33.2862 34.875 33.023 34.81 32.7467 34.7938V34.875H24.625Z" fill="#008CFF" />
                  </svg>
                  <div className="text-445B64 fw-semibold mt-3">Upload or Capture Back Image </div>
                </div>
              </div>
              <div className="card bg-transparent">
                <div className="card-body bg-transparent p-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 13 17" fill="none">
                        <path d="M7.29175 6.125V1.77083L11.6459 6.125M1.75008 0.583334C0.871331 0.583334 0.166748 1.28792 0.166748 2.16667V14.8333C0.166748 15.2533 0.333563 15.656 0.630496 15.9529C0.927428 16.2499 1.33016 16.4167 1.75008 16.4167H11.2501C11.67 16.4167 12.0727 16.2499 12.3697 15.9529C12.6666 15.656 12.8334 15.2533 12.8334 14.8333V5.33333L8.08342 0.583334H1.75008Z" fill="#008CFF" />
                      </svg>
                      <div className="ms-2">
                        <h6 className="fs-14 text-000000 mb-0">main.jpg</h6>
                        <h6 className="fs-13 text-000000 mb-0">2KB</h6>
                      </div>
                    </div>
                    <button className="border-0 bg-transparent">
                      <i class="fa-solid fa-trash text-FF0808"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Mobile-View End */}
    </>
  )
}

export default Home


