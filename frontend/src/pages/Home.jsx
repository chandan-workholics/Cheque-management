import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [chequeImage, setChequeImage] = useState(null);
  const [licenseImage, setLicenseImage] = useState();

  const [formData, setFormData] = useState({
    customerName: '',
    licenseNo: '',
    date: '',
    company: '',
    checkType: '',
    amount: '',
    imageUrl: '',
  });

  const handleChequeImageChange = (e) => {
    const file = e.target.files[0];
    setChequeImage(file);
  };

  const handleLicenseImageChange = (e) => {
    const file = e.target.files[0];
    setLicenseImage(file);
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
      const response = await fetch('http://206.189.130.102:5000/scan-check', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result && result.customerName) {
        const parsedData = {
          customerName: result.customerName || '',
          licenseNo: result.licenseNo || '',
          date: result.date || '',
          company: result.company || '',
          checkType: result.checkType || '',
          amount: result.amount || '',
          imageUrl: result.imageUrl || ''
        };
        setFormData(parsedData);
      }
    } catch (error) {
      console.error('Error during image upload:', error);
    }
  };





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
                  {/* Status Cards */}
                  <div className="row mb-2">
                    <div className="col-md-4 mb-3">
                      <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                              </svg>
                            </div>
                            <div>
                              <h6 className="mb-1 fw-medium text-445B64 fs-14">Today's Status</h6>
                              <h4 className="mb-0 text-00C7BE fw-bold">$1,000</h4>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <span className="badge bg-F5EEFF text-515151">1 New Checks</span>
                            <span className="badge bg-EFFFFE text-01A99A">20 Good Checks</span>
                            <span className="badge bg-FFF6F6 text-E84D4D">5 Bad Checks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                              </svg>
                            </div>
                            <div>
                              <h6 className="mb-1 fw-medium text-445B64 fs-14">Weekly Status</h6>
                              <h4 className="mb-0 text-00C7BE fw-bold">$25,000</h4>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <span className="badge bg-F5EEFF text-515151">30 New Checks</span>
                            <span className="badge bg-EFFFFE text-01A99A">50 Good Checks</span>
                            <span className="badge bg-FFF6F6 text-E84D4D">10 Bad Checks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
                                <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                              </svg>
                            </div>
                            <div>
                              <h6 className="mb-1 fw-medium text-445B64 fs-14">Monthly Status</h6>
                              <h4 className="mb-0 text-00C7BE fw-bold">$53,000</h4>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <span className="badge bg-F5EEFF text-515151">50 New Checks</span>
                            <span className="badge bg-EFFFFE text-01A99A">100 Good Checks</span>
                            <span className="badge bg-FFF6F6 text-E84D4D">50 Bad Checks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* New Check Form */}
                  <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
                    <div className="card-header bg-white d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                      </svg>
                      <h6 className='ms-2 mb-0 text-445B64 fs-14'>New Checks</h6>
                    </div>
                    <div className="card-body">
                      <div className="row g-3 new-cheque-form">
                        <div className="col-md-6">
                          <label className="form-label text-445B64">License Image</label>
                          <div className="d-flex gap-3">
                            <div className="form-control inputFile p-4 text-center position-relative d-flex justify-content-center align-items-center">
                              <input class="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" style={{ opacity: 0, cursor: 'pointer' }} />
                              <div className="">
                                <i class="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
                                <div className="text-445B64">Upload License Image </div>
                              </div>
                            </div>
                            <div className="form-control inputFile p-4 text-center position-relative d-flex justify-content-center align-items-center">
                              <input class="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" style={{ opacity: 0, cursor: 'pointer' }} />
                              <div className="">
                                <i class="fa-solid fa-camera fs-4 text-01A99A"></i>
                                <div className="text-445B64">Capture License Image</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label text-445B64">Cheque Image</label>
                          <div className="d-flex gap-3">
                            <div className="form-control inputFile p-4 text-center position-relative d-flex justify-content-center align-items-center">
                              <input class="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmit} style={{ opacity: 0, cursor: 'pointer' }} />
                              <div className="">
                                <i class="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
                                <div className="text-445B64">Upload Cheque Image </div>
                              </div>
                            </div>
                            <div className="form-control inputFile p-4 text-center position-relative d-flex justify-content-center align-items-center">
                              <input class="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleLicenseImageChange} style={{ opacity: 0, cursor: 'pointer' }} />
                              <div className="">
                                <i class="fa-solid fa-camera fs-4 text-01A99A"></i>
                                <div className="text-445B64">Capture Cheque Image</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='row'>
                            <img src={formData?.imageUrl} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <label className="form-label text-445B64">Customer Name</label>
                              <input type="text" className="form-control" value={formData.customerName || ''} onChange={(e) => setFormData({ ...formData, customerName: e.target.value })} />
                            </div>
                            <div className="col-md-4 mb-3">
                              <label className="form-label text-445B64">License No</label>
                              <input type="text" className="form-control" value={formData.licenseNo || ''} onChange={(e) => setFormData({ ...formData, licenseNo: e.target.value })} />
                            </div>
                            <div className="col-md-4 mb-3">
                              <label className="form-label text-445B64">Date</label>
                              <input type="text" className="form-control" value={formData.date || ''} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                            </div>

                            <div className="col-md-4 mb-3">
                              <label className="form-label text-445B64">Company</label>
                              <input type="text" className="form-control" value={formData.company || ''} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                            </div>
                            <div className="col-md-4 mb-3">
                              <label className="form-label text-445B64">Check Type</label>
                              <input type="text" className="form-control" value={formData.checkType || ''} onChange={(e) => setFormData({ ...formData, checkType: e.target.value })} />

                            </div>
                            <div className="col-md-4 mb-3">
                              <label className="form-label text-445B64">Amount</label>
                              <input type="text" className="form-control" value={formData.amount || ''} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3 pb-4">
                          <label className="form-label text-445B64">Comments</label>
                          <textarea className="form-control h-100">Lorem Ipsum..</textarea>
                        </div>

                        <div className="col-lg-4 me-auto mt-0 text-center">
                          <button className="btn theme-btn px-5 py-2 rounded-3 mt-3 w-100" >Save</button>
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

export default Home


