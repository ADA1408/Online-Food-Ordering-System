import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import StarRating from "../StarRating";
import { Button, Modal } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";

function Dashboard() {
  const rating = 4.5;

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar-content">
      <div className="portal-header">
        <h5>Profile Page</h5>
        <div
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <i class="bi bi-bell-fill"></i>
          <img
            src="https://images.unsplash.com/photo-1557955776-857434f1c951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            style={{
              borderRadius: "50%",
              aspectRatio: "1 1",
              height: "2.5rem",
              width: "2.5rem",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="profile">
        <div
          className="column-1"
          style={{ display: "flex", flexDirection: "column", color: "white" }}
        >
          <img
            src="https://images.unsplash.com/photo-1557955776-857434f1c951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            style={{
              borderRadius: "50%",
              aspectRatio: "1 1",
              height: "13rem",
              width: "13rem",
              objectFit: "cover",
            }}
          />
          <h5 style={{ marginTop: "30px" }}>
            Achievements
            <hr />
          </h5>
        </div>
        <div
          className="column-2"
          style={{ color: "white", marginLeft: "100px", width: "700px" }}
        >
          <div style={{ display: "flex" }}>
            <h3>Shop Name</h3>
            <p style={{ color: "#afacac", textDecoration: "none" }}>
              &nbsp;&nbsp;<i className="bi bi-geo-alt-fill">Location </i>{" "}
            </p>
          </div>
          <StarRating rating={rating} starColor={"#afacac"} />
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Tabs defaultActiveKey="tab1" id="my-tabs">
              <Tab
                eventKey="tab1"
                title={
                  <span style={{ display: "flex" }}>
                    <i class="bi bi-person-fill"></i>
                    <p>&nbsp;&nbsp;About</p>
                  </span>
                }
              >
                <div style={{ marginTop: "30px" }}>
                  <p style={{ color: "#afacac" }}>Contact Information</p>
                  <p>
                    Phone : &nbsp;
                    <span style={{ color: "aqua" }}>7478076602</span>
                  </p>
                  <p>
                    Address : <span>Barasat Champadali, Kolkata - 700124</span>
                  </p>
                  <p>
                    Email : &nbsp;
                    <span style={{ color: "aqua" }}>
                      ronisikder200@gmail.com
                    </span>
                  </p>
                  <p style={{ color: "#afacac", marginTop: "40px" }}>
                    Food Type
                  </p>
                  <span style={{ color: "aqua" }}>Biriyani</span>
                  <p style={{ color: "#afacac", marginTop: "40px" }}>
                    Opening Days
                  </p>
                  <span style={{ color: "aqua" }}>Monday</span>
                </div>
              </Tab>
              {/* <Tab eventKey="tab2" title="Tab 2">
                <div>Content for Tab 2</div>
              </Tab>
              <Tab eventKey="tab3" title="Tab 3">
                <div>Content for Tab 3</div>
              </Tab> */}
            </Tabs>
          </div>
        </div>
        <div>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="dish"
                className="form-control"
                placeholder="Restaurant Name"
                name="dish"
                //   value={menus.dish}
                //   onChange={handleChange}
              />
              <input
                type=""
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Location"
                name="price"
                //   value={menus.value}
                style={{ marginTop: "10px" }}
                //   onChange={handleChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
