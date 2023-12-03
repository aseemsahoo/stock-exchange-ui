import "./NavigationHome.css";
import Divider from '@mui/material/Divider';
import { useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate} from "react-router-dom";
import AuthService from "../../../services/AuthService";

function NavigationHome() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const search = async () => {
    axios.get(`http://localhost:8080/dashboard/list?keyword=${keyword}`)
      .then((response) => {
        const data = response.data;
        console.log(data);

        // TO-DO
        // setStocks(data);
      })
      .catch((error) => {
        console.log('Error making the navigation list API call:', error);
      })
  }

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const navHomeRedirect = (event) => {
    event.preventDefault();
    navigate('/home/stocks');
  }

  const navProfileRedirect = (event) => {
    event.preventDefault();
    navigate('/profile');
  }

  const navLogoutRedirect = (event) => {
    event.preventDefault();
    AuthService.removeToken();
    navigate('/');
  }

  return (
    <nav className="navbar top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand p-2 m-2">Share Market Simulator </a>
        <Divider sx={{  bgcolor: "white" }}  orientation="vertical" flexItem />
      <div className="col d-flex mx-4">
        <input value={keyword} onChange={handleInputChange} type="text" placeholder="Enter a keyword" />
        <button onClick={search} className='mx-3'> Search </button>
      </div>
      <ul className="nav justify-content-end">
        <li className="nav-item mx-4">
            <a onClick={navHomeRedirect} style={{ cursor: 'pointer' }}> Home </a>
        </li>
        <Divider sx={{  bgcolor: "white" }}  orientation="vertical" flexItem />
        <li className="nav-item mx-4">
            <a onClick={navProfileRedirect} style={{ cursor: 'pointer' }}> My Profile </a>
        </li>
        <Divider sx={{ bgcolor: "white" }}  orientation="vertical" flexItem />
        <li className="nav-item mx-4">
            <a onClick={navLogoutRedirect} style={{ cursor: 'pointer' }}> Log Out </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHome;
