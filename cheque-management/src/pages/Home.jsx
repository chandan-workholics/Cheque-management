import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/Sidebar';

const Home = () => {

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
                <div className="container-fluid p-4">
                  {/* Status Cards */}
                  <div className="row mb-4">
                    {[
                      { title: "Today's Status", amount: "$1,000", new: 1, good: 20, bad: 5 },
                      { title: "Weekly Status", amount: "$25,000", new: 30, good: 50, bad: 10 },
                      { title: "Monthly Status", amount: "$53,000", new: 50, good: 100, bad: 50 }
                    ].map((stat, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="card shadow-sm border-0 rounded-4">
                          <div className="card-body">
                            <div className="d-flex align-items-center mb-2">
                              <div className="bg-light rounded-4 p-2 me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                  <path d="M9.16667 12.1667H3.33333V10.5H9.16667M11.6667 8.83333H3.33333V7.16667H11.6667M11.6667 5.5H3.33333V3.83333H11.6667M13.3333 0.5H1.66667C0.741667 0.5 0 1.24167 0 2.16667V13.8333C0 14.2754 0.175595 14.6993 0.488155 15.0118C0.800716 15.3244 1.22464 15.5 1.66667 15.5H13.3333C13.7754 15.5 14.1993 15.3244 14.5118 15.0118C14.8244 14.6993 15 14.2754 15 13.8333V2.16667C15 1.72464 14.8244 1.30072 14.5118 0.988155C14.1993 0.675595 13.7754 0.5 13.3333 0.5Z" fill="#445B64" />
                                </svg>
                              </div>
                              <div>
                                <p className="mb-0 fw-medium text-muted">{stat.title}</p>
                                <h4 className="mb-0 text-success fw-bold">{stat.amount}</h4>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between small">
                              <span className="badge bg-light text-dark">{stat.new} New Checks</span>
                              <span className="badge bg-success text-light">{stat.good} Good Checks</span>
                              <span className="badge bg-danger text-light">{stat.bad} Bad Checks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* New Check Form */}
                  <div className="card">
                    <div className="card-header bg-light">
                      <strong>New Checks</strong>
                    </div>
                    <div className="card-body">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">License Image</label>
                          <div className="d-flex gap-3">
                            <button className="form-control border dashed text-center py-4">
                              <i className="bi bi-upload"></i> Upload License Image
                            </button>
                            <button className="form-control border dashed text-center py-4">
                              <i className="bi bi-camera"></i> Capture License Image
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Check Image</label>
                          <div className="d-flex gap-3">
                            <button className="form-control border dashed text-center py-4">
                              <i className="bi bi-upload"></i> Upload Image
                            </button>
                            <button className="form-control border dashed text-center py-4">
                              <i className="bi bi-camera"></i> Capture Image
                            </button>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Customer Name</label>
                          <input type="text" className="form-control" value="Rohit Sharma" readOnly />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">License No</label>
                          <input type="text" className="form-control" value="4464644646" readOnly />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Date</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Company</label>
                          <input type="text" className="form-control" value="State Bank of India" readOnly />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Check Type</label>
                          <select className="form-select">
                            <option>Select</option>
                            <option>Type 1</option>
                            <option>Type 2</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Amount</label>
                          <input type="text" className="form-control" value="50,0000" readOnly />
                        </div>

                        <div className="col-md-12">
                          <label className="form-label">Comments</label>
                          <textarea className="form-control">Lorem Ipsum..</textarea>
                        </div>

                        <div className="col-12 text-center">
                          <button className="btn btn-primary px-5 py-2 rounded-pill mt-3">Save</button>
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