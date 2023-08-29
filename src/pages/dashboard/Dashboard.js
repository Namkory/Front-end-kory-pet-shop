import { faBagShopping, faCartShopping, faCircleDollarToSlot, faPager } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './Dashboard.scss';
import { useState, useEffect } from 'react';
import numeral from 'numeral';

const chartOptions = {
    series: [
        {
            name: 'Online Customers',
            data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
        },
        {
            name: 'Store Customers',
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
        },
    ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        legend: {
            position: 'top',
        },
        grid: {
            show: false,
        },
    },
};
function Dashboard() {
    const [total, setTotal] = useState([]);
    const [numberOfOrder, setNumberOfOrder] = useState(0);
    useEffect(() => {
        gesales();
    }, []);
    const gesales = async () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/get-all-orders?id=ALL`)
            .then((res) => {
                const data = res.data;
                if (data.errCode === 0) {
                    let arrTotal = [];
                    setNumberOfOrder(data.orders.length);
                    data.orders?.forEach((item) => {
                        arrTotal.push(+item.totalMoney);
                    });
                    setTotal(arrTotal);
                }
            })
            .catch((error) => console.log(error));
    };
    const handleTotalSales = (data, action) => {
        if (action === 's') {
            const total = data.reduce((a, b) => {
                return a + b;
            }, 0);
            const formattedTotal = numeral(total).format('0,0');
            return formattedTotal;
        } else {
            const total = data.reduce((a, b) => {
                return a + b;
            }, 0);
            const formattedTotal = numeral(total / 2).format('0,0');
            return formattedTotal;
        }
    };

    return (
        <div className="dashboard">
            <h2 className="mb-10 text-2xl font-semibold text-slate-500">Dashboard</h2>
            <div className="dashboard-content1 grid grid-cols-2 gap-6">
                <div className="dashboard-content1-left grid grid-cols-2 gap-6">
                    <div className="box">
                        <FontAwesomeIcon icon={faBagShopping} className="icon" />
                        <div className="box-text">
                            <p className="title">{handleTotalSales(total, 's')}đ</p>
                            <p className="text">Total Sales</p>
                        </div>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={faCartShopping} className="icon" />
                        <div className="box-text">
                            <p className="title">2,001</p>
                            <p className="text">Daily Visits</p>
                        </div>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={faCircleDollarToSlot} className="icon" />
                        <div className="box-text">
                            <p className="title"> {handleTotalSales(total, 'i')}đ</p>
                            <p className="text">Total Income</p>
                        </div>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={faPager} className="icon" />
                        <div className="box-text">
                            <p className="title">{numberOfOrder}</p>
                            <p className="text">Total Orders</p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content1-right">
                    <Chart options={chartOptions.options} series={chartOptions.series} type="line" height="100%" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
