import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const StocksList = () => {
  // get stock from redirect URL
  const { id } = useParams();

  const apiKey = "fad737313869deb61665c826a21b20a9";

  const [stock, setStock] = useState({});
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // similar to ngOnInit
  useEffect(() => {
    const getStock = async () => {
      try 
      {
        const res1 = await fetch(`http://localhost:5000/stocks/${id}`);
        if (!res1.ok) 
        {
          throw new Error("Network response was not ok");
        }
        const data1 = await res1.json();
        setStock(data1);

        // get price trend only after the first API has been called
        const url = `https://financialmodelingprep.com/api/v3/historical-chart/15min/${data1.symbol}?apikey=${apiKey}`;
        console.log(url);
        const res2 = await fetch(url);

        if (!res2.ok)
        {
          throw new Error("Network response was not ok");
        }
        const data2 = await res2.json();

        setStockData(data2);
        setLoading(false);
      } 
      catch (error) 
      {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };
    getStock();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  const dates = stockData.map((entry) => entry.date);
  const closingPrices = stockData.map((entry) => entry.close);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Stock Closing Price",
        data: closingPrices,
        borderColor: "rgba(0, 174, 0, 1)",
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(0, 199, 0, 0.33)",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 1, // Set pointRadius to 0 to hide the data points
      },
    },
  };

  const onRedirectClick = (event) => {
    event.preventDefault();
    navigate('/home/stocks');
  }

  return (
    <div className="container-fluid">
      <div className="d-flex my-2 justify-content-between">
        <h1> Stock Information: </h1>
        <div className="p-2 ">
          <button onClick={onRedirectClick}> Go back </button>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Sector</th>
            <th scope="col">Symbol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> {stock.id} </th>
            <td> {stock.name} </td>
            <td> {stock.sector} </td>
            <td> {stock.symbol} </td>
          </tr>
        </tbody>
      </table>
      <div className="my-4">
        <h2> Price Trend: </h2>
      </div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default StocksList;
