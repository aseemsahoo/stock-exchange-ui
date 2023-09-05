import React from "react";
import NavigationHome from "../Navigation/NavigationHome";
import Stock from "../Stocks/stock/Stock";
import { Routes, Route, useNavigate } from "react-router-dom";

import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import StockChart from "../Stocks/stock-chart/StockChart";
import StocksList from "../Stocks/stocks-list/StocksList";

const Home = () => {
  return (
    <>
      <NavigationHome></NavigationHome>
      <div className="m-4 border">
        <Routes>
          <Route path="/list/:id" element={<StocksList />} />
          <Route path="/stocks" element={<StockChart />} />
        </Routes>
        {/* <h1> Information</h1>
        <div className="d-flex flex-wrap justify-content-start">
          {stocks.map((stock) => (
            <div key={stock.id} className="col-md-3 p-3">
              <Stock stock={stock} />
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Home;
