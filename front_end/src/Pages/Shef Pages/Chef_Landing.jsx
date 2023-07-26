import React from 'react'
import Footer from '../../Component/Home Component/Footer'

const Chef_Landing = () => {
    return (
        <div>
            <div class="grad">
                <div class="overlay">
                    <h1>Connect To Our Network</h1>
                    <p>
                        #1 Chef Hireing Platform
                    </p>
                    <div
                        className="add-restaura-buttons"
                        style={{ display: "flex", justifyContent: "center", gap: "20px" }}
                    >
                        <button type="button" className="btn btn-primary button_size">
                            Join Our Family
                        </button>
                        <button type="button" className="btn btn-secondary button_size">
                            Booking Status
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Chef_Landing