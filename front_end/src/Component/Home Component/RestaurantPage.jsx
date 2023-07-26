import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GradientOverlayImage from "./GradientOverlayImage";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

function RestaurantPage() {
  const [success, setSuccess] = useState("");
  const sendData = (e) => {
    axios
      .post("http://localhost:1000/end_user/userorder", {
        email: userOrder.email,
        venderid: userOrder.venderid,
        manuid: userOrder.manuid,
        address: userOrder.address,
        date: userOrder.date,
        totalamount: userOrder.totalamount,
        paymentstatus: userOrder.paymentstatus,
      })
      .then((res) => {
        setSuccess(res.data.massage);
      });
  };

  const [menudata, setMenuData] = useState(null);
  const [modal, setModal] = useState({
    name: "",
    price: "",
    id: "",
  });
  const [show, setShow] = useState(false);
  const myKey = sessionStorage.getItem("myKey");
  const parsedObject = JSON.parse(myKey);
  const [userOrder, setUserOrder] = useState({
    email: "",
    venderid: "",
    manuid: "",
    address: "",
    date: new Date(),
    totalamount: "",
    paymentstatus: false,
  });
  //console.log(parsedObject);
  console.log(modal);
  console.log(userOrder);

  useEffect(() => {
    axios
      .post("http://localhost:1000/end_user/ManuList", {
        email: "ronisikder400@gmail.com",
        venderid: "646f7bb926faa517755de2df",
      })
      .then((res) => {
        setMenuData(res.data.manu);
      });
  }, []);

  const handleAddress = (e) => {
    e.preventDefault();
    setUserOrder({ ...userOrder, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setShow(false);
    setSuccess("")
  } 
  const handleShow = (item) => {
    setShow(true);
    setModal({ name: item.name, price: item.price, id: item._id });
    setUserOrder({
      email: parsedObject.email,
      venderid: parsedObject.venderId,
      manuid: item._id,
      address: "",
      date: new Date(),
      totalamount: item.price,
      paymentstatus: false,
    });
  };
  // useEffect(() => {

  // }, modal)

  return (
    <div>
      <Navbar />
      <div>
        {/* <div >
                    <img style={{ width: "100%", height: "20rem ", objectFit: "cover"}} src="https://images.unsplash.com/photo-1574172368358-4898a80133c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                </div> */}
        <GradientOverlayImage
          imageUrl={parsedObject.image}
          text={parsedObject.sname}
          location={parsedObject.place}
          rating="3"
        />
      </div>
      <div className="order-tab" style={{ padding: "40px" }}>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Order Online
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Review
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            style={{ padding: "30px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Order Online</h2>
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
            <div style={{ display: "flex", gap: "5px" }}>
              <p>Live track your order</p>
              <i class="bi bi-compass"></i>
            </div>
            {menudata ? (
              <div className="restuarant-menu-cards">
                {menudata.map((item) => (
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                      marginBottom: "30px",
                    }}
                  >
                    <img
                      style={{
                        width: "15rem",
                        height: "15rem",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      src={item.img}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">some description</p>
                      <p>Rs {item.price}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleShow(item)}
                      >
                        Order Now
                      </button>
                    </div>
                    {
                      <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                          <Modal.Title>{modal.name}</Modal.Title>
                        </Modal.Header>
                          {
                            (success === "" ? (
                              <Modal.Body>
                              <div>
                                <h3>Price: Rs {modal.price} /-</h3>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="floatingInput"
                                  name="address"
                                  value={userOrder.address}
                                  onChange={handleAddress}
                                  placeholder="Enter your address"
                                  required
                                />
                              </div>
                              </Modal.Body>
                            ) : (
                              <div style={{
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                width:"100%"
                              }}>
                                <img style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                                
                              }} src="https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif" alt="" srcset="" />
                              </div>
                            ))
                          }
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          {
                            (success === "") ? (
                              <Button variant="primary" onClick={sendData}>
                            Place Order
                          </Button>
                            ) : (
                              <>
                              </>
                            )
                          }
                        </Modal.Footer>
                      </Modal>
                    }
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RestaurantPage;
