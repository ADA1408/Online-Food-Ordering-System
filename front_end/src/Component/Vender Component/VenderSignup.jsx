import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const VenderSignup = () => {
    const navigate = useNavigate()

    const [hide, sethide] = useState(false)

    const showOtp = (event) => {
        event.preventDefault();
        const url = "http://localhost:1000/vender/otp"
        axios.post(url, { email: data.email })
            .then(res => {
                console.log(res)
            })
        sethide(true);
    }

    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        otp: "",
        id: ""
    })
    const vsignup = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sender = (event) => {
        event.preventDefault();
        const url1 = "http://localhost:1000/vender/signup"
        axios.post(url1, { fname: data.fname, lname: data.lname, email: data.email, password: data.password, otp: data.otp })
            .then(res => {
                setData({ ...data, [id]: res.data.id })
                const { fname, lname, email, password, id } = data;
                sessionStorage.setItem('data', JSON.stringify(data));
                console.log(res.data)
                navigate('/vender/auth/signup/details')
            })
    }


    return (
        <div className='fullContent'>
            <div className="imagePart">
                <img src="https://source.unsplash.com/random?wallpapers" />
            </div>
            <div className="originalPart">
                <div className="namespace">
                    <h2>Signup As A Food Vendor</h2>
                    <div className="functionality">
                        <div class="row">
                            <div className="form-floating mb-3 col">
                                <input type="email" className="form-control" id="floatingInput" name="fname" value={data.fname} onChange={vsignup} placeholder="name@example.com" />
                                <label className='fl' htmlFor="floatingInput">First Name</label>
                            </div>
                            <div className="form-floating mb-3 col">
                                <input type="email" className="form-control" id="floatingInput" name="lname" value={data.lname} onChange={vsignup} placeholder="name@example.com" />
                                <label className='fl' htmlFor="floatingInput">Last Name</label>
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" name="email" value={data.email} onChange={vsignup} placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" name="password" value={data.password} onChange={vsignup} placeholder="Password" />
                            <label htmlFor="floatingPassword">Create a Password</label>
                        </div>
                        {
                            hide ? (
                                <div>
                                    <div className="form-floating" id>
                                        <input type="password" className="form-control" id="floatingPassword" name="otp" value={data.otp} onChange={vsignup} placeholder="Password" />
                                        <label htmlFor="floatingPassword">OTP</label>
                                    </div>
                                    <button id='signup' className='btn btn-primary' onClick={sender}>Sign Up</button>
                                </div>
                            ) : (
                                <button className='btn btn-primary' onClick={showOtp}>Request for OTP</button>
                            )
                        }
                        <div className="resign">
                            <div className="texter">
                                <div className='hire adding'>
                                    <h1>
                                        Already Enlisted Your Restaurant ?
                                    </h1>
                                </div>
                                <div className='hire adding'>
                                    <h2 onClick={() => navigate("/vender/auth/login")}>
                                        Click Me To Login
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VenderSignup