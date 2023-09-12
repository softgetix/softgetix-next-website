import React from "react";
import Image from 'next/image'

function About(props) {
  const ContactSection = React.useRef("");
  
  function smoothScroll(target) {
      const element = document.getElementById('conthub');
      const { top } = element.getBoundingClientRect()
      window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth"
      });
  }

  return (
    <>
   
<section id="index_about_sg">
  <div className="container">
    <div className="row">
        <div className="col-lg-8 col-md-12 col-xs-12">
          <div className="">
            <div className="col-md-12">
              <h2 className="font-weight-bold staff-heading">About <b className="orange-text">SoftGetix</b></h2>
            </div>
            <div className="col-md-12">
              <div className="staff_steps_details">
                <p>SoftGetix Inc, founded in 2012 have more than a decade of experience with end-to-end IT consulting services, web development, e-commerce development, database development services, UI/UX design, custom software development and managed services across Infrastructure, IT staff augmentation, Cloud, Mobility, BI, Analytics, Product Engineering, QA & Testing, IoT, Big Data, and Artificial Intelligence.</p>
                <p>We are committed to providing quality service to our customers through the continuous improvement of existing processes and the development of new ones. Our approach to quality improvement is driven by customer requirements, market trends, technological advances and industry best practices.</p>
                <p>We have an agile hiring process and a relentless focus on customer delight. These two factors have helped us garner the trust of our clients as the best outsourcing partner for offshoring IT consulting services.</p>
                <b>Why SoftGetix</b>
                <ul>
                  <li>Ranked #1 on TrueFirms as an IT staff augmentation company</li>
                  <li>Flexible engagement models</li>
                  <li>$100 M+ funded apps developed</li>
                  <li>100% certified and expert programmers</li>
                  <li>Competitive pricing & on-time delivery</li>
                  <li>Strong technology competency</li>
                  <li>Seamless communication</li>
                </ul>  
              </div>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-6 mt-3">
                  <div>
                    <a id="consultation-btn" onClick={(props) => smoothScroll(ContactSection.current)} className="btn free_Quote_btn btn-lg">Get a Free Consultation</a>
                  </div>
                </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-xs-12 counting-div">
          <div className="row text-center">
              <div className="col-lg-6 col-md-6 col-xs-12 sg-counting">
                  <div className="counter">
                  <Image src="/icons/flight.png" alt="flight" width="50" height="50" />
                      <h2 className="count-title">24+</h2>
                      <p className="count-text">COUNTRIES SERVED </p>
                  </div>  
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 sg-counting">
                  <div className="counter">
                  <Image src="/icons/rating.png" alt="rating" width="50" height="50" />
                      <h2 className="count-title">530+</h2>
                      <p className="count-text">HAPPY CLIENTS </p>
                  </div>  
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 sg-counting">
                  <div className="counter">
                  <Image src="/icons/pencil-and-ruler.png" alt="pencil" width="50" height="50" />
                      <h2 className="count-title">1280+</h2>
                      <p className="count-text">PROJECTS COMPLETE </p>
                  </div>   
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 sg-counting">
                  <div className="counter">
                  <Image src="/icons/years.png" alt="years" width="50" height="50" />
                      <h2 className="count-title">14+</h2>
                      <p className="count-text">YEARS </p>
                  </div>  
              </div>
          </div>
        </div>
    </div>
  </div>
</section>
    </>
  );
}

export default About;
