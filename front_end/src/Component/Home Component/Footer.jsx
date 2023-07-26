import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const aligning = {
    width: "20vw",
  };
  return (
    <>
      <div className="footer_main">
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
            gap: "5%",
            color: "#00203f",
            padding: "40px",
            backgroundColor: "white",
          }}
        >
          <div className="help_desk" style={aligning}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3 style={{ margin: "auto 0px" }}>About A2KR</h3>
            </div>
            <div className="help_sub" style={{ textAlign: "center" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              aut dolorem minus nostrum cupiditate illo ab praesentium sapiente,
              rem animi?
            </div>
          </div>
          <div className="link">
            <div style={{ display: "flex", justifyContent: "center" }} onClick={() => navigate("/vender/auth")}>
              <h3 style={{ margin: "auto 10px" }}>
                <Link
                  className="footer_hover"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  FOR RESTAURANTS<i className="bi bi-arrow-down-right"></i>
                </Link>
              </h3>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }} onClick={() => navigate("/chef/auth")}>
              <h3 style={{ margin: "auto 10px" }}>
                <Link
                  className="footer_hover"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  FOR CHEFS<i className="bi bi-arrow-down-right"></i>
                </Link>
              </h3>
            </div>
          </div>
          <div className="address" style={aligning}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3 style={{ margin: "auto 0px" }}>Learn More</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Link style={{ textDecoration: "none", color: "black" }}>
                Privacy
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Security
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Terms and Condition
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Sitemap
              </Link>
            </div>
          </div>
          <div className="address" style={aligning}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3 style={{ margin: "auto 0px" }}>Social Links</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Link>
                <i className="bi bi-facebook"></i>
              </Link>
              <Link>
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link>
                <i className="bi bi-twitter"></i>
              </Link>
              <Link>
                <i className="bi bi-youtube"></i>
              </Link>
              <Link>
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
