import React from 'react'
import image from '../../Image Component/front_food.jpg'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image} className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>A rare taste you can’t find anywhere</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel