import React , {useState , useRef } from 'react'

function ApplyNowForm() {

    const inputRef = useRef(null);

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [mobile, setMobile] = useState("");
   const [position, setPosition] = useState("");
   const [work_experience, setWorkExperience] = useState("");
   const [selectedFile, setSelectedFile] = useState("");
   const [comment, setComment] = useState("");
   const [message, setMessage] = useState("");

   const changeFileHandler = (event) => {
		setSelectedFile(event.target.files[0]);
      console.log(selectedFile);
	};

    let handleSubmit = async (e) => {
     
      e.preventDefault();

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
         //  headers: {
         //    "Content-Type": "application/json"
         //  },
          body: formData,
        });
  
        console.log(res);
        if (res.status === 200) {
          setName("");
          setEmail("");
          setMobile(""); 
          setPosition('');
          setWorkExperience("");
          setComment("");
          setSelectedFile("");
          inputRef.current.value = null;
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
      <section className="apply-job-form contact_us pb-5" id='apply-job-form'>
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
                                            <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} id="name"  size="40" placeholder="Enter your full name" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="email">Your Email :</label>
                                            <div className="input-field">
                                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email"  size="40" placeholder="Enter your email" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="contact">Contact Number :</label>
                                            <div className="input-field">
                                            <input type="text" minlength="10" maxlength="10" pattern="[0-9]+" className="form-control" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} id="phone"  size="40" placeholder="Enter your contact no." required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="position">Position Applied for :</label>
                                            <div className="input-field">
                                            <input type="text" className="form-control" name="position" value={position} onChange={(e) => setPosition(e.target.value)} id="position"  size="40" placeholder="" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="experience">Working experience :</label>
                                            <div className="input-field">
                                            <input type="text" className="form-control" name="work_experience" value={work_experience} onChange={(e) => setWorkExperience(e.target.value)} id="work_experience"  size="40" placeholder="Enter your work experience" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5">    
                                        <div className="form-group"> 
                                            <label htmlFor="file">Upload File :</label>
                                            <div className="input-field">
                                            <input type="file" size="40" ref={inputRef} className="form-control" name="file" onChange={changeFileHandler}  id="file" placeholder="Upload file" accept ="image/*"/>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-5">
                                        <div className="form-group"> 
                                            <label htmlFor="msg">Description :</label>
                                            <div className="input-field bg-blue">
                                            <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} className="form-control bg-blue" id="message" cols="10" rows="1" placeholder="Description" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row w-100 ml-3 mt-3">    
                                     <input type="submit" value="SUBMIT" className="btn free_Quote_btn btn-lg"/>
                                    </div>
                                    <div className="message col-md-12">
                                       {message ? <p className='message_block'>{message}</p> : null}
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
    </>
  )
}

export default ApplyNowForm
