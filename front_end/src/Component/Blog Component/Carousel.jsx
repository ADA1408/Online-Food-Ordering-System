import "./Carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      <div class="container grid">
        <div class="row">
          <div className="big">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card border-0 rounded-0 text-light overflow-hidden shadow">
                  <div class="position-relative">
                    <div class="ratio_left-cover-1 image-wrapper">
                      <a href="#">
                        <img
                          class="img-fluid w-100 img-large"
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                      <div class="news-meta">
                        <span class="date">Feb 22, 2023</span>
                      </div>
                      <a href="/">
                        <h2 class="h3 post-title text-white my-1">
                          Margherita Pizza
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div className="small">
                <div class="card border-0 rounded-0 text-white overflow shadow">
                  <div class="position-relative">
                    <div class="ratio_right-cover-2 image-wrapper">
                      <a href="#">
                        <img
                          class="img-fluid img-small"
                          src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt="simple blog template bootstrap"
                        />
                      </a>
                    </div>
                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                      <div class="news-meta">
                        <span class="date">Feb 20, 2023</span>
                      </div>
                      <a href="#">
                        <h2 class="h5 text-white my-1">Fish Curry</h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="small">
                <div class="card border-0 rounded-0 text-white overflow shadow">
                  <div class="position-relative">
                    <div class="ratio_right-cover-2 image-wrapper">
                      <a href="#">
                        <img
                          class="img-fluid img-small"
                          src="https://cdn.scrambledchefs.com/wp-content/uploads/2020/10/Naan-Bread-5.jpg"
                          alt="bootstrap blog wordpress theme"
                        />
                      </a>
                    </div>
                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                      <div class="news-meta">
                        <span class="date">Feb 25, 2023</span>
                      </div>
                      <a href="#">
                        <h2 class="h5 text-white my-1">Butter Naan</h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
