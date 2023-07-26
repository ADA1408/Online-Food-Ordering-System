import React from 'react'
import imgplace from '../../Image Component/image placeholder.jpeg'

const BlogCard = () => {
    return (
        <div className="carda">
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgplace} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Card title</h1>
                            <p className="card-text">At A2KR, our business acumen fuels our success in the online food ordering system. We are committed to continuous improvement, innovation, and delivering unparalleled value to our customers. Join us on this journey and experience the difference that strong business acumen can make in transforming your online food ordering experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard