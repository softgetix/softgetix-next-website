import React, { useEffect, useState,  useRef } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Template from "../../components/common/Template";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  return {
    props: {
      id,
    },
  };
}

function JobDetails() {
  
  
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    mobile: '',
    position: '',
    work_experience: '',
    comment: '',
  })
 
  const [validations, setValidations] = React.useState({
    name: '',
    email: '',
    mobile: '',
    position: '',
    work_experience: '',
    comment: '',
  })
  
  const validateAll = () => {
    const { name, email, mobile,position,work_experience,comment} = values
    const validations = { name: '', email: '', mobile: '', position: '',work_experience: '', comment: ''}
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
      
    
    if (!position) {
        validations.position = 'Position is required'
        isValid = false
    }
    
    if (!work_experience) {
        validations.work_experience = 'Work Experience is required'
        isValid = false
    }

    
    if (!comment) {
        validations.comment = 'Description is required'
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

const { name, email,mobile, position,work_experience, comment } = values

const { 
name: nameVal, 
email: emailVal, 
mobile: mobileVal, 
position: positionVal, 
work_experience: experienceVal, 
comment: commentVal, 

} = validations


const router = useRouter()
const { id } = router.query
const [ogUrl, setOgUrl] = useState("");
const [users, setUsers] = useState({});

const resourceSection = React.useRef();

function smoothScroll(target) {
  const { top } = target.getBoundingClientRect()
  window.scrollTo({
  top: top + window.pageYOffset,
  behavior: "smooth"
  });
}
const inputRef = useRef(null);

const [selectedFile, setSelectedFile] = useState("");
const [fileVal, setRequiredFile] = useState("");

const changeFileHandler = (event) => {
 setSelectedFile(event.target.files[0]);
 console.log(selectedFile);
};


let handleSubmit = async (e) => {
    
  e.preventDefault();
 
  const isValid = validateAll()
 
  if (!isValid) {
    return false
  }

  if (!selectedFile) {
    setRequiredFile('File is required')
    return false;
  }
  if (!selectedFile.name.match(/\.(pdf|xls|doc|docx)$/)) {
    setRequiredFile('select valid file.')
    return false;
  }

  var size = parseFloat(selectedFile.size / (1024 * 1024)).toFixed(2); 
  if(size > 2) {
    setRequiredFile('Please select file size less than 2 MB');
      return false;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("mobile", mobile);
  formData.append("position", position);
  formData.append("work_experience", work_experience);
  formData.append("message", comment);
  formData.append("page", "ApplyNow");
  formData.append("image", selectedFile);
  formData.append('_method', 'POST')
  
  try {
    let res = await fetch("https://projects.softgetix.com/SoftGetixAPI/public/api/contacts", {
      method: "POST",
      body: formData,
    });

    if (res.status === 200) {
      e.target.reset();
      setValues(" ");
      setSelectedFile("");
      setRequiredFile("");
      setValues({ comment: '' });
      setValidations('');
      inputRef.current.value = null;
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
 
    
  useEffect(() => {

    const jobarr= JSON.parse(localStorage.getItem('roles'));
    var index1 = jobarr.findIndex(x => parseInt(x.id) === parseInt(id));
    if(index1 >= 0){
      setUsers(jobarr[index1]);
    }
    
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
    
	},[router.pathname]);	

	if (users === null) {
    return (
      <section className="job-details" id="job-details">
        <div className="container">
          <div className="row pt-3 pb-3">
          <h2>Loading Jobs...</h2>;
          </div>
        </div>
        </section>
    );
  }
  return (
    <>
    <Head>
        <title>Career - Explore Career In Software Development - Softgetix</title>
        <link rel="canonical" href={ogUrl}></link>
    </Head>
    <Template>
      <section className="services">
        <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-10 text-center">
                  <h2 className="heading-section">{ users.job_name }</h2>
              </div>
          </div>
        </div>
        </section>
        <section className="job-details" id="job-details">
        <div className="container">
          <div className="row pt-3 pb-3">
            <div className="col-md-8 col-xl-9 col-xs-12">
              <div className="job-details-imp">
                <p><b>Position :</b> { users.position }</p>
                <p><b>Experience :</b> { users.experience }</p>
                <p><b>Key skills :</b> { users.skills }</p>
              </div>
            </div>
            <div className="col-md-4 col-xl-3 col-xs-12 job-detail-buttons">
              <div className="mt-3 mb-3">
                <Link href="/career" className="btn free_Quote_btn btn-lg">Back to All Jobs</Link>
              </div>
              <div className="mt-3 mb-3">  
                <button id="apply-now-job" onClick={() => smoothScroll(resourceSection.current)} className="btn free_Quote_btn case-study-btn btn-lg">Apply Now</button>
              </div>  
            </div>
            <div className="col-lg-12 mt-3 mb-3">
              <h2><b>Expertise in { users.expertise }</b></h2>
              {/* <div>
               <div dangerouslySetInnerHTML={{ __html: users.description }} />
              </div> */}
              <div>
                <div>
                <b>Job Description:</b>
                {/* <p className="dynamic_para">{ users.job_description }</p> */}
                <div className="dynamic_para" dangerouslySetInnerHTML={{ __html: users.job_description }} />
                <p></p><br/>
                <b>Responsibilities :</b>
                {/* <ul className="job-ul"> */}
                <div dangerouslySetInnerHTML={{ __html: users.responsibility }} />
                {/* </ul> */}
                <br/>
                <b>Requirements :</b>
                {/* <ul className="job-ul"> */}
                 <div dangerouslySetInnerHTML={{ __html: users.roles }} />
                {/* </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        
        <section className="apply-job-form contact_us pb-5" id='apply-job-form' ref={resourceSection}>
          <div className="container">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                  <h2 className="heading-section pt-4">Apply Now</h2>
                </div>
              </div>
              <div className="row">
                <div className="contact_form">  
                    <div className="d-flex flex-row justify-content-center">
                    <form id="contactForm" name="contactForm" className="w-xl-50 w-lg-75"  onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="name">Full name :</label>
                                            <div className="input-field">
                                            <input type="text" className="form-control" name="name" value={name}  onChange={handleChange} onBlur={validateOne} id="name"  size="40" placeholder="Enter your full name" />
                                            </div>
                                            <div className="error">{nameVal}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="email">Your Email :</label>
                                            <div className="input-field">
                                            <input type="email" className="form-control" name="email" value={email} onChange={handleChange}
                                  			onBlur={validateOne} id="email"  size="40" placeholder="Enter your email"/>
                                            </div>
                                            <div className="error">{emailVal}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="contact">Contact Number :</label>
                                            <div className="input-field">
                                            <input type="text" className="form-control" name="mobile" value={mobile}  onChange={handleChange}
                                                onBlur={validateOne} id="phone"  size="40" placeholder="Enter your contact no."/>
                                            </div>
                                            <div className="error">{mobileVal}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="position">Position Applied for :</label>
                                            <div className="input-field">
                                            <input type="text" className="form-control" name="position" value={position} onChange={handleChange}
                                                onBlur={validateOne} id="position"  size="40" placeholder="" />
                                            </div>
                                            <div className="error">{positionVal}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="experience">Working experience :</label>
                                            <div className="input-field">
                                            <input type="text" className="form-control" name="work_experience" value={work_experience} onChange={handleChange}
                                                onBlur={validateOne} id="work_experience"  size="40" placeholder="Enter your work experience" />
                                            </div>
                                            <div className="error">{experienceVal}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="file">Upload File :</label>
                                            <div className="input-field">
                                            <input type="file" size="40" ref={inputRef} className="form-control" name="file"  onChange={changeFileHandler}
                                              id="file" placeholder="Upload file" accept ="image/*"/>
                                            </div>
                                            <div className="error">{fileVal}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <div className="form-group"> 
                                            <label htmlFor="msg">Description :</label>
                                            <div className="input-field bg-blue">
                                            <textarea name="comment" value={comment} onChange={handleChange}
                                                onBlur={validateOne} className="form-control bg-blue" id="comment" cols="10" rows="1" placeholder="Description" ></textarea>
                                            </div>
                                            <div className="error">{commentVal}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row w-100 ml-3 mt-3">    
                                     <input type="submit" value="SUBMIT" className="btn free_Quote_btn btn-lg"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>    
              </div>
            </div>
          </div>
        </section>
        </Template>
    </>
  )
}

export default JobDetails