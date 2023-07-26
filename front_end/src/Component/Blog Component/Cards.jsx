import "./Cards.css";
import data from "./cardData.json";

function Card(props) {
  return (
    <>
      <div className="container text-left mt-4 mb-4">
        <div className="row">
          {data.map((value, index) => (
            <div className="container col mb-5" key={index}>
              <div className="card shadow bg-white" style={{ width: "18rem" }}>
                <img
                  src={value.img}
                  class="cvr img-thumbnail card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <p className="date mb-1">{value.date}</p>
                  <h5 className="card-title">{value.title}</h5>
                  <p className="para card-text">{value.text}</p>
                  <a href="#" class="btn btn-outline-secondary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default Card;
