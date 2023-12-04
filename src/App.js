import "./App.css";
import Form from "./components/Forms/form/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, useNavigate } from "react-router-dom";

import Home from "./components/Home/home/Home";
import LoginForm from "./components/Forms/login-form/LoginForm";
import SignupForm from "./components/Forms/signup-form/SignupForm";
import StockChart from "./components/Home/Stocks/stock-chart/StockChart";
import Stock from "./components/Home/Stocks/stock/Stock";
import StocksList from "./components/Home/Stocks/stocks-list/StocksList";
import Profile from "./components/Profile/profile/Profile"
import { useState, useEffect } from "react";
import AuthService from "./services/AuthService";

const App = () => {
  const navigate = useNavigate();

  // Check token expiration on app launch
  useEffect(() => {
    if (AuthService.isTokenExpired()) {
      
      alert('Token invalid or missing. Redirecting to login page...');
      AuthService.removeToken();
      navigate('/login'); 
    }

  }, []);

  return (
    <Routes>
      <Route path="/" element={<Form />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Route>
      <Route path="/home" element={<Home />}>
        <Route path="/home/list/:id" element={<StocksList />} />
        <Route path="/home/stocks" element={<StockChart />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

// function App() {
  
// }

export default App;
