import React,{useState, useEffect} from 'react';
import ContactTest from "../components/home/Contact";
import Image from 'next/image'
import Template from "../components/common/Template";
import Head from 'next/head'
import { useRouter } from 'next/router'

function SalesDaasCaseStudy() {
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
        <title>Sales Daas Case Study - Softgetix 2023</title>
        <meta name="description" content="A third-party cloud-based platform called Sales Data as a Service enables businesses to outsource their data collecting and analysis sales success." />
        <link rel="canonical" href={ogUrl}></link>
    </Head>
    <Template>
       <section id="staff_banner" className="case-study-single-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="staff_title">
                            <h4 className="text-danger font-weight-bold">Case Studies</h4>
                            <h1>SalesDaas.ai <b className="orange-text"></b><br/> </h1>
                        </div> 
                        <div className="staff_row_details">
                            <p>Sales Data as a Service (DaaS) enables companies to outsource their data collection and analysis to a third-party cloud-based tool to gather sales data and gauge sales performance. It is used to identify, optimize, and forecast sales. It uses different metrics and KPIs to plan an efficient sales model that generates higher revenue for the business. Sales DaaS gives companies the ability to gain access to the data and sales insights they need within a matter of a few simple clicks. </p>  
                            <p>Sales DaaS tools enable companies to take a no-code approach to data collection means companies no longer need to spend massive amounts of time on their data collection operations and no longer need in-house database management infrastructure and dedicated database engineers & DevOps teams.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="image-container" >
                            <Image className="image" src="/images/salesdaas-io.webp" alt="salesdaas-io" width="540" height="540" />
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
                        <p className="paragraph">Sales Analytics and Data as a Service Company.</p>
                        </div>
                    </div>
                    <div className="table-row">
                        <div id="w-node-_524cbf54-4d33-95be-cd01-1e496035afa1-4261fc96" className="table-row-inner">
                        <p className="paragraph uppercase">scope of work</p>
                        </div>
                        <div id="w-node-_524cbf54-4d33-95be-cd01-1e496035afa4-4261fc96" className="table-row-inner last">
                        <ul role="list" className="list-bullets">
                            <li>
                                <p className="paragraph">Data Analytics and Consulting </p>
                            </li>
                            <li>
                                <p className="paragraph">DevOps Engineering </p>
                            </li>
                            <li>
                                <p className="paragraph">Cloud Migration Services </p>
                            </li>
                            <li>
                                <p className="paragraph">Microservices Architecture & Development</p>
                            </li>
                            <li>
                                <p className="paragraph">Backend Development</p>
                            </li>
                            <li>
                                <p className="paragraph">Web App Development</p>
                            </li>
                            <li>
                                <p className="paragraph">Product UI/UX Design</p>
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
                            <div className="text-med">33</div>
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
                                <div className="text-med">9</div>
                                <p>people</p>
                            </div>
                            <ul role="list" className="list-bullets">
                                <li><p className="paragraph">Database Architect/Engineer - 3 </p></li>
                                <li><p className="paragraph">Backend Web Developer - 2  </p></li>
                                <li><p className="paragraph">UX/UI designer - 1  </p></li>	
                                <li><p className="paragraph">Project Manager - 1  </p></li>
                                <li><p className="paragraph">Business Analyst - 1</p></li>
                                <li><p className="paragraph">QA - 1  </p></li>
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
                                <p className="paragraph">Holistic data analysis from multiple siloed sources and various structured and unstructured data formats
                                </p>
                            </li>
                            <li>
                                <p className="paragraph">Business intelligence solution for real-time smart reporting and analytics</p>
                            </li>
                            <li>
                                <p className="paragraph">Architect a scalable and optimized data solution</p>
                            </li>
                            <li>
                                <p className="paragraph">Updating the data to run dynamic queries</p>
                            </li>
                            <li>
                                <p className="paragraph">Handling frequent and heavy data flows</p>
                            </li>
                            <li>
                                <p className="paragraph">Integration with multiple services</p>
                            </li>
                            <li>
                                <p className="paragraph">Changing data regulations</p>
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
                                <p className="paragraph">Data warehousing followed by microservices architecture. </p>
                            </li>
                            <li>
                                <p className="paragraph">Enabled a service mesh layer, load balancing, and automated container deployment and management.
                                </p>
                            </li>
                            <li>
                                <p className="paragraph">Established a lean product development process with integrated tailored Agile/Scrum. </p>
                            </li>
                            <li>
                                <p className="paragraph">Applied IMAAT (Integrated Manual and Automated Testing) approach. </p>
                            </li>
                            <li>
                                <p className="paragraph">Designing a data-centric User Experience </p>
                            </li>
                            <li>
                                <p className="paragraph">Set up business dashboards using BI. </p>
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
                                    <p className="paragraph">The Beta version is launched before the deadline and within budget.   </p>
                                </li>
                                <li>
                                    <p className="paragraph">Development: 1.5X Faster </p>
                                </li>
                                <li>
                                    <p className="paragraph">	Cost Saving: 30%  </p>
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

export default SalesDaasCaseStudy
