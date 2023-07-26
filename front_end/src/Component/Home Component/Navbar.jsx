import React from "react";
import { Link } from "react-router-dom";
import image from "../../Image Component/A2KR.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navi = useNavigate();
  const spaceing = {
    justifyContent: "center",
    fontSize: "17px",
  };

  const menuClick = () => {
    if (sessionStorage.getItem("token") === null) {
      navi("/vender/auth/signup");
    }
    else {
      navi("/order");
    }
  }
  const handleNavigation = (path) => {
    navi(path);
  }
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" style={spaceing}>
            <ul
              className="navbar-nav navbar-nav-scroll"
              style={{ maxHeight: "100px", columnGap: "4vw" }}
            >
              <li className="nav-item dropdown">
                <Link
                  className="nav-link underliner "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hubs
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">
                      Cafe
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">
                      Restaurants
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">
                      Pubs and Bars
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" onClick={() => menuClick}>
                <Link className="nav-link underliner">
                  Menu
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={() => handleNavigation("/aboutus")}>
                <Link className="nav-link underliner">About us</Link>
              </li>
            </ul>
          </div>

          <Link className="navbar-brand">
            <img
              alt=""
              src={image}
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-egg-fill d-inline-block align-text-top"
              viewBox="0 0 16 16"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            style={spaceing}
            id="navbarScroll"
          >
            <ul
              className="navbar-nav navbar-nav-scroll"
              style={{ maxHeight: "100px", columnGap: "3vw" }}
            >
              <li className="nav-item dropdown">
                <Link
                  className="nav-link underliner"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">
                      Food Ordering
                    </Link>
                  </li>
                  <li onClick={() => handleNavigation("/chef/auth")}>
                    <Link className="dropdown-item">
                      Hire Chef
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item">
                      Catering
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" onClick={() => handleNavigation("/blog")}>
                <Link className="nav-link underliner">
                  Food Blog
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link underliner">
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link underliner"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">
                      Order Tracking
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
