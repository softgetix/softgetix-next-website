import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import ContactTest from '../components/home/Contact'
import PricingPlan from './pricingPlan'
import Faq from "../components/common/Faq";
import Template from "../components/common/Template";
import BrandImages from '../components/common/BrandImages';
import { useRouter } from 'next/router'

function Staffing() {
    const router = useRouter();
    const [ogUrl, setOgUrl] = useState("");
    const resourceSection = React.useRef();
    const ContactSection = React.useRef("");

    useEffect(() => {
        const host = window.location.host;
        const baseUrl = `https://${host}`;

        setOgUrl(`${baseUrl}${router.pathname}`);
    }, [router.pathname]);


    function smoothScroll(target) {
        const { top } = target.getBoundingClientRect()
        console.log(top);
        window.scrollTo({
            top: top + window.pageYOffset,
            behavior: "smooth"
        });
    }
    const Faqs = [
        {
            que: 'What is IT staff augmentation?',
            ans: 'IT staff augmentation is a type of outsourcing model where the company provides highly skilled IT employees. On a contract basis, they can work from the office or remotely. '
        },
        {
            que: 'What is IT Staff Augmentation, Why you need it?  ',
            ans: 'There is a growing demand for qualified software developers and other IT experts. This was mostly due to the global epidemic, and as a result, more and more companies are using the internet.'
        },
        {
            que: 'What is Staff Augmentation? Which company provides the best IT staff augmentation services in the USA?',
            ans: 'Finding a contractor who takes the time to understand their clients unique staffing needs should be the very first goal whenever a corporation decides to onboard any augmented workers or create a remote solid engineering team.'
        },
        {
            que: 'What is staff augmentation service?',
            ans: 'The terms "outsourcing" and "IT staff augmentation" sometimes cause us confusion. But first, allow me to briefly describe staff augmentation services and how you might use them for your team.'
        },
        {
            que: 'Which is the best IT staff augmentation company in US?',
            ans: 'Attending industry events, connecting with other IT professionals, and getting in touch with businesses that might require your kind of services are good places to start'
        },
        {
            que: 'What does staff augmentation mean for businesses?',
            ans: 'Some business professionals think that because the phrase "artificial intelligence" is so closely associated with popular culture, people have unrealistic concerns about it and inaccurate expectations about how it will affect their daily lives.'
        }
    ];

    return (
        <>
            <Head>
                <title>IT Staff Augmentation Services - Softgetix 2023 </title>
                <meta name="description" content="SoftGetix is a leading IT Staff Augmentation company. Use our IT augmentation services to scale your existing team and fill necessary skill gaps."></meta>
                <meta name="keyword" content="IT staff augmentation,IT staff augmentation services,IT staff augmentation company"></meta>
                <link rel="canonical" href={ogUrl}></link>
            </Head>
            <Template>

                <section id="staff_banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-xs-12">
                                <div className="staff_title">
                                    <h1>IT Staff <b className="orange-text">Augmentation </b>Services<br /></h1>
                                </div>
                                <div className="staff_row_details">
                                    <p>Are You Looking to Add Expert IT Resources to Help Deliver Your Projects On Time and Within Budget?</p>
                                    <p>Leverage our Flexible (Easily Up-Scale and Down-Scale your team size on demand) staff augmentation services to access certified IT professionals, including skilled software developers, Web Designer, Front-end(UI/UX) Developer, Business Analysts, Scrum Masters, and QA specialists.</p>
                                </div>
                                <div className="banner_buttons">
                                    <button onClick={() => smoothScroll(resourceSection.current)} className="btn free_Quote_btn btn-lg mt-3"><b>See Available Resources</b></button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-xs-12">
                                <div className='image-container'>
                                    <Image src="/images/staff_banner_img.png" alt="staff_banner_img" className='image' width="540" height="541" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="staff-cmp">
                    <div className="container">
                        <div className="row">
                            <BrandImages />
                        </div>
                    </div>
                </section>

                <section id="staff_steps">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="font-weight-bold text-center staff-heading">Our IT Staff <b className="orange-text">Augmentation </b>Process</h2>
                            </div>
                            <div className="col-md-8 m-auto">
                                <div className="staff_row_details text-center">
                                    <p>A bench is always available for our clients to pick from and meet urgent deadlines. Here&apos;s the process you&apos;ll experience when signing a staff augmentation contract with SoftGetix:</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className='image-container'>
                                    <Image src="/images/staff_steps_img.webp" alt="staff_steps_img" className='image' layout='fill' />
                                </div>
                            </div>
                            <div className="banner_buttons m-auto">
                                <button id='staff-process-btn' onClick={() => smoothScroll(ContactSection.current)} className="btn free_Quote_btn btn-lg mt-3"><b>Discuss Your Staffing Need!</b></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="staff_steps" ref={resourceSection}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="font-weight-bold text-center staff-heading">The <b className="orange-text">Technology Stack</b> We Work With </h2>
                            </div>
                            <div className="col-md-8 m-auto">
                                <div className="sstaff_row_details text-center">
                                    <p>Every project requires a careful approach and a carefully selected technology stack to ensure that its goals are met. Check out what technologies our engineers and developers work with.</p>
                                </div>
                            </div>
                            <div className="col-md-12 mt-5">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/php.png" alt="php" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center">PHP <br />Developer</h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/PHP" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1 technology-box-row1-sm">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/laravel.png" alt="laravel" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center">Laravel Developer</h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/Laravel" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row1 technology-box-row1-sm codeigniter-sm">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/codeigniter.png" alt="codeigniter" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center">Codeigniter Developer</h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/Codeigniter" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/vueJs.png" alt="vueJs" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center">Vue.js Developer</h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/VueJs" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/wordpress.png" alt="wordpress" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center">WordPress Developer</h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/WordPress" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/react.png" alt="react" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center">React Developer</h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/React" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/reactNative.png" alt="reactNative" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center">React Native Developer</h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/ReactNative" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/manualQA.png" alt="manualQA" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center">Manual <br /> QA </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/ManualQA" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/html5.png" alt="html5" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center"> HTML5 </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/HTML5" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/nodejs.png" alt="nodejs" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center"> Node.js Developer </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/NodeJs" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/bootstrap.png" alt="bootstrap" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center"> Bootstrap </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/Bootstrap" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/tailwindCss.png" alt="tailwindCss" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center"> Tailwind <br /> CSS </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/Tailwind" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/mysql.png" alt="mysql" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center"> MySQL Developer </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/MySQL" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/mongoDB.png" alt="mongoDB" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center"> MongoDB Developer </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/MongoDB" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/postgreSQL.png" alt="postgreSQL" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center"> PostgreSQL Developer </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/PostgreSQL" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12 technology-box-row2">
                                        <div className="technology-box">
                                            <div className="technology-box-body">
                                                <div className="icon_div">
                                                    <div className="icon">
                                                        <Image src="/icons/graphicDesigner.png" alt="graphicDesigner" width="64" height="64" />
                                                    </div>
                                                </div>
                                                <div className="technology-box-heading">
                                                    <h3 className="text-center"> Graphic Designer </h3>
                                                </div>
                                                <div className="banner_buttons text-center">
                                                    <Link href="/hiring/GraphicDesigner" className="btn free_Quote_btn btn-lg mt-3"><b>Hire Now</b></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="custom_software_development_section2" id='staff_benefits'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="font-weight-bold text-center staff-heading">Benefits of <b className="orange-text">IT Staff Augmentation</b></h2>
                            </div>
                            <div className="col-md-12">
                                <div className="row text-center">
                                    <div className="col-lg-4 col-md-6 col-xs-12">
                                        <div className="csd_project_values">
                                            <div className="features_title">
                                                <h4 className='benefits-item-title title-sub'>Easily Scale-up and scale- down</h4>
                                                <p className="mt-3">With staff augmentation, you can add resources to your account for a specific duration to speed up your workflow and then scale down as per the demand.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12">
                                        <div className="csd_project_values">
                                            <div className="features_title">
                                                <h4 className='benefits-item-title title-sub'>Cost Effective</h4>
                                                <p className="mt-3">Staff augmentation helps companies save money by hiring temporary employees instead of full-time staff. They do not have to invest in recruitment, employee benefits, tax and more. Training new employees take much less time compared to training existing ones.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12">
                                        <div className="csd_project_values">
                                            <div className="features_title">
                                                <h4 className='benefits-item-title title-sub'>No Recruitment Hassles</h4>
                                                <p className="mt-3">Our IT Augmentation Services Save Your Company The Hassle Of Searching For And Recruiting Vetted Development Talent. We Take Over The Screening Process And Send You Approved CVs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12">
                                        <div className="csd_project_values">
                                            <div className="features_title">
                                                <h4 className='benefits-item-title title-sub'>Lower operational costs</h4>
                                                <p className="mt-3">Reduce your company's spending by eliminating the costs associated with office space, equipment, taxes, and overhead. Pay for what drives your company's most valuable results.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12">
                                        <div className="csd_project_values">
                                            <div className="features_title">
                                                <h4 className='benefits-item-title title-sub'>Legal Headache Gone</h4>
                                                <p className="mt-3">Within our IT augmentation services, we remain the original employers of your hires. We take care of all legal responsibilities and documentation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-xs-12">
                                        <div className="csd_project_values">
                                            <div className="features_title">
                                                <h4 className='benefits-item-title title-sub'>Access to Vetted and Certified Talent</h4>
                                                <p className="mt-3">SoftGetix offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="pricing_plan">
                    <PricingPlan />
                </section>
                <Faq faqs={Faqs} />
                <section className="contact_us" id="conthub" ref={ContactSection}>
                    <ContactTest />
                </section>
            </Template>
        </>
    )
}

export default Staffing
