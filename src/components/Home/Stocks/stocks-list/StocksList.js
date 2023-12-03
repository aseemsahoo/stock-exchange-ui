import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import axios from 'axios';

const StocksList = () => {
  // get stock from redirect URL
  const { id } = useParams();

  // get ApiKey from environment
  const apiKey = process.env.REACT_APP_API_KEY;

  const [stock, setStock] = useState({});
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buyAmount, setBuyAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);

  const navigate = useNavigate();

  // similar to ngOnInit
  useEffect(() => {

    const getStock = async () => {
      axios.get(`http://localhost:8080/dashboard/stock/${id}`)
      .then(async (response) => {
        const stockData = response.data;
        setStock(stockData);

        const url = `https://financialmodelingprep.com/api/v3/historical-chart/15min/${stockData.symbol}?apikey=${apiKey}`;
        const priceTrendResult = await fetch(url);

        const priceTrendData = await priceTrendResult.json();

        setStockData(priceTrendData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error making the list API call:', error);
        setLoading(false);
      })
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

  const onBuyClick = (event) => {
    event.preventDefault();
    console.log(buyAmount);

    axios.post('http://localhost:8080/stocks/buy', 
    {
      buy_quantity : buyAmount,  
      stockId : stock.id.toString(),
      symbol : stock.symbol   
    }).then((response) => {
      alert('BOUGHT !!')
      navigate('/profile');
    })
    .catch((error) => {
      alert("ERR")
      console.error('Error inside login API call:', error);
    })
  }
  
  const onSellClick = (event) => {
    event.preventDefault();
    console.log(sellAmount);

    axios.post('http://localhost:8080/stocks/sell', 
    {
      sell_quantity : sellAmount,  
      stockId : stock.id.toString(),
      symbol : stock.symbol   
    }).then((response) => {
      alert('SOLD !!')
      navigate('/profile');
    })
    .catch((error) => {
      alert("ERR")
      console.error('Error inside login API call:', error);
    })
  }

  const handleBuyAmountChange = (event) => {
    event.preventDefault();
    setBuyAmount(event.target.value);
  };

  const handleSellAmountChange = (event) => {
    event.preventDefault();
    setSellAmount(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex my-2 justify-content-between">
        <h1 className="display-4"> Stock Information: </h1>
        <div className="p-2 ">
          <button onClick={onRedirectClick}> Go back </button>
        </div>
      </div>
      <table className="fs-5 table">
        <thead className="table-light">
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
        <h2 className="display-6"> Price Trend: </h2>
      </div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
      <div style={{ justifyContent: 'center', padding: '50px', display: 'flex', gap: '150px' }}>
        <div className="buy-form">
          <div className="row">
            <div className="col mb-3">
              <label className="fs-5 form-label">Enter the quantity to buy</label>
              <input value={buyAmount} onChange={handleBuyAmountChange} type="number" className="fs-5 form-control" id="buyAmount" />
            </div>
            <div className="col-12">
              <button onClick={onBuyClick} className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
        <div className="sell-form">
          <div className="row">
            <div className="col mb-3">
              <label className="fs-5 form-label">Enter the quantity to sell</label>
              <input value={sellAmount} onChange={handleSellAmountChange} type="number" className="fs-5 form-control" id="sellAmount" />
            </div>
            <div className="col-12">
              <button onClick={onSellClick} className="btn btn-primary">Sell</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StocksList;
