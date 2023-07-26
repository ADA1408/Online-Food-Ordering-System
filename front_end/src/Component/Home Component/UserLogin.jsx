import React from 'react'

const UserLogin = () => {
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
        console.log(res)
  
      })
    }
  
  
  
    return (
      <div className='fullContent'>
        <div className="imagePart">
          <img src="https://source.unsplash.com/random?wallpapers" />
        </div>
        <div className="originalPart">
          <div className="namespace">
            <h2>Login As A User</h2>
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
                    <h2>
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
  
  export default UserLogin