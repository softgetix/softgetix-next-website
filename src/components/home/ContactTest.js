import Template from '../common/Template';
import React, { useState } from 'react'

function ContactTest() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobileNumber] = useState("");
    const [comment, setComment] = useState("");
    const [message, setMessage] = useState("");
  
    const [isChecked, setIsChecked] = useState(false);
  
    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
    
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://softgetix.com/SoftGetixAPI/public/api/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            page: 'contact',
            name: name,
            email: email,
            mobile: mobile,
            message: comment
          }),
        });
  
        // let resJson = await res.json();
        console.log(res);
        if (res.status === 200) {
          setName("");
          setEmail("");
          setMobileNumber(""); 
          setComment("");
          setMessage("Thanks for contacting Us. We will contact you shortly.");
        } else {
          setMessage("Contact Us support not available for now. Please try again later.");
        }
      } catch (err) {
        console.log(err);
      }
    };

  return ( 
    <>
      
      <section className="contact_us" id="conthub">
          <div className="container">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-5">
                  <div className="meetings-iframe-container">
                    <iframe
                    title={'hubspot'}
                    style={{
                    width: '100%',
                    height: '657px',
                    border: 'none',
                    background: 'white'
                    }}
                    src={'https://meetings.hubspot.com/binod-kumar?embed=true'}
                    />
                    </div>
                    <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
                  </div>
                  <div className="col-lg-7">
                    <div className="contact_form">	
                        <div className="d-flex flex-row justify-content-center">
                            <form className="w-xl-50 w-lg-75" onSubmit={handleSubmit} >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 contact_us_heading">
                                          <h2>Got a project or partnership in mind?</h2>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"> 
                                                <label htmlFor="name">Your Name :</label>
                                                <div className="input-field">
                                                  <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required/> </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-5">    
                                            <div className="form-group"> 
                                                <label htmlFor="name">Mail :</label>
                                                <div className="input-field"><input type="email"
                                                placeholder="Enter your email address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/> </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-5">    
                                            <div className="form-group"> 
                                                <label htmlFor="name">Phone :</label>
                                                <div className="input-field"><input type="text" minLength="10" maxLength="10" pattern="[0-9]+" placeholder="Enter your phone number" name="mobile" value={mobile} onChange={(e) => setMobileNumber(e.target.value)} required/> </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-5">
                                            <div className="form-group"> 
                                                <label htmlFor="msg">Message :</label>
                                                <div className="input-field bg-blue"><textarea name="comment" id="msg" value={comment}
                                                  onChange={(e) => setComment(e.target.value)}  cols="10" rows="1" className="form-control bg-blue" placeholder="Brief description of your needs"></textarea></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <label className="check">I want to receive news and updates once in a while
                                            </label>

                                            <input
                                              type="checkbox"
                                              name="check"
                                              value="Check_accepted"
                                              checked={isChecked}
                                              className="geekmark"
                                              onChange={handleOnChange}
                                            />
                                           
                                        </div>
                                        <div className="d-flex flex-row w-100 ml-3 mt-3">   
                                          <input type="submit" value="Send Message" className="btn free_Quote_btn btn-lg"/> 
                                        </div>

                                        <div className="message">{message ? <p className='message_block'>{message}</p> : null}</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>    
                  </div>
                </div>
              </div>
            </div>
        </section>
        
    </>
  )
}

export default ContactTest
