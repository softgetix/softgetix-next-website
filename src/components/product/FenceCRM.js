import React from 'react';
import Template from '../common/Template';
import Link from 'next/link'
import ContactTest from '../home/Contact';
import Faq from '../common/Faq';

function FenceCRM() {
  return (
    <>
    
      <Template>
        <section id="fenceCRM">
            <div id="product-page">
                <div className="product-banner mt-4">
                <div className="container">
                    <div className="title text-center">
                        <img className="img-center img-src" src="fenceCRM_imgs/images/fence-crm-logo.png" alt=""/>
                        <h3 className="mt-5">
                            <img src="fenceCRM_imgs/images/fence-crm-logo.png" className="img-src" alt=""/> 
                            <span className="d-none">FenceERP</span> The All-In-One Fence Construction Management Software.
                        </h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-6 order-md-12 mt-5">
                            <img className="img-fluid img-src" src="fenceCRM_imgs/images/fence-crm-banner.png" alt=""/>
                        </div>
                        <div className="col-md-12 mt-5">
                            <h3>Your business needs software to manage your enterprise.</h3>
                            <p className="info">FenceForce allows you to automate, track, analyze, improve and engage with your workforce to maximize your business efficiency.</p>
                        </div>
                        <div className="col-sm-10 col-md-6 order-md-1 mt-5">
                            <div id="carouselExampleIndicators" className="carousel slide-fade" data-bs-ride="carousel" data-bs-pause="true">
                            <div className="carousel-indicators">
                                <div id="btn-one">
                                    Collaboration
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-href="0" className="active" aria-current="true" aria-label="Slide 1">
                                    <span></span>
                                    </button>
                                </div>
                                <div id="btn-two">
                                    CRM
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-href="1" aria-label="Slide 2">
                                    <span></span>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <ul className="cr-list">
                                        <li><a>Leads, Deals, Contacts, Companies</a></li>
                                        <li><a>Quotes, Invoices</a></li>
                                        <li><a>Online payments</a></li>
                                        <li><a>Sales automation</a></li>
                                        <li><a>Rules and triggers</a></li>
                                        <li><a>Contact center</a></li>
                                        <li><a>Marketing</a></li>
                                        <li><a>Sales Intelligence</a></li>
                                    </ul>
                                </div>
                                <div className="carousel-item">
                                    <ul className="cr-list">
                                        <li><a>Chats & video calls</a></li>
                                        <li><a>Online meetings</a></li>
                                        <li><a>Feed</a></li>
                                        <li><a>Calender</a></li>
                                        <li><a>Online documents</a></li>
                                        <li><a>Drive</a></li>
                                        <li><a>Webmail</a></li>
                                        <li><a>Work Group</a></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            <Link href="#" className="btn free_Quote_btn btn-lg mt-3"> <span> Talk To Sales </span> </Link>
                        </div>
                    </div>
                </div>
                </div>
                <div id="features" className="container text-center py-5">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/business-management.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/business-management-hover.png" alt=""/>
                        <h3>Business Management</h3>
                        <p>As a business owner, you need realtime specifics on your business performance. The ability to determine business metrics such as at a glance profitability will help guide you to make critical decisions for your business.</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/resource-tracking.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/resource-tracking-hover.png" alt=""/>
                        <h3>Resource Tracking</h3>
                        <p>Tracking elements of your enterprise; Employees, Vehicles, Tools and more provide you unparalleled realtime specifics on your business performance. Determine not only where a crew is located but also what they’re doing.</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/advanced-reporting.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/advanced-reporting-hover.png" alt=""/>
                        <h3>Advanced Reporting</h3>
                        <p>Reports once meant loud clacking printers generating reams of paper. We don’t need to kill trees to have a comprehensive view on your Enterprise Resources!</p>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/business-management.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/business-management-hover.png" alt=""/>
                        <h3>Business Management</h3>
                        <p>As a business owner, you need realtime specifics on your business performance. The ability to determine business metrics such as at a glance profitability will help guide you to make critical decisions for your business.</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/resource-tracking.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/resource-tracking-hover.png" alt=""/>
                        <h3>Resource Tracking</h3>
                        <p>Tracking elements of your enterprise; Employees, Vehicles, Tools and more provide you unparalleled realtime specifics on your business performance. Determine not only where a crew is located but also what they’re doing.</p>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 cards">
                        <img className="regular" src="fenceCRM_imgs/images/advanced-reporting.png" alt=""/>
                        <img className="hover" src="fenceCRM_imgs/images/advanced-reporting-hover.png" alt=""/>
                        <h3>Advanced Reporting</h3>
                        <p>Reports once meant loud clacking printers generating reams of paper. We don’t need to kill trees to have a comprehensive view on your Enterprise Resources!</p>
                    </div>
                </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="heading">Lorem Ipsum Dolor sit Amet</h2>
                            <p className="heading">It is a long established fact that a reader will be distracted by the readable content </p>
                        </div>	
                    </div>
                </div>
                <div className="container text-center mt-5">
                <div className="row">
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img src="fenceCRM_imgs/images/fence-crm-coins.png" width="80%" alt=""/>
                                <p>LOREM ISPSUM LOREM</p>
                            </div>
                        </div>
                    </div>
                </div>
              
                <Faq></Faq>
                <br/><br/><br/>
            </div>
        </section>

        <ContactTest />
        
      </Template>
    </>
  )
}

export default FenceCRM
