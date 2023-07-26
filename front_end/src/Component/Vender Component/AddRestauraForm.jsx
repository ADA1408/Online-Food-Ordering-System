import React, { useState } from "react";
import { Form, Button, Card, Nav } from "react-bootstrap";
import chefGif from "../../Image Component/chef.gif";
import Navbar from "../Home Component/Navbar";
import Footer from "../Home Component/Footer";
import MapComponent from "./MapComponent";
import ChatPopover from "./ChatPopover";
import ImageUpload from "./ImageUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MultiStepForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  let [cuisine, setcuisine] = useState([]);
  console.log(cuisine);
  const [formData, setFormData] = useState({
    id:"64102a11f9b1dc9d6c63ca43",
    name: "",
    owner: "",
    email: "",
    phone: "",
    aadhar: "",
    pan: "",
    tax: "",
    fssai: "",
    place: "",
    city: "",
    pin: "",
    state: "",
    contry: "",
    distric: "",
    account_no: "",
    cuname: "",
    branch: "",
    ifsc: "",
    opening: "",
    closing: "",
    openingdays: [],
    type_food: [],
  });
  console.log(formData);

  const handleSubmitRest = (e) => {
    e.preventDefault();
    axios.post('http://localhost:1000/vender/profileCreate', formData)
      .then(res => {
        console.log(res.data.massage);
      })
    navigate("/vender/portal")
  } 

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevState) => {
      if (checked) {
        return { ...prevState, type_food: [...prevState.type_food, value] };
      } else {
        return {
          ...prevState,
          type_food: prevState.type_food.filter((item) => item !== value),
        };
      }
    });
  };

  const handleCheckboxDayChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      if (checked) {
        return { ...prevState, openingdays: [...prevState.openingdays, value] };
      } else {
        return {
          ...prevState,
          openingdays: prevState.openingdays.filter((item) => item !== value),
        };
      }
    });
  };

  return (
    <div>
      <div
        className="add-form"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "50px",
          gap: "60px",
        }}
      >
        <img
          src={chefGif}
          style={{ height: "500px", width: "600px" }}
          alt="animated GIF"
        />
        <div className="form-card" style={{ width: "810px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Restaurant Information
          </h2>
          <Card
            style={{
              width: "100%",
              padding: "5%",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Card.Header>
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link
                    active={step === 1}
                    onClick={() => setStep(1)}
                    style={{ color: "black", padding: "5px" }}
                  >
                    Restaurant Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={step === 2}
                    onClick={() => setStep(2)}
                    style={{ color: "black", padding: "5px" }}
                  >
                    Restaurant Type & Timings
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={step === 3}
                    onClick={() => setStep(3)}
                    style={{ color: "black", padding: "5px" }}
                  >
                    Confidential Information
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {step === 1 && (
                <Form>
                  <Form.Group>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                      />
                      <label for="floatingInput">Restaurant Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">
                        Contact Number at Restaurant
                      </label>
                    </div>
                    <Form.Label>Add Location</Form.Label>
                    <div className="spaceing">
                      <div class="form-floating">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">Address Line</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">City</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">State</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="text"
                          name="distric"
                          value={formData.distric}
                          onChange={handleInputChange}
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">District</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="text"
                          name="pin"
                          value={formData.pin}
                          onChange={handleInputChange}
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">PIN</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="text"
                          name="contry"
                          value={formData.contry}
                          onChange={handleInputChange}
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">Country</label>
                      </div>
                    </div>

                    {/* <MapComponent />
                    <Form.Label>Or enter coordinates</Form.Label>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Form.Control
                        placeholder="latitude"
                        name="latitude"
                        id="latitude"
                        type="text"
                        value={formData.latitude}
                        onChange={handleInputChange}
                      />
                      <Form.Control
                        placeholder="longitude"
                        name="longitude"
                        id="longitude"
                        type="text"
                        value={formData.longitude}
                        onChange={handleInputChange}
                      />
                    </div> */}
                  </Form.Group>
                  <hr />
                  <Button variant="primary" onClick={handleNextStep}>
                    Next
                  </Button>
                </Form>
              )}
              {step === 2 && (
                <Form>
                  <Form.Group>
                    <hr />
                    <h4>Type of Cuisines</h4>
                    <p>Select options which best describe food your serve</p>
                    <div style={{ display: "flex", gap: "40px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="beverages"
                            checked={formData.type_food.includes("beverages")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Beverages
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="deserts"
                            checked={formData.type_food.includes("deserts")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            Deserts
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="south_indian"
                            checked={formData.type_food.includes(
                              "south_indian"
                            )}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            South Indian
                          </label>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="biriyani"
                            checked={formData.type_food.includes("biriyani")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Biriyani
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="fast_food"
                            checked={formData.type_food.includes("fast_food")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            Fast Food
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="street_food"
                            checked={formData.type_food.includes("street_food")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            Street Food
                          </label>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="chienese"
                            checked={formData.type_food.includes("chienese")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Chinese
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="north_indian"
                            checked={formData.type_food.includes(
                              "north_indian"
                            )}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            North Indian
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h4>Restaurant Operational Hours</h4>
                    <p>Mark restaurant opening and closing hours</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          name="opening"
                          value={formData.opening}
                          onChange={handleInputChange}
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Opens</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          name="closing"
                          value={formData.closing}
                          onChange={handleInputChange}
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Closes</label>
                      </div>
                    </div>
                    <h5>Opening Days</h5>
                    <div style={{ display: "flex", gap: "40px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Monday"
                            checked={formData.openingdays.includes("Monday")}
                            onChange={handleCheckboxDayChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Monday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Tuesday"
                            checked={formData.openingdays.includes("Tuesday")}
                            onChange={handleCheckboxDayChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            Tuesday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Wednesday"
                            checked={formData.openingdays.includes("Wednesday")}
                            onChange={handleCheckboxDayChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            Wedneday
                          </label>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Thursday"
                            checked={formData.openingdays.includes("Thursday")}
                            onChange={handleCheckboxDayChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Thursday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Friday"
                            checked={formData.openingdays.includes("Friday")}
                            onChange={handleCheckboxDayChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            Friday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Saturday"
                            checked={formData.openingdays.includes("Saturday")}
                            onChange={handleCheckboxDayChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckChecked"
                          >
                            Saturday
                          </label>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Sunday"
                            checked={formData.openingdays.includes("Sunday")}
                            onChange={handleCheckboxDayChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Sunday
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </Form.Group>
                  <Button variant="secondary" onClick={handlePrevStep}>
                    Back
                  </Button>{" "}
                  <Button variant="primary" onClick={handleNextStep}>
                    Next
                  </Button>
                </Form>
              )}
              {step === 3 && (
                <Form>
                  <Form.Label>Aadhar Verification</Form.Label>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Form.Control
                      type="text"
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleInputChange}
                    />
                    <Button variant="primary">Verify</Button>
                  </div>
                  <Form.Label>Pan Verification</Form.Label>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Form.Control
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleInputChange}
                    />
                    <Button variant="primary">Verify</Button>
                  </div>
                  <Form.Label>Tax Verification</Form.Label>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Form.Control
                      type="text"
                      name="tax"
                      value={formData.tax}
                      onChange={handleInputChange}
                    />
                    <Button variant="primary">Verify</Button>
                  </div>
                  <Form.Label>FSSAI licence Verification</Form.Label>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Form.Control
                      type="text"
                      name="fssai"
                      value={formData.fssai}
                      onChange={handleInputChange}
                    />
                    <Button variant="primary">Verify</Button>
                  </div>
                  <Form.Label>Bank Details</Form.Label>
                  <div className="spaceing">
                    <div class="form-floating">
                      <input
                        class="form-control"
                        id="floatingPassword"
                        name="account_no"
                        value={formData.account_no}
                        onChange={handleInputChange}
                      />
                      <label for="floatingPassword">Account Number</label>
                    </div>
                    <div class="form-floating">
                      <input
                        class="form-control"
                        id="floatingPassword"
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                      />
                      <label for="floatingPassword">Branch</label>
                    </div>
                    <div class="form-floating">
                      <input
                        class="form-control"
                        name="cuname"
                        value={formData.cuname}
                        onChange={handleInputChange}
                      />
                      <label for="floatingPassword">Customer Name</label>
                    </div>
                    <div class="form-floating">
                      <input
                        class="form-control"
                        name="ifsc"
                        value={formData.ifsc}
                        onChange={handleInputChange}
                      />
                      <label for="floatingPassword">IFSC Code</label>
                    </div>
                  </div>
                  <Button variant="secondary" onClick={handlePrevStep}>
                    Back
                  </Button>{" "}
                  <Button
                    variant="primary"
                    onClick={handleSubmitRest}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
      <ChatPopover />
      <Footer />
    </div>
  );
}

export default MultiStepForm;
