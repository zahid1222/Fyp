import React, { useEffect, useState ,useRef} from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
const Dashboard = () => {
  const [record, setRecord] = useState([]);
  const chartRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-Booking');
        setData(response.data);
        createChart(response.data);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, []);


  
  const createChart = (data) => {
    const labels = data.map((output) => output.VenueName);
    const values = data.map((output) => output.guest);
    const colors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ];

    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Users',
            data: values,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  };





  return (
    <div className="col main pt-5 mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Venues</a></li>
          <li className="breadcrumb-item active" aria-current="page">Payment</li>
        </ol>
      </nav>
      <p className="lead d-none d-sm-block">Add Venues Details and Records</p>

      <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div>

      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card bg-success text-white h-100">
            <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
              <div className="rotate">
                <i className="fas fa-building fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Total Venue</h6>
              <h1 className="display-4">134</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-danger h-100">
            <div className="card-body bg-danger">
              <div className="rotate">
                <i className="fa fa-user fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Customers</h6>
              <h1 className="display-4">87</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-info h-100">
            <div className="card-body bg-info">
              <div className="rotate">
                <i className="fas fa-check-circle fa-4x font-weight-bold"></i>
              </div>
              <h6 className="text-uppercase">Events Completed</h6>
              <h1 className="display-4">125</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <div className="rotate">
                <i className="far fa-clock fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Pending Events</h6>
              <h1 className="display-4">36</h1>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="row ">
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
          <b><h2 className="display-4 text-primary mt-5 mb-2">Pending Events</h2></b>
          <p className="lead mb-5 d-none d-sm-block">Customers Details and Records</p>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>VenueName</th>
                <th>Guests</th>
                <th>Date</th>
                <th>Shift</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 5).map((output) => (
                <tr key={output.id}>
                  <td>{output.id}</td>
                  <td>{output.venueName}</td>
                  <td>{output.guest}</td>
                  <td>{output.date}</td>
                  <td>{output.shift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-lg-7 col-md-6 col-sm-12">
          
          <canvas id="myChart" width="400" height="400"></canvas>
          <div id="chartContainer" style={{ height: "300px", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
