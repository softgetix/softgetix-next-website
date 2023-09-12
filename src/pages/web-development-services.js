
import React,{useState, useEffect} from 'react';
import Head from 'next/head'
import ContactTest from '../components/home/Contact';
import CaseStudy from '../components/home/CaseStudy';
import Template from "../components/common/Template";
import Faq from "../components/common/Faq";
import { useRouter } from 'next/router'

function WebDevelopmentService() { 

    const router = useRouter();
    const [ogUrl, setOgUrl] = useState("");

    useEffect(() => {
        const host = window.location.host;
        const baseUrl = `https://${host}`;

        setOgUrl(`${baseUrl}${router.pathname}`);
    }, [router.pathname]);

    const Faqs = [
        {
          que : 'Which web development services do we provide?',
          ans : 'Our website development company provides complete professional web design services based on a wide range of experience. We assist global companies in developing responsive websites and accessible web applications, systems for managing content and e-commerce solutions, AI-based technology, and analytic tools. For a detailed list of services, please feel free to contact our professionals. '
        },
        {
          que : 'What circumstances are required for expert website development services?  ',
          ans : 'If you want to develop a web application or new an existing one too but have in-house skills or corporate expertise, you need to hire a professional website development services company that offers web development services. When you have any questions, you should ideally talk with an expert web provider.'
        }
      ];

  return (
    <>
     <Head>
        <title>Web Development Services - Softgetix</title>
        <meta name="description" content="Softgetix is a leading provider for web development, Website design, development, and upkeep are collectively referred to as web development." />
        <link rel="canonical" href={ogUrl}></link>
    </Head>
    <Template>
        <section id="staff_banner" className="custom_software_development_section1">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12 dedicated_team_section5">
                    <div className="staff_title">
                        <h1><b className="orange-text">Web Development </b><br/>Company</h1>
                    </div>
                    <div className="staff_row_details">
                        <p>Welcome to softgetix Inc., your virtual landscape's ultimate web development company. We provide unique and prospective solutions to help your business develop.</p>
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
                        <h2 className="font-weight-bold text-center staff-heading">We Offer Professional<b className="orange-text"> Web Development </b>Services</h2>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values_benefits'>
                            <h4 className="benefits-item-title title-sub">Full-stack web development services</h4>
                            <p className="text">We provide a wide range of professional web development services with a balanced approach as an experienced web development company. Our developers cover each scenario and technology stack.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values_benefits'>
                            <h4 className="benefits-item-title title-sub">Custom web applications</h4>
                            <p className="text">Looking for a customized technological touch? Our expert website development firm will translate your organization's goals into a customized web platform with a special mix of features and technology.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values_benefits'>
                            <h4 className="benefits-item-title title-sub">Web support and maintenance</h4>
                            <p className="text">Your web products get maintenance from our professional web development service to keep them updated. We provide strong security, backups, software updates, and include the most recent features.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values_benefits'>
                            <h4 className="benefits-item-title title-sub">Web Development Services</h4>
                            <p className="text">Searching for a great website with a modern, functional structure? As a reputable website development business, we focus on developing cutting-edge websites that effectively convey your marketing messages.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values_benefits'>
                            <h4 className="benefits-item-title title-sub">Website design and re-design</h4>
                            <p className="text">Use our professional website development services to give company web presence a fresh appearance and feel. With our UI/UX audit, security improvements, and website performance, you can generate more visitors and leads.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="custom_software_development_section5 mt-5">
            <div className="container pb-3">
                <div className="row">
                <div className="col-md-12">
                <h2 className="font-weight-bold text-center staff-heading"><b className="orange-text">Benefits </b>of our Web Development Services</h2>
                </div>
                
                <div className="col-md-12 dedicated_team_section2">
                <div className="row">
                    <div className="col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub">1. Robust Front-end and Back-end</h4>
                        <p className="text">Our experienced website development firm ensures that your solution is wrapped in a performant interface with quick load times and attractive UX design. To provide user-friendly experiences, we balance the UI with business logic. The best website solution is based on scalable architecture. Our back-end experts will provide an API-friendly back-end with advanced data structures and flexible processing capabilities.</p>
                    </div>
                    <div className="col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub">2. Technical assistance</h4>
                        <p className="text">We take care of your online services as part of our effective professional website development services, ensuring their continuous operation. Our developers make sure that you get the latest features and security updates.</p>
                    </div>
                    <div className="col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub">3. Different Expertise</h4>
                        <p className="text">As a custom web development company, we provide a variety of technologies to produce outstanding web assets.</p>
                    </div>
                    <div className="col-12 csd_project_values">
                        <h4 className="benefits-item-title title-sub">4. Security</h4>
                        <p className="text">We emphasize security as one of the pillars of effective digital transformation. As a result, we design with security in mind, focusing on authentication and authorization services, access control, and other features.</p>
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
                <h2 className="font-weight-bold text-center staff-heading">Our Professional <b className="orange-text">Web Development </b>Process</h2>
                </div>
               
                <div className="col-md-12 dedicated_team_section2">
                <div className="row">
                    <div className="col-md-6 col-12 ">
                        <div className='csd_project_values'>
                            <h4 className="benefits-item-title title-sub"><span>1</span>Discovery</h4>
                            <p className="text">We start by reviewing your company requirements and planning your project. We define the challenge and the scope of your solution, as well as the main functionality and milestones.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values'>
                            <h4 className="benefits-item-title title-sub"><span>2</span>Design and development</h4>
                            <p className="text">We discuss the project's requirements here, such as interfaces, network specifications, database, and so on. The application is then developed by our developers in accordance with the design requirements.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values'>
                            <h4 className="benefits-item-title title-sub"><span>3</span>Testing</h4>
                            <p className="text">Our top QA engineers ensure that the end-user experience is flawless and bug-free. We do comprehensive examination, which includes front-end, database, and server testing, as well as additional inspections.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values'>
                            <h4 className="benefits-item-title title-sub"><span>4</span>Implementation</h4>
                            <p className="text">After that, our developers incorporate a bug-free system into its domain. After that, the solution is market-ready and available to end users.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='csd_project_values'>
                            <h4 className="benefits-item-title title-sub"><span>5</span>Maintenance</h4>
                            <p className="text">Once your solution is available, our developers will evaluate its efficiency and integrate user input for future improvements. We also make any necessary changes after deployment.</p>
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

export default WebDevelopmentService
