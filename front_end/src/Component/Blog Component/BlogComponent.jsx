import React from "react";
import Navbar from "../Home Component/Navbar";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Card from "./Card";
import Footer from "../Home Component/Footer";

function BlogComponent() {
  return (
    <div>
      <Carousel />
      <Cards />
      <nav
        aria-label="..."
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
}

export default BlogComponent;
