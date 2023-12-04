import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import NavigationHome from "../../Home/Navigation/NavigationHome";

const Profile = () => {

  const [user, setUser] = useState({});
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserDetails = async () => {
      axios.get(`http://localhost:8080/accounts/user/me`)
        .then(async (response) => {

          const userData = response.data;
          setUser(userData);

          // get list of user stocks with current price
          axios.get(`http://localhost:8080/accounts/list`)
            .then((response) => {
              const portfolioList = response.data;

              // calculate P&L for each invested stock
              portfolioList.forEach(stock => {
                stock.profit = (stock.currValue - stock.totalPrice).toFixed(3);
                stock.profitPercent = ((stock.profit * 100) / stock.currValue).toFixed(3); //.toString() + " %";
              });
              setPortfolioData(response.data);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error('Error making the accounts users API call:', error);
          setLoading(false);
        })
    };
    getUserDetails();
  }, []);

  return (
    <>
      <NavigationHome></NavigationHome>
      <div className="m-4 border">
        <div className="container-fluid">
          <div className="d-flex my-2 justify-content-between">
            <h1 className="display-3"> Profile: </h1>
          </div>
          <table className="table fs-5">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Balance</th>
                <th scope="col">Total Invested</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? (
                  <tr>
                    <th scope="row">  </th>
                    <td> Loading... </td>
                    <td>  </td>
                    <td>  </td>
                  </tr>) :
                  (<tr>
                    <th scope="row"> {user.id} </th>
                    <td> {user.firstName + ' ' + user.lastName} </td>
                    <td> {user.balance} </td>
                    <td> {user.invested} </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
        <div className="container-fluid">
          <div className="d-flex my-2 justify-content-between">
            <h1 className="display-4"> Your Portfolio: </h1>
          </div>
          <table className="table fs-5">
            <thead className="table-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Invested Value</th>
                <th scope="col">Current Value</th>
                <th scope="col">P&L</th>
              </tr>
            </thead>
            <tbody>
              {portfolioData.map((stock) => (
                <React.Fragment key={stock.stockId}>
                  <tr>
                    <td rowSpan={2} className="align-middle" scope="row"> {stock.name} </td>
                    <td rowSpan={2} className="align-middle"> {stock.quantity} </td>
                    <td rowSpan={2} className="align-middle"> {stock.totalPrice} </td>
                    <td rowSpan={2} className="align-middle"> {stock.currValue} </td>
                    <td className={`h3 border-0 text-${stock.profit > 0 ? 'success' : 'danger'}`}>
                      {stock.profit}
                    </td>
                  </tr>
                  <tr>
                    <td className={`text-${stock.profit > 0 ? 'success' : 'danger'}`}> {stock.profitPercent + " %"}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
