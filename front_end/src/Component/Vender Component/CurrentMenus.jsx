import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsPlusCircleFill } from 'react-icons/bs';

function Dashboard() {
  const [menus, setMenus] = useState({
    img: "",
    dish: "",
    price: "",
  });
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(menus);

  const handleChange = (e) => {
    setMenus({ ...menus, [e.target.name]: e.target.value });
  };

  return (
    <div className="sidebar-content">
      <div className="portal-header">
        <h5>Current Menus</h5>
      </div>
      <div className="menu-content">
        <div className="card-grid">
          <div className="card menu-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              style={{ width: "18rem", height: "13rem" }}
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
            />
            <div className="card-body menu-card">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">Some quick description about pizza</p>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
            </div>
          </div>

          <div className="card menu-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              style={{ width: "18rem", height: "13rem" }}
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
            />
            <div className="card-body menu-card">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">Some quick description about pizza</p>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
            </div>
          </div>

          <div className="card menu-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              style={{ width: "18rem", height: "13rem" }}
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
            />
            <div className="card-body menu-card">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">Some quick description about pizza</p>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
            </div>
          </div>

          <div className="card menu-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              style={{ width: "18rem", height: "13rem" }}
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Card image cap"
            />
            <div className="card-body menu-card">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">Some quick description about pizza</p>
              <a href="#" className="btn btn-primary">
                Edit
              </a>
            </div>
          </div>

          <div
            className="card menu-card"
            style={{ width: "18rem" }}
            onClick={handleShow}
          >
            <div className="card-body menu-card" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BsPlusCircleFill style={{ fontSize: '5rem' }} />
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Menu Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="dish"
              className="form-control"
              placeholder="Dish name"
              name="dish"
              value={menus.dish}
              onChange={handleChange}
            />
            <input
              type="dish"
              className="form-control"
              placeholder="Enter image link"
              name="img"
              value={menus.img}
              onChange={handleChange}
              style={{ marginTop: "10px" }}
            />
            <input
              type=""
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Price"
              name="price"
              value={menus.value}
              style={{ marginTop: "10px" }}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Dashboard;