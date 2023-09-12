import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'
import BackToTopButton from '../../BackToTopButton';

function Footer() {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <h3>Address</h3>
            <div className="underline_value_heading"></div>
            <ul className="list-unstyled">
              <li>SoftGetix Inc. <br/>
                  519, Shagun Tower, AB Road,<br/>
                  Above Apna Sweets, <br/>
                  Vijay Nagar Square,<br/>
                  Indore, MP. 452010</li>
              <li><a href="tel:+91-731-4002699">+91-731-4002699</a></li>
              <li><a href="mailto:hello@softgetix.com">hello@softgetix.com</a></li>
            </ul>
            <ul className="list-unstyled">
              <li>Follow Us</li>
            </ul>
            <ul className="list-unstyled socila-list">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/softgetix" className='mr-1'><i className="fa fa-facebook"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/softgetix-inc/"><i className="fa fa-linkedin"></i></a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/Binodofficial"><i className="fa fa-twitter"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/softgetix"><i className="fa fa-instagram"></i></a>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3>Company</h3>
            <div className="underline_value_heading"></div>
            <ul className="list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/it-staff-augmentation-services">Staffing</Link></li>
              <li><Link href="/career">Careers</Link></li>
              <li><Link href="https://blog.softgetix.com/">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/confidentiality-policy">Confidentiality Policy</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h3>Services</h3>
            <div className="underline_value_heading"></div>
            <ul className="list-unstyled">
              <li><Link href="/dedicated-team">Dedicated Development Team</Link></li>
              <li><Link href="/it-staff-augmentation">IT Staff Augmentation</Link></li>
              <li><Link href="/backend-development-services">Back End Development</Link></li>
              <li><Link href="/frontend-development-services">Front End Development</Link></li>
              <li><Link href="/web-development-services">Web Development</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h3>Achievements</h3>
            <div className="underline_value_heading"></div>
            <Image className="img-thumbnail" src="/images/staff_aug_award.png" alt="Software-Development" width="150" height="180"/>
            {/* <Image className="img-thumbnail ml-1" src="/images/Web-Development.webp" alt="Web-Development" width="125" height="160"/> */}
            <Image className="img-thumbnail" src="/images/TruefirmReviews.webp" alt="TruefirmReviews" width="300" height="82"/>
            <Image className="img-thumbnail" src="/images/CrowedReviews.webp" alt="CrowedReviews" width="300" height="82"/>
          </div>
          
        </div>
      </div>
      <div className="copyright text-center">
        &copy; 2023 All Rights Reserved<span> SoftGetix Inc.</span>
      </div>
    </footer>
    <BackToTopButton />
    </>
  )
}

export default Footer
