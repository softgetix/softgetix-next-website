import React, { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function ContactTest() {

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    mobile: '',
    comment: '',

  })
 
  const [validations, setValidations] = React.useState({
    name: '',
    email: '',
    mobile: '',
    comment: '',
  })
  
  const validateAll = () => {
    const { name, email, mobile,comment} = values
    const validations = { name: '', email: '', mobile: '', comment: ''}
    let isValid = true
    
    if (!name) {
      validations.name = 'Name is required'
      isValid = false
    }
    
    if (name && name.length < 3 || name.length > 50) {
      validations.name = 'Name must contain between 3 and 50 characters'
      isValid = false
    }
    
    if (!email) {
      validations.email = 'Email is required'
      isValid = false
    }
    
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = 'Email format must be as example@mail.com'
      isValid = false
    }
    
    
    if (!mobile) {
        validations.mobile = 'Mobile is required'
        isValid = false
    }

    if (mobile && !/^\d{10}$/.test(mobile)) {
        validations.mobile = 'Invalid Mobile Number'
        isValid = false
    }
   
    
    if (!comment) {
        validations.comment = 'Message is required'
        isValid = false
    }

    if (!isValid) {
      setValidations(validations)
    }
    
    return isValid
  }

  const validateOne = (e) => {
    const { name } = e.target
    const value = values[name]
    let message = ''
    
    if (!value) {
      message = `${name} is required`
    }
    
    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = 'Name must contain between 3 and 50 characters'
    }

    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
    }
    
    if (value &&  name === 'mobile' && !/^\d{10}$/.test(value)) {
        message = 'Invalid Mobile Number'
      }

    setValidations({...validations, [name]: message })
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value })
  }

const { name, email,mobile, comment } = values

const { 
name: nameVal, 
email: emailVal, 
mobile: mobileVal,  
comment: commentVal, 

} = validations
  
    const [isChecked, setIsChecked] = useState(false);
  
    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
    
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      const isValid = validateAll()
    
      if (!isValid) {
        return false
      }

      try {
        let res = await fetch("https://projects.softgetix.com/SoftGetixAPI/public/api/contacts", {
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
          e.target.reset();
          setValues('');
          setValidations('');
          setValues({ comment: '' });
          setIsChecked(!isChecked);
          Swal.fire({
            icon: "success",
            title: 'Thanks for contacting Us. We will contact you shortly.',
            width: 400,
            padding: '1em',
            color: '#000',
            font: '12px',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
        } else {
          Swal.fire({
            icon: "error",
            title: 'Contact Us support not available for now. Please try again later.',
            padding: '1em',
            color: '#000',
            font: '12px',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
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
                    height: '667px',
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
                                                  <input type="text" name="name" value={name} onChange={handleChange} onBlur={validateOne}  placeholder="Enter your full name" /> 
                                                  </div>
                                                  <div className="error">{nameVal}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-5">    
                                            <div className="form-group"> 
                                                <label htmlFor="name">Mail :</label>
                                                <div className="input-field"><input type="email"
                                                placeholder="Enter your email address" name="email" value={email}  onChange={handleChange}	onBlur={validateOne} /> 
                                                </div>
                                                <div className="error">{emailVal}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-5">    
                                            <div className="form-group"> 
                                                <label htmlFor="name">Phone :</label>
                                                <div className="input-field"><input type="text"  placeholder="Enter your phone number" name="mobile" value={mobile}onChange={handleChange} onBlur={validateOne}/> 
                                                </div>
                                                <div className="error">{mobileVal}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-5">
                                            <div className="form-group"> 
                                                <label htmlFor="msg">Message :</label>
                                                <div className="input-field bg-blue"><textarea name="comment" id="msg" value={comment}
                                                  onChange={handleChange} onBlur={validateOne}   cols="10" rows="1" className="form-control bg-blue" placeholder="Brief description of your needs"></textarea>
                                                  </div>
                                                  <div className="error">{commentVal}</div>
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
