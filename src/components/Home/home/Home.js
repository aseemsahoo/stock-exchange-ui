import React from "react";
import NavigationHome from "../Navigation/NavigationHome";
import Stock from "../Stocks/stock/Stock";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";

const Home = () => {
  const [stocks, setStocks] = useState([]);

  // similar to ngOnInit
  useEffect(() => {
    const getStocks = async () => {
      const res = await fetch('http://localhost:5000/stocks');
      const data = await res.json();
      
      setStocks(data);
      }
    getStocks();
  });

  return (
    <>
      <NavigationHome></NavigationHome>
      <div className="m-4 border">
        <h1> Information</h1>
        <div className="d-flex flex-wrap justify-content-start">
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
          <div className="col-md-3 p-3">
            <Stock></Stock>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
