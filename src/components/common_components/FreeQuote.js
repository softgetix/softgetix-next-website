import React from 'react';
import Link from 'next/link'


function FreeQuote() {
  return (
    <>
      <section className="short-contact_us">
          <div className="container">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center">
                    <h1><b>Request A Free Quotation Today!</b></h1>
                    <Link href="/get-free-quote" className="btn free_Quote_btn btn-lg mt-3" >Get a Free Quote!</Link>
                </div>
                <div className="col-lg-2"></div>
              </div>
          </div>
      </section>
    </>
  )
}

export default FreeQuote
