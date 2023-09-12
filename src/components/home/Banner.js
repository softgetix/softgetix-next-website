import React from "react";
import Link from 'next/link'
import BrandImages from "../common/BrandImages";

function Banner() {
  return (
    <>
      <section className="banner">
         <div className="container">
            <div className="row">
               <div className="banner_image">
                  <div className="banner_text">
                     <div className="">
                        <h1 className="banner_title">We Help Visionary Start-ups, Scale-ups, and Global Brands Digitally Transform, Build New Products, And Scale Dev Teams.</h1>
                     </div>
                     <div className="banner_info mt-3">
                        <p>We take care of everything from concept development to business analysis, design and prototyping, development, quality assurance, deployment and post-project maintenance and support.</p>
                     </div>
                     <div className="banner_buttons mt-5">
                        <Link href="/get-free-quote" className="btn btn-banner_btn1 btn-lg " ><b>Build a Product</b></Link>
                        <Link href="/it-staff-augmentation-services" className="btn btn-banner_btn2 btn-lg "><b>Staff My Team</b></Link>
                        
                     </div>
                     
                     <section id="staff-cmp">
                        <div className="container">
                              <div className="row">
                                 <BrandImages />
                              </div>
                        </div>
                     </section>
                     
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}

export default Banner;
