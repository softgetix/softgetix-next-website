import React,{useState, useEffect} from 'react';
import Head from 'next/head'
import CaseStudy from "../components/home/CaseStudy";
import ContactTest from "../components/home/Contact";
import Image from 'next/image'
import Template from "../components/common/Template";
import Faq from "../components/common/Faq";
import { useRouter } from 'next/router'

function DedicatedTeam() {
  const router = useRouter();
  const [ogUrl, setOgUrl] = useState("");

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);

  const Faqs = [
    {
      que : 'What is a focused development team?',
      ans : 'A dedicated team is an engagement strategy that assumes the creation of a focus on various to its own structure and management. With this hiring strategy, you may selectively hire a team based on requirements, knowledge level, and budget. It is ideal for lengthy projects with hazy criteria or large internal client company initiatives if they do not have internal staff. While the administrative duties are handled by the provider, the client can directly supervise this team. '
    },
    {
      que : 'What affects your project costs  ',
      ans : 'Depending on the requirement of a project, this team structure consists of highly skilled tech experts. Web developers, QA engineers,web app developers, and UX/UI designers are all available from our organization to work only on your project. This technique is an affordable solution because it integrates technical expertise with low investment.'
    }
  ];

  return (
    <>
    <Head>
      <title>Dedicated Development Team - Softgetix</title>
      <meta name="description" content="Softgetix is a leading company with a dedicated development team to complete your work. " />
      <link rel="canonical" href={ogUrl}></link>
    </Head>
    <Template>
     
        <section id="staff_banner" className="custom_software_development_section1 dedicated_development_team" >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12 dedicated_team_section5">
                <div className="staff_title">
                  <h1>
                    Dedicated <b className="orange-text">development</b>
                    <br /> team
                  </h1>
                </div>
                <div className="staff_row_details">
                  <p>
                    We provide dedicated teams of developers, User interface
                    designers, and software testers in addition to mixed teams
                    made up of various IT specialists.
                  </p>
                  <p>
                    To improve your project development, work with a dedicated
                    team at softgetix inc. For projects of all sizes and in all
                    industries, we at our firm offer the services of expert
                    development teams. Our specialist teams are made up of
                    skilled programmers, softgetix engineers, and other experts
                    who give your project their entire focus.
                  </p>
                  <p>
                    By hiring a specialist software development team, you may
                    outsource all administrative tasks and boost your on-site
                    technical capability at the same time.
                  </p>
                </div>
                <div className="banner_buttons">
                  <a
                    href="/hiring/team"
                    className="btn free_Quote_btn btn-lg mt-3"
                  >
                    <b>Find Your Perfect Developers</b>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 dedicated_team_section1">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="csd-rigt-detail-box">
                      <p>
                        <ul>
                          <li>PHP developers</li>
                          <li>Laravel developers</li>
                          <li>Codeigniter developers</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="csd-rigt-detail-box">
                      <p>
                        <ul>
                          <li>WordPress developers</li>
                          <li>React Native developers</li>
                          <li>MongoDB developers</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="csd-rigt-detail-box">
                      <p>
                        <ul>
                          <li>Graphic designers</li>
                          <li>HTML5 coders</li>
                          <li>Tailwind CSS</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="csd-rigt-detail-box">
                      <p>
                        <ul>
                          <li>Vue.js developers</li>
                          <li>React.js developers</li>
                          <li>Node.js developers</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="csd-rigt-detail-box">
                      <p>
                        <ul>
                          <li>Manual QA</li>
                          <li>Bootstrap</li>
                          <li>MySQL developers</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="csd-rigt-detail-box">
                      <p>
                        <ul>
                          <li>Project managers</li>
                          <li>PostgreSQL Developer</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="custom_software_development_section2">
          <div className="container">
            <div className="row">
              <div className="col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="dedicated_team_section1_img p-5 image-container">
                       <Image src="/images/EnterpriseServices.jpg" className="image" alt="EnterpriseServices" layout="fill" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="dedicated_team_section1_text p-5">
                      <h4>
                        <b>Type of Dedicated Development Team</b>
                      </h4>
                      <p>
                        Use our professional software development team services
                        to have total control over every part of the development
                        process. We provide a variety of dedicated software
                        development options to meet the specific needs of our
                        clients.
                        <ul className="pt-3">
                          <li>QA and testing team</li>
                          <li>R&D services providers</li>
                          <li>IT consulting team</li>
                          <li>Software support and maintenance team</li>
                          <li>UX/UI designers</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="custom_software_development_section5">
          <div className="container pb-3">
            <div className="row">
              <div className="col-md-12">
                <h2 className="font-weight-bold text-center staff-heading">
                  <b className="orange-text">Benefits </b>of Having Dedicated
                  Development Team
                </h2>
              </div>
              <div className="col-md-12 dedicated_team_section2">
                <div className="row">
                  <div className=" col-12 csd_project_values">
                    <h4 className="benefits-item-title title-sub">
                      1. Access To Talent
                    </h4>
                    <p className="text">
                      When your country is facing talent crunch, a dedicated development team is the best option for you. We can help you quickly assemble individuals and your entire team with a variety of technical skill sets, seniority levels, English language proficiency and technical background.
                    </p>
                  </div>
                  <div className=" col-12 csd_project_values">
                    <h4 className="benefits-item-title title-sub">
                      2. Simple Scalability
                    </h4>
                    <p className="text">
                      Feel like you might use a few new developers for your current project? No worry; we can assist you with that. When your workload fluctuates, scale up or down as needed. Leave the hiring and firing of programmers to us so you can focus on enjoying the creation of your product.
                    </p>
                  </div>
                  <div className=" col-12 csd_project_values">
                    <h4 className="benefits-item-title title-sub">
                      3. Direct Communication
                    </h4>
                    <p className="text">
                      Frequently interact with your software engineers and participate in the software development process. Dedicated programmers are hired specifically for your project. Have a one-on-one discussion with the team to discuss your demands and expectations. You'll be able to communicate all of your objectives directly to the person in control of design, development, or quality assurance as a result.
                    </p>
                  </div>
                  <div className=" col-12 csd_project_values">
                    <h4 className="benefits-item-title title-sub">
                      4. Learn and grow for a better business
                    </h4>
                    <p className="text">
                      Every project, in our perspective, has its lessons to be learned, and as bespoke software developers, our experience has shown us that every project has its own special difficulties. We have improved as developers over the years, and we hope to keep doing so with each project we do.
                    </p>
                  </div>
                  <div className=" col-12 csd_project_values">
                    <h4 className="benefits-item-title title-sub">
                      5. Close-knit teams work better
                    </h4>
                    <p className="text">
                      As a result of their close-knit teams, experienced developers are able to work on each project with a greater degree of commitment. We know how to build each group to include engineers who are not only skilled but also familiar, as integration is what keeps people enthusiastic and efficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="custom_software_development_section2 mb-4 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="font-weight-bold text-center staff-heading">
                  Our Dedicated Development Team
                  <b className="orange-text"> Setup Process</b>
                </h2>
              </div>
              <div className="col-md-12 dedicated_team_section2">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="csd_project_values">
                      <h4 className="benefits-item-title title-sub">
                        <span>1</span>Send your specifications
                      </h4>
                      <p className="text">
                        You will get your expert developers more quickly the more
                        information you submit with us. Give us a list of the
                        experts you have, along with their senior level and
                        technical stack, or get in touch with us to arrange a
                        meeting so we can go over the details of your project.
                      </p>
                    </div>  
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="csd_project_values">
                      <h4 className="benefits-item-title title-sub">
                        <span>2</span>Examine vetted resumes
                      </h4>
                      <p className="text">
                        We will choose applicants based on your specifications.
                        You will receive the appropriate profiles of any team
                        members you desire, such as software engineers. If you
                        want, you can ask for an interview with the candidates in
                        person or by video call in our office.
                      </p>
                    </div>  
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="csd_project_values">
                      <h4 className="benefits-item-title title-sub">
                        <span>3</span>Supervising software developers
                      </h4>
                      <p className="text">
                        Your professional developers are under your direct
                        supervision; there is no mediator. We only keep an eye on
                        their performance and give the right place to work in it
                        without interfering in your project.
                      </p>
                    </div>  
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="csd_project_values">
                      <h4 className="benefits-item-title title-sub">
                        <span>4</span>Experience stress-free development
                      </h4>
                      <p className="text">
                        As we manage the rest, step right into the development
                        phase. We provide your team with all the resources,
                        locations, and perks they require. Payroll, budgeting,
                        employment, and recruitment are all our responsibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="banner_buttons text-center mt-3">
                  <a
                    href="/hiring/team"
                    className="btn free_Quote_btn btn-lg mt-3"
                  >
                    <b>Hire Dedicated Developers</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dedicated_team_section5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="col-md-12">
                  <h2 className="font-weight-bold text-center staff-heading">
                    What are the <b className="orange-text">characteristics </b>
                    of a dedicated development team?
                  </h2>
                </div>
                <div className="col-lg-12 mt-4">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <p>
                        We believe that these characteristics will assist you in
                        selecting or establishing an excellent development team.
                        This article is an excellent place to start the
                        analysis, but there are a lot more variables to
                        consider, from how to choose the development company to
                        the specific criteria related to your area of work. If
                        you're looking for a professional, committed development
                        team, we are glad to give you the team you need.
                      </p>
                    </div>
                  </div>
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
  );
}

export default DedicatedTeam;
