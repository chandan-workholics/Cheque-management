import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';


const URL = process.env.REACT_APP_URL;

const Dashboard = () => {
    const [data, setData] = useState();

    const [chartData, setChartData] = useState({
        series: [],
        options: {
            chart: {
                type: 'pie',
            },
            labels: [],
            legend: {
                position: 'bottom',
            },
            colors: ['#00C7BE', '#FF6B6B', '#FFA500'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: { width: 300 },
                    legend: { position: 'bottom' }
                }
            }]
        }
    });


    const fetchDatas = async () => {
        try {
            const response = await axios.get(`${URL}/admin/dashboard-detail`);
            if (response.status >= 200 && response.status < 300) {
                const fetchedData = response?.data;
                setData(fetchedData);

                const checkStatus = fetchedData?.chart?.checkStatus;
                if (Array.isArray(checkStatus)) {
                    const series = checkStatus.map(item => item.value);
                    const labels = checkStatus.map(item => item.label);

                    setChartData(prev => ({
                        ...prev,
                        series,
                        options: {
                            ...prev.options,
                            labels
                        }
                    }));
                } else {
                    console.warn("checkStatus is missing or not an array");
                }
            }
        } catch (error) {
            console.error("Error in fetching data", error);
        }
    };


    useEffect(() => {
        fetchDatas();
    }, [])


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
                                                            <h4 className="mb-0 text-00C7BE fw-bold">{data?.totalVendor}</h4>
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
                                                            <h6 className="mb-1 fw-medium text-445B64">New Cheques</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">{data?.newCheck}</h4>
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
                                                            <h6 className="mb-1 fw-medium text-445B64">Good Cheques</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">{data?.goodCheck}</h4>
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
                                                            <h6 className="mb-1 fw-medium text-445B64">Bad Cheques</h6>
                                                            <h4 className="mb-0 text-00C7BE fw-bold">{data?.badCheck}</h4>
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
                                                            <h4 className="mb-0 text-00C7BE fw-bold">${data?.todayStatus}</h4>
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
                                                            <h4 className="mb-0 text-00C7BE fw-bold">${data?.weeklyStatus}</h4>
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
                                                            <h4 className="mb-0 text-00C7BE fw-bold">${data?.monthlyStatus}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">


                                        <div className="col-12 col-xl-12 mb-3">
                                            <h5 className="mb-3">Check Status</h5>
                                            <ReactApexChart
                                                options={chartData.options}
                                                series={chartData.series}
                                                type="pie"
                                                height={300}
                                            />
                                        </div>

                                        <div className="col-12 col-xl-12 mb-3">
                                            <h5 className="mb-3">Weekly Checks</h5>
                                            <Chart
                                                options={{
                                                    chart: { id: 'weekly-bar' },
                                                    xaxis: {
                                                        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                                    },
                                                    colors: ['#FFA500'],
                                                }}
                                                series={[{ name: 'Checks', data: data?.chart?.weekly || [] }]}
                                                type="bar"
                                                height={250}
                                            />
                                        </div>

                                        <div className="col-12 col-xl-12 mb-3">
                                            <h5 className="mb-3">Monthly Checks</h5>
                                            <Chart
                                                options={{
                                                    chart: { id: 'monthly-bar' },
                                                    xaxis: {
                                                        categories: data?.chart?.monthly?.map(item => item.date) || [],
                                                    },
                                                    colors: ['#FF4560'],
                                                }}
                                                series={[{
                                                    name: 'Checks',
                                                    data: data?.chart?.monthly?.map(item => item.count) || [],
                                                }]}
                                                type="bar"
                                                height={300}
                                            />
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