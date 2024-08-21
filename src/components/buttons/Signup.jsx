import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {

    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [pno, setpno] = useState("");
   
    const [password, setpassword] = useState("");
    
    
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const data = {
        fullname: fullname,
        email:email,
        pno:pno,
        password:password,
        
        
  
      }
      console.log(data);
      try {
        const response = await axios.post('http://localhost:3001/customersignup', data);
        console.log(data);
        console.log(response);
       
      } catch (error) {
        console.log(error);
  
  
      }
    }
  
    const showAlert = () => {
      window.alert('Registration Successfull, Kindly Login');
    };

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span>Customer Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Customer Registration</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className=""></span> <Link to='/farmersignup' style={{ color: '#FFF',textDecoration: 'none' }}>Farmer Registration</Link>
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className=""></span> <Link to='delsingup' style={{ color: '#FFF',textDecoration: 'none' }}>Delivery Registration</Link>
                            </button>
                            <form onSubmit={handleSubmit}  method='post'>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" name='fullname' value={fullname} onChange={(e) => setfullname(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Number</label>
                                    <input type="text" className="form-control" id="exampleInput" name='pno' value={pno} onChange={(e) => setpno(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password} onChange={(e) => setpassword(e.target.value)} required />
                                </div>
                                {/* <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="exampleInput" name='address' value={address} onChange={(e) => setaddress(e.target.value)} required/>
                                </div> */}
                                
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5" onClick={showAlert}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
