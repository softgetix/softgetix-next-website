import React from "react";
import Link from 'next/link'
import Image from 'next/image'

function CaseStudy() {
  return (
    <>
      <section className="all_services" id="case-study">
        <div className="container">
        <hr />
          <div className="row align-items-center mt-5 ">
            <div className="col-md-6 col-xl-6 order-md-2">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>SalesDaas.ai </b>
              </h2>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Category : </b>&nbsp; Sales Data Analytics Tool 
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Distribution Model : </b>&nbsp; SaaS 
                </p>
              </div>
              <p className="text-secondary">
              Sales Data as a Service (DaaS) enables companies to outsource their data collection and analysis to a third-party cloud-based tool to gather sales data and gauge sales performance. It is used to identify, optimize, and forecast sales. It uses different metrics and KPIs to plan an efficient sales model that generates higher revenue for the business. Sales DaaS gives companies the ability to gain access to the data and sales insights they need within a matter of a few simple clicks. <Link href="/sales-daas-case-study" style={{"color":"#ff6c6b"}}>.....more</Link></p>  
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Partnership Models : </b>&nbsp; Dedicated Team 
                </p>
                <div className="text-secondary case-study-technology technologies">
                  <b>Technologies :</b>
                  <div>Python</div> <div>Big Data</div>
                  <div>NoSQL</div> <div>SQL</div>
                  <div>AWS</div> <div>Web Services</div>
                  <div>Cloud Computing</div> <div>Data Warehousing</div>
                  <div>Artificial Intelligence</div> <div>Data Management</div>
                  <div>Algorithm</div> <div>Data Structure</div>
                </div>
              </div>
              <div className="d-flex flex-row w-100">
                <Link href="/sales-daas-case-study" className="btn free_Quote_btn case-study-btn btn-lg">
                  View Case Study
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 text-center image-container">
              <Image src="/images/salesdaas-io.webp" alt="salesdaas-io" layout="fill" className="service_img image"  />
            </div>
          </div>
          <div className="row align-items-center mt-4">
            <div className="col-md-6 col-xl-6">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>FenceForce</b>
              </h2>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Category:</b>&nbsp;  SaaS ERP
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Sector : </b>&nbsp; Fence Construction 
                </p>
              </div>
              <p className="text-secondary">
              An ERP application for the Fence construction industry with features like customer management, work order scheduling and management, bid management, proposal management, RFIs, user management, location management with Google API, foreman scheduling, advanced search options, work items, site sheet, FDAs, purchase order, material management, quote management, generate various kind of reports and more. 
              </p>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Partnership Models : </b>&nbsp; Dedicated Team 
                </p>
                <div className="text-secondary case-study-technology technologies">
                  <b>Technologies :</b>
                  <div>Laravel</div> <div>MySQL</div>
                  <div>AWS</div> <div>JavaScript</div>
                  <div>Twitter Bootstrap</div> 
                </div>
              </div>
              <div className="d-flex flex-row w-100">
                <Link href="/fence-force-case-study" className="btn free_Quote_btn case-study-btn btn-lg">
                  View Case Study
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center image-container">
             <Image src="/images/fence.webp" alt="fence" className="service_img image" layout="fill"  />
            </div>
          </div>
          <div className="row align-items-center mt-4 ">
            <div className="col-md-6 col-xl-6 order-md-2">
              <h4 className="text-danger font-weight-bold">Case Studies</h4>
              <h2>
                <b>EasyHire.io </b>
              </h2>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Category:</b>&nbsp;  HRM Tool 
                </p>
                <p className="text-secondary case-study-technology">
                  <b>Distribution model: </b>&nbsp;  Multitenant Membership   
                </p>
              </div>
              <p className="text-secondary">
              EasyHire is the leading HR software solution to find, screen, interview, background check, hire, and manage employees & contractors. Here you can post and manage job listings across the leading job boards, including Indeed, LinkedIn and Google. Also, embed a careers page and job form directly on your website. Receive and store job applications in one platform. Connect your calendar account to start scheduling interviews. Run a background check and more. 
              </p>
              <div className="mt-3">
                <p className="text-secondary">
                  <b>Partnership Models : </b>&nbsp; Team Augmentation 
                </p>
                <div className="text-secondary case-study-technology technologies">
                  <b>Technologies :</b>
                  <div>Laravel</div> <div>MySQL</div>
                  <div>AWS</div> <div>PHP</div>
                  <div>Twitter Bootstrap</div> <div>Vue.js</div> <div>Veutify</div>
                </div>
              </div>
              <div className="d-flex flex-row w-100 mb-3">
                <Link href="/easy-hire-case-study" className="btn free_Quote_btn case-study-btn btn-lg">
                  View Case Study
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center image-container">
            <Image src="/images/easyhire-io.webp" alt="easyhire-io" className="service_img image" layout="fill" />
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
}

export default CaseStudy;
