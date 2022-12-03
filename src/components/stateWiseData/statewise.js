import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1>INDIA COVID-19 Dashboard</h1>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mt-5 text-center">
            <span className="font-weight-bold">INDIA</span>COVID-19
          </h1>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th> State </th>
                  <th> Confirmed </th>
                  <th> recovered </th>
                  <th> deaths </th>
                  <th> active </th>
                  <th> updated </th>
                </tr>
              </thead>
              <tbody>
                {data.map((curElem, ind) => {
                  return (
                    <tr key={ind}>
                      <th> {curElem.state} </th>
                      <th> {curElem.confirmed} </th>
                      <th> {curElem.recovered} </th>
                      <th> {curElem.deaths} </th>
                      <th> {curElem.active} </th>
                      <th> {curElem.updated} </th>
                    </tr>
                  );
                })}
                <tr>
                  <td> State </td>
                  <td> Confirmed </td>
                  <td> recovered </td>
                  <td> details </td>
                  <td> active </td>
                  <td> updated </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statewise;
