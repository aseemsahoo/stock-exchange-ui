import "./NavigationHome.css";

function NavigationHome() {
  return (
    <nav className="navbar top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand p-2 m-2">Home navigator </a>
      <div className="col d-flex mx-4">
        <input type="text" placeholder="Enter a keyword" />
        <button> Search </button>
      </div>
      <ul class="nav justify-content-end">
        <li class="nav-item mx-4">
            <a> Home </a>
        </li>
        <li class="nav-item mx-4">
            <a> My Profile </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHome;
