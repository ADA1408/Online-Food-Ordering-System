import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StarRating from "../StarRating";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OrderMenu() {
  const navigate = useNavigate();
  const [restaura, setRestaura] = useState(null);
  const [vid, setVid] = useState("");

  function handleClick(id, email, sname, image, place) {
    const myObject = { venderId: id, email: email, sname: sname, image: image, place: place };
    const serializedObject = JSON.stringify(myObject);
    sessionStorage.setItem("myKey", serializedObject);

    navigate("/order/restaurant");
  }

  useEffect(() => {
    console.log("trigger");
    axios
      .post("http://localhost:1000/end_user/ShopList", {
        email: "ronisikder1000@gmail.com",
      })
      .then((res) => {
        setRestaura(res.data);
      });
  }, []);

  console.log(restaura);
  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Order Food Online</h2>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        {restaura ? (
          <div className="restuarant-card">
            {restaura.map((item) => (
              <div
                className="card"
                style={{
                  width: "25rem",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img
                  className="card-img-top"
                  style={{
                    width: "25rem",
                    height: "13rem",
                    objectFit: "cover",
                  }}
                  src={item.imga}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                    }}
                  >
                    <h5 className="card-title">{item.sname}</h5>
                    <StarRating rating="2.5" />
                  </div>
                  <p
                    style={{
                      color: "black",
                    }}
                  >
                    &nbsp;&nbsp;
                    <i className="bi bi-geo-alt-fill">{item.place}</i>
                  </p>
                  <a
                    className="btn btn-primary"
                    onClick={() => handleClick(item._id, item.email, item.sname, item.imga, item.place)}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default OrderMenu;
