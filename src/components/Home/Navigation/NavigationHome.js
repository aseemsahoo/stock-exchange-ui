import "./NavigationHome.css";
import Divider from '@mui/material/Divider';


function NavigationHome() {
  return (
    <nav className="navbar top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand p-2 m-2">Share Market Simulator </a>
        <Divider sx={{  bgcolor: "white" }}  orientation="vertical" flexItem />
      <div className="col d-flex mx-4">
        <input type="text" placeholder="Enter a keyword" />
        <button className='mx-3'> Search </button>
      </div>
      <ul class="nav justify-content-end">
        <li class="nav-item mx-4">
            <a> Home </a>
        </li>
        <Divider sx={{  bgcolor: "white" }}  orientation="vertical" flexItem />
        <li class="nav-item mx-4">
            <a> My Profile </a>
        </li>
        <Divider sx={{ bgcolor: "white" }}  orientation="vertical" flexItem />
        <li class="nav-item mx-4">
            <a> Log Out </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHome;
