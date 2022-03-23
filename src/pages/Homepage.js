import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import '../pages/Homepage.css'
import {Chart,registerables} from 'chart.js';
Chart.register(...registerables);


const Home = () => {
   
  const [about, setabout] = useState([]);

  const state = {
    labels: about.map((emp) => emp.Country),
    datasets: [
      {
        axis: "y",
        label: "TotalCases",
        lineTension: 0.0,
        backgroundColor: "blue",
       pointHitRadius: 30,
        borderWidth: 5,
        data: about.map((emp) => emp.TotalCases),
      },
      {
        axis: "y",
        label: "TotalRecovered",
        lineTension: 0.0,
        backgroundColor: "green",
        pointHitRadius: 30,
        borderWidth: 5,
        data: about.map((emp) => emp.TotalRecovered),
      },
      {
        axis: "y",
        label: "ActiveCases",
        lineTension: 5.0,
        backgroundColor: "orange",
        pointHitRadius: 30,
        borderWidth: 5,
        data: about.map((emp) => emp.ActiveCases),
      },
      {
        axis: "y",
        label: "Death",
        lineTension: 5.0,
        backgroundColor: "red",
        pointHitRadius: 30,
        borderWidth: 5,
        data: about.map((emp) => emp.TotalDeaths),
      },
    ],
  };

  const options = {
    categoryPercentage: 0.8,
    barPercentage: 1,
    indexAxis: "y",
    maintainAspectRatio: true,
    scales: {
      x: {
        ticks: {
          font:{
              size:8
          },
          minRotation: 20,
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font:{
            size:15,
           
        },
          minRotation: 20,
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    // title: {
    //   display: true,
    //   text: "Average Rainfall per month",
    //   fontSize: 20,
    //   color: "white",
    // },
    // legend: {
    //   display: true,
    //   position: "right",
    // },
  };


  useEffect(() => {
    fetch("https://covidpagination.herokuapp.com/country")
      .then((response) => response.json())
      .then((data) => {
        setabout(data.data);
      });
  }, []);
  return (
    <div className="maincontainer" >
      
      <div className="container" >
        <div className="row">
          <div className="">
            <p style={{ fontSize: "50px" }}>COVID-19 DASHBOARD</p>
            <h3>Global Cases</h3>
            <div
              className="container-inner"
              style={{
                backgroundColor: "purple",
                borderRadius: "10px",
                fontSize: "30px",
                padding: "15px",
                
              }}
            >
              <p style={{ color: "blue" }}>TotalCases</p>
              <h4>
                {about.reduce((current, previous) => {
                  return Number(current) + Number(previous.TotalCases);
                }, 0)}
                
              </h4>
              <p style={{ color: "green" }}>TotalRecovered</p>
              <h4>
                {about.reduce((current, previous) => {
                  return Number(current) + Number(previous.TotalRecovered);
                }, 0)}
              </h4>
              <p style={{ color: "orange" }}>ActiveCases</p>
              <h4>
                {about.reduce((current, previous) => {
                  return Number(current) + Number(previous.ActiveCases);
                }, 0)}
              </h4>
              <p style={{ color: "red" }}>TotalDeaths</p>
              <h4>
                {about.reduce((current, previous) => {
                  return Number(current) + Number(previous.TotalDeaths);
                }, 0)}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bar">
      <Bar
              data={state}
              options={options}
              className="chart"
              width={50}
              height={1000}
            />
     
     </div>
     
    </div>
    
  );
};
export default Home;
