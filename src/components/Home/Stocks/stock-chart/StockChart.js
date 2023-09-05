import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import Stock from "../stock/Stock";

const StockChart = () => {
  const [stocks, setStocks] = useState([]);

  // similar to ngOnInit
  useEffect(() => {
    const getStocks = async () => {
      const res = await fetch("http://localhost:5000/stocks");
      const data = await res.json();

      console.log(1);
      setStocks(data);
    };
    getStocks();
  }, []);
  // console.log("stockData: ",this.props.location.state.id);
  return (
    <>
      <h1> Information</h1>
      <div className="d-flex flex-wrap justify-content-start">
        {stocks.map((stock) => (
          <div key={stock.id} className="col-md-3 p-3">
            <Stock stock={stock} />
          </div>
        ))}
      </div>
    </>
  );
};

export default StockChart;
