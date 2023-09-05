import React from "react";
import NavigationHome from "../Navigation/NavigationHome";
import Stock from "../Stocks/stock/Stock";
import Divider from "@mui/material/Divider";

const Home = () => {
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
