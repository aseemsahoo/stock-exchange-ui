import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import Stock from "../stock/Stock";
import axios from 'axios';

const StockChart = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { // similar to ngOnInit
    const getStocks = async () => {
      axios.get("http://localhost:8080/dashboard/list")
        .then((response) => {
          const data = response.data;

          setStocks(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error making the list API call:', error);
          setLoading(false);
        })
    };
    getStocks();
  }, []);
  // console.log("stockData: ",this.props.location.state.id);
  return (
    <>
      <h1 className="display-4 m-4"> Information:</h1>
      <div className="d-flex flex-wrap justify-content-start">
        {loading && (
          <div className="col-md-3 p-3">
            <p>Loading...</p>
          </div>
        )}
        {!loading && stocks.map((stock) => (
          <div key={stock.id} className="col-md-3 p-3">
            <Stock stock={stock} />
          </div>
        ))}
      </div>
    </>
  );
};

export default StockChart;
