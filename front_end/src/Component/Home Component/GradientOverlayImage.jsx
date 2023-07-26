import React from 'react';
import StarRating from '../StarRating';

const GradientOverlayImage = ({ imageUrl, text, location, rating }) => {
  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: "cover"
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '37px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    flexDirection: "column"
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt="Image" style={imageStyle} />
      <div style={overlayStyle}>
        {text}
        <p style={{ color: "white", textDecoration: "none" , fontSize: "25px"}}>
          &nbsp;&nbsp;<i className="bi bi-geo-alt-fill">{location} </i>
        </p>
        <StarRating rating={rating}/>
      </div>
    </div>
  );
};

export default GradientOverlayImage;
