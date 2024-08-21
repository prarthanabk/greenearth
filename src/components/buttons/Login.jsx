import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {


    const history = useHistory();
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    
  
    
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        console.log(password);
        const response = await fetch('http://localhost:3001/customerlogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          
        });
  
        if (response.ok) {
          // Login successful, redirect to the dashboard
        
          history.push('/products1');
        }
      } catch (error) {
        console.error('Login error:', error);
        
      }
  
    }
    

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h5 className="modal-title" id="exampleModalLabel">Customer Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                            <Link to='farmerlogin' style={{ color: '#FFF',textDecoration: 'none' }}>Farmer Login</Link>
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className=""></span> <Link to='deliverylogin' style={{ color: '#FFF',textDecoration: 'none' }}>Delivery Login</Link>
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className=""></span><Link to='businesslogin' style={{ color: '#FFF',textDecoration: 'none' }}>Business Login</Link>
                            </button>
                            <form onSubmit={handleSubmit}  >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='email' value={email} onChange={(e) => setemail(e.target.value)} required  />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"  name='password' value={password} onChange={(e) => setpassword(e.target.value)} required />
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Login</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
