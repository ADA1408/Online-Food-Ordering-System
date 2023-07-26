import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VenderLogin = () => {
  const navigate = useNavigate();
  const [data , setData]= useState({
    email:"",
    password:""
  })
  const vlogin = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
    // console.log(data);
  }

  const sender = (event) =>{
    event.preventDefault();
    const url = "http://localhost:1000/vender/login"
    axios.post(url,{email:data.email,password:data.password})
    .then(res=>{
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      console.log(res.data.token);
      
    })
    navigate("/vender/portal");
  }



  return (
    <div className='fullContent'>
      <div className="imagePart">
        <img alt='' src="https://source.unsplash.com/random?wallpapers" />
      </div>
      <div className="originalPart">
        <div className="namespace">
          <h2>Login As A Food Vendor</h2>
          <div className="functionality">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" name="email" value={data.email} onChange={vlogin} placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" name="password" value={data.password} onChange={vlogin} placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className='btn btn-primary' onClick={sender}>LOG IN</button>
            <div className="resign">
              <div className="texter">
                <div className='hire adding'>
                  <h1>
                    Did You Enlist Your Restaurent ?
                  </h1>
                </div>
                <div className='hire adding'>
                  <h2 onClick={() => navigate("/vender/auth/signup")}>
                    Click Me To Register
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

export default VenderLogin