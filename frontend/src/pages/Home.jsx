// import React, { useEffect } from 'react';
// import Header from '../components/header';
// import Sidebar from '../components/Sidebar';
// import { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const URL = process.env.REACT_APP_URL;
// const Home = () => {
//   const venderId = localStorage.getItem("userId");
//   const [loading, setLoading] = useState(false);
//   const [loading1, setLoading1] = useState(false);
//   const [loading2, setLoading2] = useState(false);
//   const [loading3, setLoading3] = useState(false);
//   const [formData, setFormData] = useState({
//     customerFirstName: '',
//     customerMiddleName: '',
//     customerLastName: '',
//     licenseNo: '',
//     date: '',
//     company: '',
//     checkType: '',
//     amount: '',
//     imageUrl: '',
//     extractedText: '',
//   });

//   const [formDataback, setFormDataback] = useState({
//     customerFirstName: '',
//     customerMiddleName: '',
//     customerLastName: '',
//     licenseNo: '',
//     date: '',
//     company: '',
//     checkType: '',
//     amount: '',
//     imageUrl: '',
//     extractedText: '',
//   });

//   const [licenseData, setLicenseData] = useState({
//     imageUrl: '',
//     name: '',
//     licenseNo: '',
//     class: '',
//     dob: '',
//     sex: '',
//     eyes: '',
//     height: '',
//     address: '',
//     issuedDate: '',
//     expiryDate: '',
//   });

//   const [licenseDataback, setLicenseDataback] = useState({
//     imageUrl: '',
//     name: '',
//     licenseNo: '',
//     class: '',
//     dob: '',
//     sex: '',
//     eyes: '',
//     height: '',
//     address: '',
//     issuedDate: '',
//     expiryDate: '',
//   });

//   const [status, setStatus] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     if (!file) {
//       alert("Please upload a cheque image.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', file);
//     try {
//       setLoading(true)
//       const response = await axios.post(`${URL}/scan-check`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setTimeout(() => {
//         toast.success('Check front image upload successfully!');
//       }, 1000);
//       const result = response.data;
//       if (result && result.customerName) {
//         const parsedData = {
//           customerFirstName: result.customerFirstName || '',
//           customerMiddleName: result.customerMiddleName || '',
//           customerLastName: result.customerLastName || '',
//           date: result.date || '',
//           company: result.company || '',
//           checkType: result.checkType || '',
//           amount: result.amountNumeric || '',
//           amountWords: result.amountWords || '',
//           payee: result.payee || '',
//           memo: result.memo || '',
//           imageUrl: result.imageUrl || '',
//           extractedText: result.extractedText || ''
//         };
//         setFormData(parsedData);
//       }
//     } catch (error) {
//       setTimeout(() => {
//         toast.error("Error in image uploading",error);
//       }, 1000);
//       console.error('Error during image upload:', error);
//     } finally {
//       setLoading(false)
//     }
//   };

//   const handleSubmitback = async (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     if (!file) {
//       alert("Please upload a check image.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', file);
//     try {
//       setLoading1(true)
//       const response = await axios.post(`${URL}/scan-check`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setTimeout(() => {
//         toast.success('Check Back image upload successfully!');
//       }, 1000);
//       const result = response.data;
//       if (result && result.customerName) {
//         const parsedData = {
//           customerName: result.customerName || '',
//           date: result.date || '',
//           company: result.company || '',
//           checkType: result.checkType || '',
//           amount: result.amountNumeric || '',
//           amountWords: result.amountWords || '',
//           payee: result.payee || '',
//           memo: result.memo || '',
//           imageUrl: result.imageUrl || '',
//           extractedText: result.extractedText || ''
//         };
//         setFormDataback(parsedData);
//       }
//     } catch (error) {
//       setTimeout(() => {
//         toast.error("Error in image uploading",error);
//       }, 1000);
//       console.error('Error during image upload:', error);
//     } finally {
//       setLoading1(false)
//     }
//   };

//   const handleSubmitLicense = async (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     if (!file) {
//       alert("Please upload a License image.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', file);
//     try {
//       setLoading2(true)
//       const response = await axios.post(`${URL}/scan-license`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setTimeout(() => {
//         toast.success('License Front image upload successfully!');
//       }, 1000);
//       const result = response.data;
//       if (result) {
//         const parsedData = {
//           imageUrl: result.imageUrl || '',
//           name: result.name || '',
//           licenseNo: result.licenseNo || '',
//           dob: result.dob || '',
//           sex: result.sex || '',
//           eyes: result.eyes || '',
//           height: result.height || '',
//           address: result.address || '',
//           issuedDate: result.issuedDate || '',
//           expiryDate: result.expiryDate || '',
//         };
//         setLicenseData(parsedData);
//       }
//     } catch (error) {
//       setTimeout(() => {
//         toast.error("Error in image uploading",error);
//       }, 1000);
//       console.error('Error during image upload:', error);
//     } finally {
//       setLoading2(false)
//     }
//   };

//   const handleSubmitLicenseback = async (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     if (!file) {
//       alert("Please upload a License image.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append('image', file);
//     try {
//       setLoading3(true)
//       const response = await axios.post(`${URL}/scan-license`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setTimeout(() => {
//         toast.success('License Back image upload successfully!');
//       }, 1000);
//       const result = response.data;
//       if (result) {
//         const parsedData = {
//           imageUrl: result.imageUrl || '',
//           name: result.name || '',
//           licenseNo: result.licenseNo || '',
//           dob: result.dob || '',
//           sex: result.sex || '',
//           eyes: result.eyes || '',
//           height: result.height || '',
//           address: result.address || '',
//           issuedDate: result.issuedDate || '',
//           expiryDate: result.expiryDate || '',
//         };
//         setLicenseDataback(parsedData);
//       }
//     } catch (error) {
//       setTimeout(() => {
//         toast.error("Error in image uploading",error);
//       }, 1000);
//       console.error('Error during image upload:', error);
//     } finally {
//       setLoading3(false)
//     }
//   };

//   const handleStatus = async () => {
//     try {
//       const response = await axios.get(`${URL}/check/status`, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//       if (response.status >= 200 && response.status < 300) {
//         setStatus(response?.data || []);
//       }
//     } catch (error) {
//       console.log("Error in fetching data");
//     }
//   }

//   useEffect(() => {
//     handleStatus();
//   }, [])

//   const handleSave = async (e) => {
//     e.preventDefault();
//     if (!formData.imageUrl || !licenseData.imageUrl) {
//       toast.error('Please upload both Cheque and License front images');
//       return;
//     }
//     try {
//       const response = await axios.post(`${URL}/check/add-check`, {
//         imageUrl: formData.imageUrl || '',
//         imageUrl2: formDataback.imageUrl || '',
//         imageUrl3: licenseData.imageUrl || '',
//         imageUrl4: licenseDataback.imageUrl || '',
//         customerFirstName: formData.customerFirstName,
//         customerLastName: formData.customerLastName,
//         customerMiddleName: formData.customerMiddleName,
//         licenseNo: licenseData.licenseNo,
//         date: new Date(Date.now()).toLocaleString('en-GB', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit',
//           second: '2-digit',
//           hour12: false // 24-hour format
//         }),
//         company: formData.company,
//         checkType: formData.checkType,
//         amount: formData.amount,
//         status: formData.status,
//         extractedText: formData.extractedText,
//         comment: formData.comment || 'xyz',
//         venderId: venderId
//       });
//       if (response.status >= 200 && response.status < 300) {
//         toast.success('Check added successfully!');
//       } else {
//         toast.error('Failed to add check');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('An error occurred while submitting the form');
//     }
//   };
//   return (
//     <>
//       <div className="container-fluid">
//         <Header />
//         <div className="">
//           <div className="row mh-100vh">
//              <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//             <div className="col-lg-2 col-xl-2 d-none d-lg-block position-relative">
//               <Sidebar />
//             </div>
//             <div className="col-lg-10 col-xl-10 bg-F6F6F6">
//               <div className="main-content">
//                 <div className="container-fluid p-3 px-2">
//                   {/* Status Cards */}
//                   <div className="row mb-2">
//                     <div className="col-md-6 col-xl-4 mb-3">
//                       <div className="card shadow-sm border-0 rounded-4">
//                         <div className="card-body">
//                           <div className="d-flex align-items-center mb-3">
//                             <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
//                                 <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#000000" />
//                               </svg>
//                             </div>
//                             <div>
//                               <h6 className="mb-1 fw-medium text-445B64">Today's Status</h6>
//                               <h4 className="mb-0 text-00C7BE fw-bold">
//                                 ${parseFloat(status?.day?.totalAmount || 0).toFixed(2)}
//                               </h4>
//                             </div>
//                           </div>
//                           <div className="d-flex justify-content-between small">
//                             <span className="badge bg-F5EEFF text-515151">{status?.day?.totalChecks || 0} New Checks</span>
//                             <span className="badge bg-EFFFFE text-01A99A">{status?.day?.goodChecks || 0} Good Checks</span>
//                             <span className="badge bg-FFF6F6 text-E84D4D">{status?.day?.badChecks || 0} Bad Checks</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-xl-4 mb-3">
//                       <div className="card shadow-sm border-0 rounded-4">
//                         <div className="card-body">
//                           <div className="d-flex align-items-center mb-3">
//                             <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
//                                 <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#000000" />
//                               </svg>
//                             </div>
//                             <div>
//                               <h6 className="mb-1 fw-medium text-445B64">Weekly Status</h6>
//                               <h4 className="mb-0 text-00C7BE fw-bold">${parseFloat(status?.week?.totalAmount || 0).toFixed(2)}</h4>
//                             </div>
//                           </div>
//                           <div className="d-flex justify-content-between small">
//                             <span className="badge bg-F5EEFF text-515151">{status?.week?.totalChecks || 0} New Checks</span>
//                             <span className="badge bg-EFFFFE text-01A99A">{status?.week?.goodChecks || 0} Good Checks</span>
//                             <span className="badge bg-FFF6F6 text-E84D4D">{status?.week?.badChecks || 0} Bad Checks</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-xl-4 mb-3">
//                       <div className="card shadow-sm border-0 rounded-4">
//                         <div className="card-body">
//                           <div className="d-flex align-items-center mb-3">
//                             <div className="bg-light rounded-3 p-3 me-3 d-flex align-items-center justify-content-center">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 16" fill="none">
//                                 <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#000000" />
//                               </svg>
//                             </div>
//                             <div>
//                               <h6 className="mb-1 fw-medium text-445B64">Monthly Status</h6>
//                               <h4 className="mb-0 text-00C7BE fw-bold">${parseFloat(status?.month?.totalAmount || 0).toFixed(2)}</h4>
//                             </div>
//                           </div>
//                           <div className="d-flex justify-content-between small">
//                             <span className="badge bg-F5EEFF text-515151">{status?.month?.totalChecks || 0} New Checks</span>
//                             <span className="badge bg-EFFFFE text-01A99A">{status?.month?.goodChecks || 0} Good Checks</span>
//                             <span className="badge bg-FFF6F6 text-E84D4D">{status?.month?.badChecks || 0} Bad Checks</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* New Check Form */}
//                   <div className="card rounded-4 overflow-hidden border-0 shadow-sm">
//                     <div className="card-header bg-white d-flex align-items-center py-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
//                         <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#000000" />
//                       </svg>
//                       <h6 className='ms-2 mb-0 text-445B64'>New Checks</h6>
//                     </div>
//                     <div className="card-body">
//                       <div className="row g-3 new-cheque-form">
//                         <div className="col-md-6">
//                           <label className="form-label text-445B64">License Image</label>
//                           <div className="d-flex gap-2 gap-lg-3">
//                             <div className="form-control inputFile p-3 p-lg-4 text-center position-relative d-flex justify-content-center align-items-center">
//                               <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmitLicense} style={{ opacity: 0, cursor: 'pointer' }} />
//                               <div className="">
//                                 <i className="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
//                                 <div className="text-445B64">Upload/Capture Front </div>
//                               </div>
//                             </div>
//                             <div className="form-control inputFile p-3 p-lg-4 text-center position-relative d-flex justify-content-center align-items-center">
//                               <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmitLicenseback} style={{ opacity: 0, cursor: 'pointer' }} />
//                               <div className="">
//                                 <i className="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
//                                 <div className="text-445B64">Upload/Capture Back  </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="row">
//                             {loading2 ? (
//                               <div className="col-6 text-center py-5 px-5">
//                                 <div className="spinner-border text-primary" role="status">
//                                   <span className="visually-hidden">Loading...</span>
//                                 </div>
//                               </div>

//                             ) : (
//                               <>
//                                 {licenseData?.imageUrl && (
//                                   <div className='col-lg-6'>
//                                     <label className="form-label text-445B64 mb-1 mt-3">Front Image</label>
//                                     <img
//                                       src={licenseData.imageUrl}
//                                       alt="Front License"
//                                       className='w-100 border rounded-4 overflow-hidden'
//                                     />
//                                   </div>
//                                 )}
//                               </>
//                             )}
//                             {loading3 ? (
//                               <div className="col-6 text-center py-5 px-5">
//                                 <div className="spinner-border text-primary" role="status">
//                                   <span className="visually-hidden">Loading...</span>
//                                 </div>
//                               </div>

//                             ) : (
//                               <>
//                                 {licenseDataback?.imageUrl && (
//                                   <div className='col-lg-6'>
//                                     <label className="form-label text-445B64 mb-1 mt-3">Back Image</label>
//                                     <img
//                                       src={licenseDataback.imageUrl}
//                                       alt="Back License"
//                                       className='w-100 border rounded-4 overflow-hidden'
//                                     />
//                                   </div>
//                                 )}
//                               </>
//                             )}

//                             <div className="col-lg-6"></div>
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <label className="form-label text-445B64">Check Image</label>


//                           <div className="d-flex gap-2 gap-lg-3">
//                             <div className="form-control inputFile p-3 p-lg-4 text-center position-relative d-flex justify-content-center align-items-center">
//                               <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmit} style={{ opacity: 0, cursor: 'pointer' }} />
//                               <div className="">
//                                 <i className="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
//                                 <div className="text-445B64">Upload/Capture Front </div>
//                               </div>
//                             </div>

//                             <div className="form-control inputFile p-3 p-lg-4 text-center position-relative d-flex justify-content-center align-items-center">
//                               <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" onChange={handleSubmitback} style={{ opacity: 0, cursor: 'pointer' }} />
//                               <div className="">
//                                 <i className="fa-solid fa-arrow-up-from-bracket fs-4 text-01A99A"></i>
//                                 <div className="text-445B64">Upload/Capture Back </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="row">
//                             {loading ? (
//                               <div className="col-6 text-center py-5 px-5">
//                                 <div className="spinner-border text-primary" role="status">
//                                   <span className="visually-hidden">Loading...</span>
//                                 </div>
//                               </div>

//                             ) : (
//                               <>
//                                 {formData?.imageUrl && (
//                                   <div className='col-lg-6'>
//                                     <label className="form-label text-445B64 mb-1 mt-3">Front Image</label>
//                                     <img src={formData.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
//                                   </div>
//                                 )}
//                               </>
//                             )}
//                             {loading1 ? (
//                               <div className="col-6 text-center py-5 px-5">
//                                 <div className="spinner-border text-primary" role="status">
//                                   <span className="visually-hidden">Loading...</span>
//                                 </div>
//                               </div>

//                             ) : (
//                               <>
//                                 {formData?.imageUrl && (
//                                   <div className='col-lg-6'>
//                                     <label className="form-label text-445B64 mb-1 mt-3">Back Image</label>
//                                     <img src={formDataback.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
//                                   </div>
//                                 )}
//                               </>
//                             )}
//                           </div>
//                         </div>
//                         <div className="col-12 d-flex justify-content-end">
//                           <button type="button" className="btn btn-sm py-1 px-3 theme-btn rounded-3 mt-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
//                             Please Check all Details
//                           </button>
//                         </div>
//                         <div className="col-lg-8">
//                           <div className="row">
//                             <div className="col-md-9">
//                               <div className="row">
//                                 <label className="form-label text-445B64">Customer Name</label>
//                                 <div className="col-md-4 mb-3">
//                                   <input type="text" className="form-control" placeholder='First Name' value={licenseData.customerFirstName || formData.customerFirstName} onChange={(e) => setFormData({ ...formData, customerFirstName: e.target.value })} />
//                                 </div>
//                                 <div className="col-md-4 mb-3">
//                                   <input type="text" className="form-control" placeholder='Middle Name' value={licenseData.customerMiddleName || formData.customerMiddleName} onChange={(e) => setFormData({ ...formData, customerMiddleName: e.target.value })} />
//                                 </div>
//                                 <div className="col-md-4 mb-3">
//                                   <input type="text" className="form-control" placeholder='Last Name' value={licenseData.customerLastName || formData.customerLastName} onChange={(e) => setFormData({ ...formData, customerLastName: e.target.value })} />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-md-3 mb-3">
//                               <label className="form-label text-445B64">License No</label>
//                               <input type="text" className="form-control" value={licenseData.licenseNo || ''} onChange={(e) => setLicenseData({ ...licenseData, licenseNo: e.target.value })} />
//                             </div>
//                             {/* <div className="col-md-4 mb-3">
//                               <label className="form-label text-445B64">Date</label>
//                               <input type="text" className="form-control" value={formData.date || ''} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
//                             </div> */}

//                             <div className="col-md-3 mb-3">
//                               <label className="form-label text-445B64">Company</label>
//                               <input type="text" className="form-control" placeholder='Company Name' value={formData.company || ''} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
//                             </div>
//                             <div className="col-md-3 mb-3">
//                               <label className="form-label text-445B64">Check Type</label>
//                               <select
//                                 className="form-control"
//                                 value={formData.checkType || ''}
//                                 onChange={(e) => setFormData({ ...formData, checkType: e.target.value })}
//                               >
//                                 <option value="">Select Check Type</option>
//                                 <option value="Personal">Personal</option>
//                                 <option value="Business">Business</option>
//                               </select>
//                             </div>

//                             <div className="col-md-3 mb-3">
//                               <label className="form-label text-445B64">Status</label>
//                               <select
//                                 className="form-control"
//                                 value={formData.status || ''}
//                                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                               >
//                                 <option value="">Select Status</option>
//                                 <option value="good">Good</option>
//                                 <option value="bad">Bad</option>
//                               </select>
//                             </div>

//                             <div className="col-md-3 mb-3">
//                               <label className="form-label text-445B64">Amount</label>
//                               <input type="text" className="form-control" value={formData.amount || ''} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-md-4 mb-3 pb-4 mt-0 mt-lg-3">
//                           <label className="form-label text-445B64">Comments</label>
//                           <textarea className="form-control h-100" value={formData.comment || ''} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
//                         </div>

//                         <div className="col-lg-4 me-auto mt-0 text-center">
//                           <button className="btn theme-btn px-5 py-2 rounded-3 mt-3 w-100" onClick={handleSave}>Save</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div >

//       {/* image-preview-Modal */}
//       < div className="modal modal-xl fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h6 className="modal-title text-445B64" id="exampleModalLabel">Preview Details</h6>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="row">
//                 <div className='col-lg-6'>
//                   {/* {licenseData?.imageUrl && <img src={licenseData.imageUrl} alt="Profile" className='w-100' />} */}
//                   {formData?.imageUrl && <img src={formData.imageUrl} alt="Profile" className='w-100' />}
//                 </div>
//                 <div className='col-lg-6 d-flex align-items-center'>
//                   <div
//                     className="form-control border-0 bg-F0F5F6"
//                     style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
//                     dangerouslySetInnerHTML={{ __html: formData?.extractedText }}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-sm btn-light bg-F0F5F6 border rounded-3 px-5" data-bs-dismiss="modal">Ok</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home


import React, { useEffect } from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const URL = process.env.REACT_APP_URL;

const Home = () => {
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
    checkType: '',
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

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState({});

  const requiredFields = ['customerFirstName', 'licenseNo', 'company', 'checkType', 'status', 'amount'];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerFirstName?.trim()) {
      newErrors.customerFirstName = "Please fill this field";
    }
    if (!licenseData.licenseNo?.trim()) {
      newErrors.licenseNo = "Please fill this field";
    }
    if (!formData.company?.trim()) {
      newErrors.company = "Please fill this field";
    }
    if (!formData.checkType?.trim()) {
      newErrors.checkType = "Please select check type";
    }
    if (!formData.status?.trim()) {
      newErrors.status = "Please select status";
    }
    if (!formData.amount?.trim()) {
      newErrors.amount = "Please enter amount";
    }

    setErrors(newErrors);
    requiredFields.forEach(field => {
      if (field === 'licenseNo') {
        if (!licenseData.licenseNo || licenseData.licenseNo.trim() === '') {
          newErrors[field] = true;
        }
      } else {
        if (!formData[field] || formData[field].trim() === '') {
          newErrors[field] = true;
        }
      }
    });
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
        checkType: formData.checkType,
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

  return (
    <>
      <div className="container-fluid">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
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
                                  <div className='col-lg-6'>
                                    <label className="form-label text-445B64 mb-1 mt-3">Front Image</label>
                                    <img
                                      src={licenseData.imageUrl}
                                      alt="Front License"
                                      className='w-100 border rounded-4 overflow-hidden'
                                    />
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
                                    <img
                                      src={licenseDataback.imageUrl}
                                      alt="Back License"
                                      className='w-100 border rounded-4 overflow-hidden'
                                    />
                                  </div>
                                )}
                              </>
                            )}

                            <div className="col-lg-6"></div>
                          </div>
                        </div>
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
                                    <img src={formData.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
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
                                {formData?.imageUrl && (
                                  <div className='col-lg-6'>
                                    <label className="form-label text-445B64 mb-1 mt-3">Back Image</label>
                                    <img src={formDataback.imageUrl} alt="Profile" className='w-100 border rounded-4 overflow-hidden' />
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                          <button type="button" className="btn btn-sm py-1 px-3 theme-btn rounded-3 mt-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Please Check all Details
                          </button>
                        </div>
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-md-9">
                              <div className="row">
                                <label className="form-label text-445B64">Customer Name <span className='text-danger'>*</span></label>
                                <div className="col-md-4 mb-3">
                                  <input
                                    type="text"
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
                                  <input type="text" className="form-control" placeholder='Middle Name' value={licenseData.customerMiddleName || formData.customerMiddleName} onChange={(e) => setFormData({ ...formData, customerMiddleName: e.target.value })} />
                                </div>
                                <div className="col-md-4 mb-3">
                                  <input type="text" className="form-control" placeholder='Last Name' value={licenseData.customerLastName || formData.customerLastName} onChange={(e) => setFormData({ ...formData, customerLastName: e.target.value })} />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">License No  <span className='text-danger'>*</span></label>
                              <input type="text" className={`form-control ${errors.licenseNo ? 'border border-danger' : licenseData.licenseNo ? 'border border-success' : ''}`} value={licenseData.licenseNo || ''}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setLicenseData({ ...licenseData, licenseNo: value });
                                  if (value.trim() !== '') {
                                    setErrors((prev) => ({ ...prev, licenseNo: null }));
                                  }
                                }}
                              />
                              {errors.licenseNo && (
                                <div className="text-danger mt-1" style={{ fontSize: '0.6rem' }}>
                                  "Please fill the license number"
                                </div>
                              )}
                            </div>
                            {/* <div className="col-md-4 mb-3">
                              <label className="form-label text-445B64">Date</label>
                              <input type="text" className="form-control" value={formData.date || ''} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                            </div> */}

                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">Company <span className='text-danger'>*</span></label>
                              <input
                                type="text"
                                className={`form-control ${errors.company ? 'border border-danger' : formData.company ? 'border border-success' : ''}`}
                                placeholder='Company Name'
                                value={formData.company || ''}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setFormData({ ...formData, company: value });

                                  if (value.trim() !== '') {
                                    setErrors((prev) => ({ ...prev, company: null }));
                                  }
                                }}
                              />
                              {errors.company && (
                                <div className="text-danger mt-1" style={{ fontSize: '0.6rem' }}>
                                  "Please fill the company"
                                </div>
                              )}
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">
                                Check Type <span className='text-danger'>*</span>
                              </label>
                              <select
                                className={`form-control ${errors.checkType ? 'border border-danger' : formData.checkType ? 'border border-success' : ''}`}
                                value={formData.checkType || ''}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setFormData({ ...formData, checkType: value });
                                  if (value.trim() !== '') {
                                    setErrors((prev) => ({ ...prev, checkType: null }));
                                  }
                                }}
                              >
                                <option value="">Select Check Type</option>
                                <option value="Personal">Personal</option>
                                <option value="Business">Business</option>
                              </select>
                              {errors.checkType && (
                                <div className="text-danger mt-1" style={{ fontSize: '0.6rem' }}>
                                  "Please Select the check type"
                                </div>
                              )}
                            </div>


                            <div className="col-md-3 mb-3">
                              <label className="form-label text-445B64">Status <span className='text-danger'>*</span></label>
                              <select
                                className={`form-control ${errors.status ? 'border border-danger' : formData.status ? 'border border-success' : ''}`}
                                value={formData.status || ''}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setFormData({ ...formData, status: value });
                                  if (value.trim() !== '') {
                                    setErrors((prev) => ({ ...prev, status: null }));
                                  }
                                }}
                              >
                                <option value="">Select Status</option>
                                <option value="good">Good</option>
                                <option value="bad">Bad</option>
                              </select>
                              {errors.status && (
                                <div className="text-danger mt-1" style={{ fontSize: '0.6rem' }}>
                                  "Please select the status"
                                </div>
                              )}
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
    </>
  )
}

export default Home


