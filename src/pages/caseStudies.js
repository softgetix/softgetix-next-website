import React,{useState, useEffect} from 'react';
import FreeQuote from '../components/common_components/FreeQuote';
import Link from 'next/link'
import Template from "../components/common/Template";
import { useRouter } from 'next/router'

function CaseStudies() {

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
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href={ogUrl}></link>
    </Head>
    <Template>
    <section className="services">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                    <h2 className="heading-section">All Case Studies</h2>
                </div>
            </div>
            </div>
        </section>
        <section className="all_services" id="case-study">
        <div className="container">
            <div className="row align-items-center mt-5 pt-3 pb-3">
            <div className="col-md-6 col-xl-6 order-md-2">
                <h4 className="text-danger font-weight-bold">Case Studies</h4>
                <h2><b>Fence Construction ERP</b></h2>
                <p className="text-secondary">FenceForce is all-in-one fence construction management software application that helps firms increase their project efficiency and accountability by providing streamlined project communication and documentation. Users are able to manage their projects from any web-connected mobile device, tablet, laptop, or desktop.</p>
                <div className="mt-3">
                <p className="text-secondary"><b>Partnership Models : </b>&nbsp; IT staff augmentation, Dedicated team model</p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>hello</span> <span>hello</span> <span>hello</span>
                </p>
                </div>
                <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link href="/CaseStudySinglePage" className="btn free_Quote_btn btn-lg">View Case Study</Link>
                </div>
            </div>
            <div className="col-md-6 col-xl-6 text-center">
                <img src="images/fence.webp" alt="" className="service_img" width="100%"/>
            </div>
            </div>
            <div className="row align-items-center mt-5 pt-3 pb-3">
            <div className="col-md-6 col-xl-6">
                <h4 className="text-danger font-weight-bold">Case Studies</h4>
                <h2><b>Business Automation Software</b></h2>
                <p className="text-secondary">Tracker Core offers advanced level project management features with a simple-to-use interface that requires no training for teams and no expensive consultant onboarding costs. Tracker Core is used by IT, marketing, manufacturing and professional services teams across industries to collaborate on projects across the organization.</p>
                <div className="mt-3">
                <p className="text-secondary"><b>Partnership Models : </b>&nbsp; IT staff augmentation, Dedicated team model</p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>hello</span> <span>hello</span> <span>hello</span>
                </p>
                </div>
                <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link href="" className="btn free_Quote_btn btn-lg">View Case Study</Link>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
                <img src="images/tracker-core.webp" alt="" className="service_img" width="100%"/>
            </div>
            </div>
            <div className="row align-items-center mt-5 pt-3 pb-3">
            <div className="col-md-6 col-xl-6 order-md-2">
                <h4 className="text-danger font-weight-bold">Case Studies</h4>
                <h2><b>Real Estate CRM</b></h2>
                <p className="text-secondary">This is a cloud-based global real estate platform suitable for real estate brokerages, enterprises and teams of all sizes. This allows users to manage leads and contacts via lead routing, drip campaigns and other automated processes. It integrates with multiple applications like Dropbox, Quickbook and DocuSign.</p>
                <div className="mt-3">
                <p className="text-secondary"><b>Partnership Models : </b>&nbsp; IT staff augmentation, Dedicated team model</p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>hello</span> <span>hello</span> <span>hello</span>
                </p>
                </div>
                <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link href="" className="btn free_Quote_btn btn-lg">View Case Study</Link>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
                <img src="images/fence-erp.webp" alt="" className="service_img" width="100%"/>
            </div>
            </div>


            <div className="row align-items-center mt-5 pt-3 pb-3">
            <div className="col-md-6 col-xl-6">
                <h4 className="text-danger font-weight-bold">Case Studies</h4>
                <h2><b>Real Estate Project Management</b></h2>
                <p className="text-secondary">This is a construction project management software used by residential construction professionals such as homebuilders, custom builders, specialty contractors, and remodelers. It offers construction companies a cloud-based solution to empower them in taking more projects, minimizing costly errors, and accelerating project completion to boost customer satisfaction.</p>
                <div className="mt-3">
                <p className="text-secondary"><b>Partnership Models : </b>&nbsp; IT staff augmentation, Dedicated team model</p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>hello</span> <span>hello</span> <span>hello</span>
                </p>
                </div>
                <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link href="" className="btn free_Quote_btn btn-lg">View Case Study</Link>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
                <img src="images/dashboard.webp" alt="" className="service_img" width="100%"/>
            </div>
            </div>
            <div className="row align-items-center mt-5 pt-3 pb-3">
            <div className="col-md-6 col-xl-6 order-md-2">
                <h4 className="text-danger font-weight-bold">Case Studies</h4>
                <h2><b>Document Management Software</b></h2>
                <p className="text-secondary">It is designed to help businesses manage, organize, and track in documents and information. This host of features bound to benefit any organization such as mobile optimization, version control, e-signature support, document templates, offline access, permission control and automated workflows.</p>
                <div className="mt-3">
                <p className="text-secondary"><b>Partnership Models : </b>&nbsp; IT staff augmentation, Dedicated team model</p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>hello</span> <span>hello</span> <span>hello</span>
                </p>
                </div>
                <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link href="" className="btn free_Quote_btn btn-lg">View Case Study</Link>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
                <img src="images/document-management.webp" alt="" className="service_img" width="100%"/>
            </div>
            </div>
            <div className="row align-items-center mt-5 pt-3 pb-3">
            <div className="col-md-6 col-xl-6">
                <h4 className="text-danger font-weight-bold">Case Studies</h4>
                <h2><b>Crypto Exchange</b></h2>
                <p className="text-secondary">This is a crypto exchange indicator that works on any market, assets, and timeframes simultaneously, offering multi-resolution trend analysis, entry/exit points alert, possible direction change warnings, 20 indicator consensus confirmations, price prediction clouds and more with extensive fine-tuning options.
                </p>
                <div className="mt-3">
                <p className="text-secondary"><b>Partnership Models : </b>&nbsp; IT staff augmentation, Dedicated team model</p>
                <p className="text-secondary case-study-technology">
                  <b>Technologies : </b>&nbsp; <span>hello</span> <span>hello</span> <span>hello</span>
                </p>
                </div>
                <div className="d-flex flex-row w-100 mt-3 mb-3">
                <Link href="" className="btn free_Quote_btn btn-lg">View Case Study</Link>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
                <img src="images/crypto-exchange.webp" alt="" className="service_img" width="100%"/>
            </div>
            </div>  
        </div>
        </section>
        <FreeQuote />
    </Template>
       
    </>
  )
}

export default CaseStudies
