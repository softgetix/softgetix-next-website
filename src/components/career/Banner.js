import React from 'react'
import Image from 'next/image'

function Banner() {

  return (
    <>
      <section id="careers-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="font-weight-bold text-center staff-heading">Explore a <b className="orange-text">career</b>  at SoftGetix.</h1>
            </div>
            <div className="col-md-10 m-auto">
              <div className="staff_row_details text-center">
                <p>They once had a choice and they chose SoftGetix. Today, they're are agents of change to lead in this new era of technology. Listen from our people who chose to aspire and grow with us.</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="container-sm">
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                      </ol>   
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                        <Image src="/images/slider1.png" className="img-fluid" alt="slider1" width="710" height="450" />
                        </div>
                        <div className="carousel-item">
                        <Image src="/images/careers-slider6.webp" className="img-fluid" alt="slider2" width="710" height="450" />
                        </div>
                        <div className="carousel-item">
                        <Image src="/images/slider3.png" className="img-fluid" alt="slider3" width="710" height="450" />
                        </div>  
                        <div className="carousel-item">
                        <Image src="/images/slider6.png" className="img-fluid" alt="slider4" width="710" height="450" />
                        </div>
                        <div className="carousel-item">
                        <Image src="/images/careers-slider5.webp" className="img-fluid" alt="slider5" width="710" height="450" />
                        </div>
                        <div className="carousel-item">
                        <Image src="/images/careers-slider2.webp" className="img-fluid" alt="slider6" width="710" height="450" />
                        </div>         
                      </div>
                      <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <span><i className="fa fa-angle-left"></i></span>
                      </a>
                      <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                        <span><i className="fa fa-angle-right"></i></span>
                      </a>
                    </div>
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


export default Banner
