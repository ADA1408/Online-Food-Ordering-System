import React from "react";
import Navbar from "../Home Component/Navbar";
import addRest from "../../Image Component/addRest.jpg";
import Footer from "../Home Component/Footer";
import { useNavigate } from "react-router-dom";

function AddRestaura() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div class="gradient-background">
        <div class="overlay">
          <h1>Join by registering your Restaurant</h1>
          <p>
            This is some sample text on top of a dark linear gradient background
            image.
          </p>
          <div
            className="add-restaura-buttons"
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <button type="button" className="btn btn-primary" onClick={() => navigate("/vender/auth/signup")}>
              Register Your restaurant
            </button>
            <button type="button" className="btn btn-secondary">
              Already registered? Claim
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AddRestaura;
