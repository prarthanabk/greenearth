import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullname: fullname,
      email: email,
      message: message


    }
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3001/addfeedback', data);
      console.log(data);
      console.log(response);

    } catch (error) {
      console.log(error);


    }
  }

  const showAlert = () => {
    window.alert('Thank you for valuable feedback .');
  };


  return (
    <div>
       <div style={{ background: "url('/images/contactus/contact.webp')", backgroundSize: 'cover', minHeight: '100vh' }}>
       <center>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>

          {/* <div className="row">
            <div className="col-md 5 d-flex justify-content-center">
              <img src="/images/contactus/contact.webp" alt="Contact Us" height="600px" width="300px" />
            </div>
          </div> */}
         <center>
            <div className="col-md-6">
              
              <form onSubmit={handleSubmit} method='post' >
                <div class="mb-3">
                  <label for="exampleForm" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="exampleForm" placeholder="Name" name='fullname' value={fullname} onChange={(e) => setfullname(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name='message' value={message} onChange={(e) => setmessage(e.target.value)} required></textarea>
                </div>
                <button type="submit" class="btn btn-outline-primary" onClick={showAlert}>Send Message</button>
              </form>
            </div>
            </center>
        </div>
      </div>
      </center>
      </div>
    </div>
  )
}

export default Contact
