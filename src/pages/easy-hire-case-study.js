import React,{useState, useEffect} from 'react';
import ContactTest from "../components/home/Contact";
import Image from 'next/image'
import Head from 'next/head'
import Template from "../components/common/Template";
import { useRouter } from 'next/router'

function EasyHireCaseStudy() {
    const router = useRouter();
    const [ogUrl, setOgUrl] = useState("");
  
    useEffect(() => {
      const host = window.location.host;
      const baseUrl = `https://${host}`;
  
      setOgUrl(`${baseUrl}${router.pathname}`);
    }, [router.pathname]);

    return (
    <>
    <Head>
        <title>Easy Hire Case Study - Softgetix 2023</title>
        <meta name="description" content="EasyHire is the top HR software solution for finding, screening, interviewing, checking the background of candidates, hiring, and managing workers." />
        <link rel="canonical" href={ogUrl}></link>
    </Head>
    <Template>
      <section id="staff_banner" className="case-study-single-page">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12">
                      <div className="staff_title">
                          <h4 className="text-danger font-weight-bold">Case Studies</h4>
                          <h1>EasyHire.io <b className="orange-text"></b><br/> </h1>
                      </div> 
                      <div className="staff_row_details">
                          <p>EasyHire is the leading HR software solution to find, screen, interview, background check, hire, and manage employees & contractors. Here you can post and manage job listings across the leading job boards, including Indeed, LinkedIn and Google. Also, embed a careers page and job form directly on your website. Receive and store job applications in one platform. Connect your calendar account to start scheduling interviews. Run a background check and more. </p>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                      <div className="image-container" >
                         <Image src="/images/easyhire-io.webp" alt="easyhire-io" width="540" height="540" className="image" />
                      </div>
                  </div>
              </div>
          </div>
          </section>
          <section className="project-body overview">
          <div className="page-wr">
              <div className="overview-table-wr">
                  <div className="overview-table-1row">
                      <h2 className="heading-2">Overview</h2>
                  </div>
                  <div className="table-row">
                      <div id="w-node-_119e925f-ea03-fc81-e594-fc57494e5104-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">Client</p>
                      </div>
                      <div id="w-node-c44fe9d7-5d9e-1807-abce-f6a80beca846-4261fc96" className="table-row-inner last">
                      <p className="paragraph">USA-based HRM company</p>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-_524cbf54-4d33-95be-cd01-1e496035afa1-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">scope of work</p>
                      </div>
                      <div id="w-node-_524cbf54-4d33-95be-cd01-1e496035afa4-4261fc96" className="table-row-inner last">
                      <ul role="list" className="list-bullets">
                          <li>
                              <p className="paragraph">Create Design Mockup and WireFraming </p>
                          </li>
                          <li>
                              <p className="paragraph">Frontend(UI/UX) development. </p>
                          </li>
                          <li>
                              <p className="paragraph">Web App Development </p>
                          </li>
                          <li>
                              <p className="paragraph">Database Development </p>
                          </li>
                          <li>
                              <p className="paragraph">	Membership Management</p>
                          </li>
                          <li>
                              <p className="paragraph"> Project Management </p> 
                          </li>
                          <li>
                              <p className="paragraph"> QA Service  </p>
                          </li>
                      </ul>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-_4ad4f043-b976-dcdb-4f2b-461841773c86-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">TIMEframe</p>
                      </div>
                      <div id="w-node-_4ad4f043-b976-dcdb-4f2b-461841773c89-4261fc96" className="table-row-inner last">
                      <div className="timeframe-number">
                          <Image src="/icons/calendar.webp" className="numbers-icon mod" alt="calendar" width="53" height="47" />
                          <div className="text-med">18</div>
                          <p>months</p>
                      </div>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf0-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">Involvement</p>
                      </div>
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf3-4261fc96" className="table-row-inner last">
                            <div className="timeframe-number">
                                <Image src="/icons/people.webp" className="numbers-icon mod" alt="people" width="53" height="47" />
                                <div className="text-med">5</div>
                                <p>people</p>
                            </div>
                            <ul role="list" className="list-bullets">
                                <li><p className="paragraph">Web Developer - 2</p></li>
                                <li><p className="paragraph">UX/UI designer - 1 </p></li>
                                <li><p className="paragraph">	Project Manager - 1 </p></li>	
                                <li><p className="paragraph">	QA - 1    </p></li>
                            </ul>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf0-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">challenge</p>
                      </div>
                      <div id="w-node-_5638bb5b-e21b-b64f-00e1-3dec5cae44f5-4261fc96" className="table-row-inner last xpadding">
                      <ul role="list" className="list-bullets">
                          <li>
                              <p className="paragraph">Built with robust features for data analytics, workflow automation, and employee engagement functions.
                                </p>
                          </li>
                          <li>
                              <p className="paragraph">Design with analytics visualization, performance metrics dashboards, and executive dashboards. 
                            </p>
                          </li>
                          <li>
                              <p className="paragraph">Create tools to reduce the administrative burden on HR teams.</p>
                          </li>
                          <li>
                              <p className="paragraph">	Designing a scalable multi-tenancy architecture.</p>
                          </li>
                          <li>
                              <p className="paragraph">	Integrate preconfigured state, county, and national labour law information systems. </p>
                          </li>
                      </ul>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf0-4261fc96" className="table-row-inner">
                      <p className="paragraph uppercase">Approach</p>
                      </div>
                      <div id="w-node-_50011341-4e33-8111-babc-7e992a25db01-4261fc96" className="table-row-inner last xpadding">
                      <ul role="list" className="list-bullets">
                          <li>
                              <p className="paragraph">Our team did an in-depth analysis of the requirements, competitors and industry to create an actionable wireframe. 
                            </p>
                          </li>
                          <li>
                              <p className="paragraph">To portray the client`&apos;`s expectations in the right way we created a PSD mockup. </p>
                          </li>
                          <li>
                              <p className="paragraph">	We designed custom architecture and database schema. </p>
                          </li>
                          <li>
                              <p className="paragraph">	Involved the QA team before starting development and creating test cases. </p>
                          </li>
                          <li>
                              <p className="paragraph">	The team used project management and subversion tools from the starting day. </p>
                          </li>
                      </ul>
                      </div>
                  </div>
                  <div className="table-row">
                      <div id="w-node-f7358d70-348f-c725-b91f-ef26db45daf0-4261fc96" className="table-row-inner table-row-inner-last">
                      <p className="paragraph uppercase">Results</p>
                      </div>
                      <div id="w-node-_0945b844-163e-7cb0-5daf-de99d951a679-4261fc96" className="table-row-inner last xpadding table-row-inner-last">
                        <ul role="list" className="list-bullets">
                            <li>
                                <p className="paragraph">The Beta version is launched before the deadline and within budget. The client is going for the next round of funding.  
                                </p>
                            </li>
                            <li>
                                <p className="paragraph">	Development: 2.5X Faster </p>
                            </li>
                            <li>
                                <p className="paragraph">	Cost Saving: 40%  </p>
                            </li>
                        </ul>
                        </div>
                  </div>
              </div>
          </div>
          </section>
      <ContactTest />
      </Template>
     </>
  )
}

export default EasyHireCaseStudy
