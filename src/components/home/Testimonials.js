import React from 'react'
import Image from 'next/image'

function Testimonials() {
  return (
    <>
      <div className="col-md-12 mt-3">
        <h2 className="font-weight-bold text-center staff-heading">What our <b className="orange-text">Clients</b> Say</h2>
      </div>
      <section id="client_testimonials">
        <div className="container">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                  <div className="carousel-caption">
                      <p>We&apos;ve been working with SoftGetix for almost six years now and plan to continue using team of talented people for years to come. They consistently exceed our expectations and providing quality delivery.
                      </p>
                      <Image src="/images/stew.jpg" alt="stew" width="96" height="96" />
                      <div id="image-caption">JS Robinson</div>
                      <div id="client-designation">Founder & Technology Architect, USA</div>
                  </div>   
                  </div>
              </div>
            </div>
        </div>
      </section>  
    </>
  )
}

export default Testimonials
