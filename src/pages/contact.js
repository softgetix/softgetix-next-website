import React,{useState, useEffect} from 'react';
import Template from "../components/common/Template";
import Head from 'next/head'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRouter } from 'next/router'

function Contact() {

    const router = useRouter();
    const [ogUrl, setOgUrl] = useState("");

    useEffect(() => {
      const host = window.location.host;
      const baseUrl = `https://${host}`;

      setOgUrl(`${baseUrl}${router.pathname}`);
    }, [router.pathname]);

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        mobile: '',
        organisation: '',
        intrests: '',
        comment: '',

      })
     
      const [validations, setValidations] = React.useState({
        name: '',
        email: '',
        mobile: '',
        organisation: '',
        intrests: '',
        comment: '',
      })
      
      const validateAll = () => {
        const { name, email, mobile,organisation,intrests,comment} = values
        const validations = { name: '', email: '', mobile: '', organisation: '',intrests: '', comment: ''}
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
          
        
        if (!organisation) {
            validations.organisation = 'Organisation is required'
            isValid = false
        }
        
        if (!intrests) {
            validations.intrests = 'Intrests is required'
            isValid = false
        }

        
        if (!comment) {
            validations.comment = 'Comment is required'
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

  const { name, email,mobile, organisation,intrests, comment } = values

  const { 
    name: nameVal, 
    email: emailVal, 
    mobile: mobileVal, 
    organisation: organisationVal, 
    intrests: intrestVal, 
    comment: commentVal, 

  } = validations

  let handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateAll()
    
    if (!isValid) {
      return false
    }
    try {
      let res = await fetch(
        "https://projects.softgetix.com/SoftGetixAPI/public/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: "contactus",
            name: name,
            email: email,
            organisation: organisation,
            mobile: mobile,
            intrests: intrests,
            message: comment,
          }),
        }
      );

      // let resJson = await res.json();
      console.log(res);
      if (res.status === 200) {
        e.target.reset();
        setValues('');
        setValidations('');
        setValues({ comment: '' });
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
      <Head>
        <title>  Contact - Get In Touch For Our All Services - Softgetix </title>
        <link rel="canonical" href={ogUrl}></link>
      </Head>
      <Template>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 text-center mb-3">
                <h2 className="heading-section">
                  Please submit your information and we will get back to you.
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Address:</span> 519, Shagun Tower, AB Road,
                            Vijay Nagar Square, Indore
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">+91-731-4002699</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-envelope"></span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">
                              hello@softgetix.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Website</span> <a href="#">softgetix.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row no-gutters">
                    <div className="col-md-7">
                      <div className="contact-wrap w-100  p-4">
                        <form className="contactForm" onSubmit={handleSubmit} id="contactForm">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  value={name}
                                  onChange={handleChange}
                                  onBlur={validateOne}
                                  id="name"
                                  placeholder="Name"
                                />
                                 <div className="error">{nameVal}</div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  value={email}
                                  onChange={handleChange}
                                  onBlur={validateOne}
                                  placeholder="Email"
                                />
                                <div className="error">{emailVal}</div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="organisation">
                                  Organization
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="organisation"
                                  value={organisation}
                                  onChange={handleChange}
                                  onBlur={validateOne}
                                  id="organisation"
                                  placeholder="organisation"
                                />
                                <div className="error">{organisationVal}</div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="mobile">
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Phone number"
                                  name="mobile"
                                  value={mobile}
                                  onChange={handleChange}
                                  onBlur={validateOne}
                                />
                                <div className="error">{mobileVal}</div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group radio-block">
                                <label className="label" htmlFor="#">
                                  Interested in?*
                                </label>
                                <ul className="radio-flex">
                                  <li>
                                    <input
                                      type="radio"
                                      id="staffing"
                                      name="intrests"
                                      value="Custom Software Development"
                                      checked={
                                        intrests ===
                                        "Custom Software Development"
                                      }
                                      onChange={handleChange}
                                      onBlur={validateOne}
                                    />
                                    <label
                                      className="wpforms-field-label-inline ml-2"
                                      htmlFor="staffing"
                                    >
                                      Custom Software Development
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      id="staffing"
                                      name="intrests"
                                      value="Dedicated Team"
                                      checked={intrests === "Dedicated Team"}
                                      onChange={handleChange}
                                      onBlur={validateOne}
                                    />
                                    <label
                                      className="wpforms-field-label-inline ml-2"
                                      htmlFor="staffing"
                                    >
                                      Dedicated Team
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      id="staffing"
                                      name="intrests"
                                      value="IT Staff Augmentation"
                                      checked={
                                        intrests === "IT Staff Augmentation"
                                      }
                                      onChange={handleChange}
                                        onBlur={validateOne}
                                    />
                                    <label
                                      className="wpforms-field-label-inline ml-2"
                                      htmlFor="staffing"
                                    >
                                      IT Staff Augmentation
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      id="staffing"
                                      name="intrests"
                                      value="IT Consulting Digital Advisory"
                                      checked={
                                        intrests ===
                                        "IT Consulting Digital Advisory"
                                      }
                                      onChange={handleChange}
                                      onBlur={validateOne}
                                    />
                                    <label
                                      className="wpforms-field-label-inline ml-2"
                                      htmlFor="staffing"
                                    >
                                      IT Consulting &amp; Digital Advisory
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      id="other"
                                      name="intrests"
                                      value="Other Services"
                                      checked={intrests === "Other Services"}
                                      onChange={handleChange}
                                      onBlur={validateOne}
                                    />
                                    <label
                                      className="wpforms-field-label-inline ml-2"
                                      htmlFor="other"
                                    >
                                      Other Services
                                    </label>
                                  </li>
                                </ul>
                              </div>
                              <div className="error">{intrestVal}</div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="#">
                                  Tell Us More{" "}
                                </label>
                                <textarea
                                  name="comment"
                                  value={comment}
                                  onChange={handleChange}
                                  onBlur={validateOne}
                                  className="form-control"
                                  id="comment"
                                  cols="30"
                                  rows="4"
                                  placeholder="Tell Us More"
                                ></textarea>
                                <div className="error">{commentVal}</div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Let's Connect With Us"
                                  className="btn free_Quote_btn"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p>
                                We respect your privacy and will not use your
                                email address for any other communication
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-stretch">
                      <div className="info-wrap w-100 p-5 img infowrap-contactimg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Template>
    </>
  );
}

export default Contact;
