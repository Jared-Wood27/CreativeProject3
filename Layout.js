import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="Chinese food">Chinese Food</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="Hispanic food">Hispanic Food</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="Italian food">Italian Food</Link>
          </li>
        </ul>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;

