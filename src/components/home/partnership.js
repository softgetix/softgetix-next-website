import React from "react";
import Link from 'next/link'
import Image from 'next/image'

function Partnership() {
  return (
    <>
      <section id="partnership-model">
         <div className="container mt-5 mb-5">
            <div className="row">
                  <div className="text-center pb-2">
                     <div className="col-md-12">
                        <h2 className="font-weight-bold text-center staff-heading">Partnership <b className="orange-text">Models</b></h2>
                     </div>
                     <div className="col-md-8 m-auto">
                        <div className="staff_steps_details text-center">
                           <p>The engagement model focuses on the budget of app development, needs, wants, and interests of the client along with ensuring the level of control, flexibility, and responsibility. At SoftGetix, we use three key outsourcing models: </p>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-12">
                     <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                           <div className="csd_project_values">
                              <div className="features_img">
                                 <Image src="/icons/fixed-price.png" alt="fixed-price" width="64" height="64" />
                              </div>
                              <div className="features_title mt-4">
                                 <h3>Fixed Price Project model</h3>
                                 <p className="mt-3 model-paragraph">The fixed price (also known as project-based) model is perfect for small and medium-scope projects, where requirements, specifications, and schedules can be clearly defined before the start of the project development.</p>
                                 <div className="index-model-buttons">
                                    <Link href="/get-free-quote" className="btn free_Quote_btn btn-sm" ><b>Build a Product</b></Link>
                                 </div>
                              </div>
                           </div>      
                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12">
                           <div className="csd_project_values">
                              <div className="features_img">
                                 <Image src="/icons/development.png" alt="development" width="64" height="64" />
                              </div>
                              <div className="features_title mt-4">
                                 <h3 className="mt-3">IT Staff Augmentation</h3>
                                 <p className="mt-3 model-paragraph">Our IT staffing services provide the technical acumen and cost-effective way to scale your internal development teams quickly on an on-demand basis (team up and down with ease) and complete projects on time.</p>
                                 <div className="index-model-buttons">
                                    <Link href="/it-staff-augmentation-services" className="btn free_Quote_btn btn-sm" ><b>Staff My Team</b></Link>
                                 </div>
                              </div>
                           </div>      
                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12">
                           <div className="csd_project_values">
                              <div className="features_img">
                                 <Image src="/icons/dedicated-team.png" alt="dedicated-team" width="64" height="64" />
                              </div>
                              <div className="features_title mt-4">
                                 <h3 className="mt-3">Dedicated Team model</h3>
                                 <p className="mt-3 model-paragraph">SoftGetix can build a dedicated development team from scratch. Share your requirements with us - tech stack, seniority level, and size - and we’ll assemble a team of pre-vetted professionals per your needs.</p>
                                 <div className="index-model-buttons">
                                    <Link href="/contact" className="btn free_Quote_btn btn-sm" ><b>Contact Us</b></Link>
                                 </div>
                              </div>
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

export default Partnership;
