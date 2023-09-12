import React,{useState, useEffect} from 'react'
import Head from 'next/head'
import ContactTest from '../components/home/Contact';
import CaseStudy from '../components/home/CaseStudy';
import Template from "../components/common/Template";
import Faq from "../components/common/Faq";
import { useRouter } from 'next/router'

function BackendDevelopmentService() { 

    const router = useRouter();
    const [ogUrl, setOgUrl] = useState("");

    useEffect(() => {
        const host = window.location.host;
        const baseUrl = `https://${host}`;

        setOgUrl(`${baseUrl}${router.pathname}`);
    }, [router.pathname]);

    const Faqs = [
        {
          que : 'What is the best scripting language for Back-end development?',
          ans : 'Each project requires its own combination of back-end technology. As a result, no universal back-end languages exist. JavaScript, PHP, Python, and other programming languages are among the most popular choices for server-side development. We integrate your project with the most appropriate technology stacks, regardless of language, to enable faster development, expansion opportunities, and application responsiveness. '
        },
        {
          que : 'What is the function of the back end?  ',
          ans : 'Server-side is required for data storage and management, app hosting, and better security. It also talks with the frontend to ensure that the data is shown correctly.'
        }
      ];

  return (
    <>
        <Head>
            <title>Backend Development Services - Softgetix</title>
            <meta name="description" content="Softgetix is a leading provider for backend development, backend developers ensure the website performs correctly, hire dedicated developer" />
            <link rel="canonical" href={ogUrl}></link>
        </Head>
        <Template>
        <section id="staff_banner" className="custom_software_development_section1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-xs-12 dedicated_team_section5">
                        <div className="staff_title">
                            <h1><b className="orange-text">Back End </b><br/>Development Company</h1>
                        </div>
                        <div className="staff_row_details">
                            <p>Softgetix Inc. is an entire software and back end development firm with a history of success. Our back-end development team builds high-performance, safeguard solutions for each client. With reliable back-end code, you can unlock your digital core transformation.</p>
                        </div>
                        <div className="banner_buttons">
                            <a href="/hiring/team" className="btn free_Quote_btn btn-lg mt-3"><b>Find Your Perfect Developers</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="custom_software_development_section2 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="font-weight-bold text-center staff-heading">Back End Development <b className="orange-text">Services</b> We Provide</h2>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values_benefits'>
                            <h4 className="benefits-item-title title-sub">Web Applications</h4>
                            <p className="text">Use our backend services for web development to ensure that your website runs smoothly and efficiently. Our Professional web developers will offer better performance management with enhanced stability, whether it's a complex system, website, or Smart infrastructures.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values_benefits'>
                            <h4 className="benefits-item-title title-sub">Custom Development</h4>
                            <p className="text">Seeking a Back-end company to help you put your business idea into practice? Please feel free to contact us if you require a customized back-end infrastructure. Upgrade, improve, or migrate your Back-end quickly and affordably.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values_benefits'>
                            <h4 className="benefits-item-title title-sub">API Development and Integration</h4>
                            <p className="text">We may create a bespoke API to improve your current software or integrate it into third-party services. So that you can easily integrate your UI/UX with other apps, devices and corporate systems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="custom_software_development_section5 mt-5">
            <div className="container pb-3">
                <div className="row">
                <div className="col-md-12">
                <h2 className="font-weight-bold text-center staff-heading"><b className="orange-text">Benefits </b>of our Back End Development Services</h2>
                </div>
                <div className="col-md-12 dedicated_team_section2">
                    <div className="row">
                        <div className="col-12 csd_project_values">
                            <h4 className="benefits-item-title title-sub">1. Whole Back-end Development cycle</h4>
                            <p className="text">Our back-end company offers an extensive range of software development services for website, pc, and mobile services for businesses of all sizes. Our development team handles all phases of custom production, from business analysis to post-production maintenance.</p>
                        </div>
                        <div className="col-12 csd_project_values">
                            <h4 className="benefits-item-title title-sub">2. End-to-end encryption</h4>
                            <p className="text">Our Back-end engineers stick to the most recent security protocols to ensure the safety of your software and data products. All back-end software securely transports data between system components.</p>
                        </div>
                        <div className="col-12 csd_project_values">
                            <h4 className="benefits-item-title title-sub">3. Scalability</h4>
                            <p className="text">Softgetix inc. The team provides solutions that support development in a simple and efficient manner. Scale your systems to satisfy changing requirements without sacrificing quality.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="custom_software_development_section2 mt-5 mb-5">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2 className="font-weight-bold text-center staff-heading">Our Back End Development<b className="orange-text"> Process</b></h2>
                </div>
                <div className="col-md-12 dedicated_team_section2">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values' >
                            <h4 className="benefits-item-title title-sub"><span>1</span>Send your project specifications</h4>
                            <p className="text">We begin by thoroughly examining your technological requirements and business objectives. You can email us specifications if you need to recruit a certain back-end developer.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values' >
                            <h4 className="benefits-item-title title-sub"><span>2</span>Get an estimate</h4>
                            <p className="text">Our software experts calculate the scope of work and deadlines. We match the best hires with your project requirements for outstaffing services.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values' >
                            <h4 className="benefits-item-title title-sub"><span>3</span>Choose a model of collaboration</h4>
                            <p className="text">Next we meet with you to determine the best implementation approach for you. You make the final decision based on the project's timeline, complexity, and other factors.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values' >
                            <h4 className="benefits-item-title title-sub"><span>4</span>Recruitment and development</h4>
                            <p className="text">We start the development process once you have decided on the best candidates. You are invited to monitor the progress immediately, assign tasks, and implement required changes.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values' >
                            <h4 className="benefits-item-title title-sub"><span>5</span>Supply and Maintenance</h4>
                            <p className="text">Once your solution is complete, our Q&A engineers thoroughly tests it to ensure that there are no bugs. We also provide post-production maintenance services.</p>
                        </div>
                    </div>
                </div>
                <div className="banner_buttons text-center mt-3">
                    <a href="/hiring/team" className="btn free_Quote_btn btn-lg mt-3"><b>Find Your Perfect Developers</b></a>
                </div>
                </div>
            </div>
            </div>
        </section>

        <Faq faqs={Faqs} /> 

        <CaseStudy />

        <ContactTest /> 
        </Template>
       
    </>
  )
}

export default BackendDevelopmentService
