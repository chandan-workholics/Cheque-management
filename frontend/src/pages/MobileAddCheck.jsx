import React, { useState } from 'react';

const MobileAddCheck = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
    const skipStep = () => setStep(3);

    return (
        <>
            <div className="form-container">
                {step === 1 && (
                    <div>
                        <div className="container-fluid mobile-bg d-block d-lg-none position-relative" style={{ minHeight: '100vh' }}>
                            <div className="card border-0 bg-transparent">
                                <div className="card-header bg-transparent p-3" style={{ margin: '0 -12px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 8V9H17V8V7H1V8Z" fill="black" />
                                    </svg>
                                    <span className="fs-6 ms-2 text-000000 fw-semibold">Upload Check Image</span>
                                </div>
                                <div className="card-body bg-transparent px-0">
                                    <div className="mb-4">
                                        <div className="form-control inputFile p-4 mb-3 text-center position-relative d-flex justify-content-center align-items-center">
                                            <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" style={{ opacity: 0, cursor: 'pointer' }} />
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
                                            <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" style={{ opacity: 0, cursor: 'pointer' }} />
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
                            <div className="card position-fixed start-0 bottom-0 w-100 border-0">
                                <div className="card-body" style={{ padding: '12px' }}>
                                    <button className='theme-btn w-100' onClick={nextStep}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <div className="container-fluid mobile-bg d-block d-lg-none position-relative" style={{ minHeight: '100vh' }}>
                            <div className="card border-0 bg-transparent">
                                <div className="card-header bg-transparent p-3" style={{ margin: '0 -12px' }}>
                                    <button className="border-0 bg-transparent" onClick={prevStep}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 8V9H17V8V7H1V8Z" fill="black" />
                                        </svg>
                                    </button>
                                    <span className="fs-6 ms-2 text-000000 fw-semibold">Upload License Image</span>
                                </div>
                                <div className="card-body bg-transparent px-0">
                                    <div className="mb-4">
                                        <div className="form-control inputFile p-4 mb-3 text-center position-relative d-flex justify-content-center align-items-center">
                                            <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" style={{ opacity: 0, cursor: 'pointer' }} />
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
                                            <input className="position-absolute top-0 start-0 w-100 h-100" type="file" id="formFile" style={{ opacity: 0, cursor: 'pointer' }} />
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
                            <div className="card position-fixed start-0 bottom-0 w-100 border-0">
                                <div className="card-body" style={{ padding: '12px' }}>
                                    <button className='w-100 border-0 bg-transparent text-secondary mb-4 fw-semibold' onClick={skipStep}>Skip</button>
                                    <button className='theme-btn w-100' onClick={nextStep}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2>Step 3</h2>
                        <input type="password" placeholder="Password" />
                        <button onClick={prevStep}>Back</button>
                        <button onClick={() => alert('Form Submitted!')}>Submit</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default MobileAddCheck