import React from "react";
import gif from "../../Image Component/K.gif";
import album1 from "../../Image Component/album 1.jpg";
import album2 from "../../Image Component/album 2.jpg";
import album3 from "../../Image Component/cooking.jpg";
import album4 from "../../Image Component/cullinary.jpg";
import Navbar from "../../Component/Home Component/Navbar";
import Footer from "../../Component/Home Component/Footer";
import Carousel from "../../Component/Home Component/Carousel";
import { Link } from "react-router-dom";
import BlogCard from "../../Component/Home Component/BlogCard";
import knife from "../../Image Component/knife logo.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navi = useNavigate();
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="cortetions">
        <img src={gif} />
        <h1>
          Whether you're craving a hearty meal, a quick snack, or a delightful
          dessert, we've got you covered.
        </h1>
      </div>
      <div className="album_main">
        <div className="album">
          <img id="album1" src={album1} />
          <img id="album2" src={album2} />
        </div>
        <div className="fake"></div>
      </div>
      <div className="links">
        <div onClick={navi("/blog")}>
          <Link className="linking">
            Blog <i className="bi bi-arrow-down-right"></i>
          </Link>
        </div>
        <div onClick={navi("/chef/auth")}>
          <Link className="linking" onClick={navi("/chef/auth")}>
            Chef <i className="bi bi-arrow-down-right"></i>
          </Link>
        </div>
        <div onClick={navi("/order")}>
          <Link className="linking">
            Menu <i className="bi bi-arrow-down-right"></i>
          </Link>
        </div>
        <div onClick={navi("/")}>
          <Link className="linking">
            Customized Food <i className="bi bi-arrow-down-right"></i>
          </Link>
        </div>
      </div>
      <div className="bani">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <div className="banis">
                <BlogCard />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <div className="banis">
                <BlogCard />
              </div>
            </div>
            <div className="carousel-item">
              <div className="banis">
                <BlogCard />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="fake1"></div>
      <div className="fake2"></div>
      <div className="teams">
        <h1>Meet Our Chefs</h1>
        <img height="280px" width="280px" src={knife} />
        <div className="feature">
          <div className="styling-top">
            <div className="describe">
              <h1>Business Acumen</h1>
              <p>
                At A2KR, we strive to make your dining experience convenient and
                enjoyable. With our user-friendly web platform, you can easily
                browse through a wide range of delectable dishes and place your
                order with just a few clicks.
              </p>
            </div>
            <img className="feature_image" src={album3} />
          </div>
          <div className="d-flex" style={{ height: "150vh" }}>
            <div className="vr"></div>
          </div>
          <div className="styling-top">
            <img className="feature_image" src={album4} />
            <div className="describe">
              <h1>Business Acumen</h1>
              <p>
                We are excited to serve you and provide a hassle-free online
                food ordering experience. Start exploring our menu and indulge
                in a culinary adventure from the comfort of your own home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="follow">
        <div className="touch" onClick={() => { navi("/aboutus") }}>
          <h1>
            Get In Touch <i class="bi bi-arrow-right"></i>
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
