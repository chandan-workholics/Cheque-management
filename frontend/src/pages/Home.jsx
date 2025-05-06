import React, { useEffect } from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
const URL = process.env.REACT_APP_URL;

const Home = () => {
  const venderId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    customerName: '',
    licenseNo: '',
    date: '',
    company: '',
    checkType: '',
    amount: '',
    imageUrl: '',
    extractedText: '',
  });

  const [formDataback, setFormDataback] = useState({
    customerName: '',
    licenseNo: '',
    date: '',
    company: '',
    checkType: '',
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

  const [status, setStatus] = useState({});


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
      const response = await axios.post(`${URL}/scan-check`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

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
        setFormData(parsedData);
      }
    } catch (error) {
      console.error('Error during image upload:', error);
    }

  };

  const handleSubmitback = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      alert("Please upload a cheque image.");
      return;
    }
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await axios.post(`${URL}/scan-check`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

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
      console.error('Error during image upload:', error);
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
      const response = await axios.post(`${URL}/scan-license`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
      console.error('Error during image upload:', error);
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
      const response = await axios.post(`${URL}/scan-license`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
      console.error('Error during image upload:', error);
    }

  };

  const handleStatus = async () => {
    try {
      const response = await axios.get(`${URL}/check/status`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      console.log(response);
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
    try {
      const response = await axios.post(`${URL}/check/add-check`, {
        imageUrl: formData.imageUrl || '',
        imageUrl2: formDataback.imageUrl || '',
        imageUrl3: licenseData.imageUrl || '',
        imageUrl4: licenseDataback.imageUrl || '',
        customerName: formData.customerName,
        licenseNo: licenseData.licenseNo,
        date: new Date(formData.date).toLocaleString('en-GB'),
        company: formData.company,
        checkType: formData.checkType,
        amount: formData.amount,
        status: formData.status,
        extractedText: formData.extractedText,
        comment: formData.comment || 'xyz',
        venderId: venderId
      });
      if (response.status >= 200 && response.status < 300) {

        toast.success('check added successfully');
      } else {
        toast.error('Failed to add check');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred while submitting the form');
    }
  };


  return (
    <>
      <div className="container-fluid">
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
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
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
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
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
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
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
                        <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                      </svg>
                      <h6 className='ms-2 mb-0 text-445B64'>New Checks</h6>
                    </div>
                    <div className="card-body">
                      <div className="row g-3 new-cheque-form">
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
                            {licenseData?.imageUrl &&
                              <div className='col-lg-6'>
                                <label className="form-label text-445B64 mb-1 mt-3">Front Image</label>
                                <img src={licenseData.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
                              </div>
                            }
                            {licenseData?.imageUrl &&
                              <div className='col-lg-6'>
                                <label className="form-label text-445B64 mb-1 mt-3">Back Image</label>
                                <img src={licenseDataback.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
                              </div>
                            }
                            <div className="col-lg-6"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label text-445B64">Cheque Image</label>


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
                            {formData?.imageUrl &&
                              <div className='col-lg-6'>
                                <label className="form-label text-445B64 mb-1 mt-3">Front Image</label>
                                <img src={formData.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
                              </div>
                            }
                            {formData?.imageUrl &&
                              <div className='col-lg-6'>
                                <label className="form-label text-445B64 mb-1 mt-3">Back Image</label>
                                <img src={formDataback.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
                              </div>
                            }
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                          <button type="button" class="btn btn-sm py-1 px-3 theme-btn rounded-3 mt-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Please Check all Details
                          </button>
                        </div>
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-md-9">
                              <div className="row">
                                <label className="form-label text-445B64">Customer Name</label>
                                <div className="col-md-4 mb-3">
                                  <input type="text" className="form-control" placeholder='First Name' value={licenseData.name || formData.customerName} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div className="col-md-4 mb-3">
                                  <input type="text" className="form-control" placeholder='Middle Name' value={licenseData.name || formData.customerName} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div className="col-md-4 mb-3">
                                  <input type="text" className="form-control" placeholder='Last Name' value={licenseData.name || formData.customerName} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">License No</label>
                              <input type="text" className="form-control" value={licenseData.licenseNo || ''} onChange={(e) => setLicenseData({ ...licenseData, licenseNo: e.target.value })} />
                            </div>
                            {/* <div className="col-md-4 mb-3">
                              <label className="form-label text-445B64">Date</label>
                              <input type="text" className="form-control" value={formData.date || ''} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                            </div> */}

                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">Company</label>
                              <input type="text" className="form-control" placeholder='Company Name' value={formData.company || ''} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">Check Type</label>
                              <select
                                className="form-control"
                                value={formData.checkType || ''}
                                onChange={(e) => setFormData({ ...formData, checkType: e.target.value })}
                              >
                                <option value="">Select Check Type</option>
                                <option value="Personal">Personal</option>
                                <option value="Business">Business</option>
                              </select>
                            </div>

                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">Status</label>
                              <select
                                className="form-control"
                                value={formData.status || ''}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                              >
                                <option value="">Select Status</option>
                                <option value="good">Good</option>
                                <option value="bad">Bad</option>
                              </select>
                            </div>

                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">Amount</label>
                              <input type="text" className="form-control" value={formData.amount || ''} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3 pb-4 mt-0 mt-lg-3">
                          <label className="form-label text-445B64">Comments</label>
                          <textarea className="form-control h-100" value={formData.comment || ''} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
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

      {/* image-preview-Modal */}
      <div class="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title text-445B64" id="exampleModalLabel">Preview Details</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer">
              <button type="button" class="btn btn-sm btn-light bg-F0F5F6 border rounded-3 px-5" data-bs-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home


