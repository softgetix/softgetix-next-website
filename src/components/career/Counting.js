import React from 'react'
import Image from 'next/image'

function Counting() {
  return (
    <>
      <section className="opportunities-counting">
          <div className="container opportunities-counting_container">
              <div className="row" >
                <div className="col-md-12 text-center">
                  <h2 className="opportunities-counting-title pt-4">
                      Growing fast, globally
                  </h2>
                </div>   
              </div>
              <div className="row text-center">
                <div className="col-lg-3 col-md-6 about_us_counting">
                    <div className="counter">
                      <h2 className="count-title">24+</h2>
                      <p className="count-text ">
                      <Image src="/icons/flight.png" alt="flight" width="25" height="25" />
                        &nbsp; COUNTRIES SERVED </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 about_us_counting">
                    <div className="counter">
                      <h2 className="count-title">530+</h2>
                      <p className="count-text ">
                      <Image src="/icons/rating.png" alt="rating" width="25" height="25" />
                        HAPPY CLIENTS </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 about_us_counting">
                    <div className="counter">
                      <h2 className="count-title">1280+</h2>
                      <p className="count-text ">
                      <Image src="/icons/pencil-and-ruler.png" alt="pencil" width="25" height="25" />
                        &nbsp; PROJECTS COMPLETE </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 about_us_counting">
                    <div className="counter">
                      <h2 className="count-title">14+</h2>
                      <p className="count-text ">
                      <Image src="/icons/years.png" alt="years" width="25" height="25" />
                        &nbsp; YEARS </p>
                    </div>
                </div>
              </div>
          </div>
      </section>

    </>
  )
}

export default Counting
