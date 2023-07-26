import React, { useState } from 'react';
import { Nav, Card, Form, Button } from 'react-bootstrap';
import Footer from "../Home Component/Footer";
import axios from "axios";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  let [cuisine, setcuisine] = useState([]);
  console.log(cuisine);
  const [formData, setFormData] = useState({
    id: "64102a11f9b1dc9d6c63ca43",
    name: "",
    owner: "",
    email: "",
    phone: "",
    aadhar: "",
    pan: "",
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
    type_food: [],
  });
  console.log(formData);

  const handleSubmitRest = (e) => {
    e.preventDefault();
    axios.post('http://localhost:1000/vender/profileCreate', formData)
      .then(res => {
        console.log(res.data.massage);
      })
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
        <div className="form-card" style={{ width: "810px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Chif Registration
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
                    Personal Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={step === 2}
                    onClick={() => setStep(2)}
                    style={{ color: "black", padding: "5px" }}
                  >
                    Confidential Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={step === 3}
                    onClick={() => setStep(3)}
                    style={{ color: "black", padding: "5px" }}
                  >
                    Terms And Condition
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
                      <label for="floatingInput">Chef's Name</label>
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
                  </Form.Group>
                  <hr />
                  <Button variant="primary" onClick={handleNextStep}>
                    Next
                  </Button>
                </Form>
              )}
              {step === 2 && (
                <Form>
                  <Form.Label>Aadhar Verification</Form.Label>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Form.Control
                      type="text"
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Form.Label>Pan Verification</Form.Label>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Form.Control
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleInputChange}
                    />
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
                    onClick={handleNextStep}
                  >
                    Next
                  </Button>
                </Form>
              )}
              {step===3 && (
                <div className="terms">
                  
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MultiStepForm;
