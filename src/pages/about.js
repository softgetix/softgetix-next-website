import React,{useState, useEffect} from 'react';
import ContactTest from '../components/home/Contact';
import Template from "../components/common/Template";
import BrandImages from '../components/common/BrandImages';
import Head from "next/head";
import Image from 'next/image'
import { useRouter } from 'next/router'

function About() {
  const router = useRouter();
  const [ogUrl, setOgUrl] = useState("");

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <title>Software Design and Development Company - Softgetix</title>
        <meta name="description" content="Softgetix is a leading group of company in a software development and IT staff augmentation Services" />
        <link rel="canonical" href={ogUrl}></link>
      </Head>
      <Template>
        <section id="about_us">
          <div className="container">
            <div className="row">
            <div className="text-center pb-2">
                <div className="col-md-12">
                  <h1 className="font-weight-bold text-center staff-heading">Excellent<b className="orange-text"> Products</b> are built by Excellent <b className="orange-text">Teams</b></h1>
                </div>
              </div>
              <div className="col-md-12 text-right banner image-container">
                <Image src="/images/about_banner_image.png" className='image' alt="about-imgs" width="1060" height="604" />
              </div>
        
            </div>
          </div>
        </section>   

        <div className="VisionMissionScreen">
          <div className="vision_mission_container_fullwd__stats-con">
              <div className="OurVisionMissionSection">
                <div className="section_our_vision">
                    <div className="vision_wrapper">
                      <div className="our_vision_heading">
                          <div className="our_vision_heading_main">Our Vision</div>
                      </div>
                      <div className="our_vision_para">We aspire to set the benchmark for excellence and trust , by delivering quality IT services and high business value to our clients. Nickelfox aims to be an Organization of choice for talent and clients alike.</div>
                    </div>
                </div>
                <div className="section_our_mission">
                    <div className="mission_wrapper">
                      <div className="our_mission_heading">
                          <div className="our_mission_heading_main">Our Mission</div>
                      </div>
                      <div className="our_mission_wrapper">
                          <div className="our_mission_para">To partner with clients to fuel their growth story. We are committed to ensuring customer success and the Delight in our service offerings.</div>
                      </div>
                    </div>
                </div>
                <div className="section_our_aspiration">
                    <div className="aspiration_wrapper">
                      <div className="our_aspiration_heading">
                          <div className="our_aspiration_heading_main">Our Aspiration</div>
                      </div>
                      <div className="our_aspiration_para">We have high aspirations to become the most trusted name in the IT realm, enabling clients and partners to maximize their business success through our technical excellence, strong action orientation and professional integrity.</div>
                    </div>
                </div>
              </div>
              <div className="OurValueSection">
                <div className="section_our_values">
                    <div className="values_wrapper">
                      <div className="our_values_heading">
                          <div className="our_values_heading_main">Our Values</div>
                          <div className="our_values_heading_highlight">Our Values</div>
                      </div>
                      <div className="our_values_box_wrapper">
                          <div className="box_side_a_wrapper">
                            <div className="box_a_col1">
                                <div className="value_box_heading">Customer Focused</div>
                                <div className="underline_value_heading"></div>
                                <div className="value_para_box">We succeed when we make our clients successful.</div>
                                <div className="border_bt"></div>
                            </div>
                            <div className="border_sd"></div>
                            <div className="box_a_col2">
                                <div className="value_box_heading">Integrity</div>
                                <div className="underline_value_heading"></div>
                                <div className="value_para_box">We take full responsibility for our actions and always deliver on our promise.</div>
                                <div className="border_bt int"></div>
                            </div>
                          </div>
                          <div className="box_side_b_wrapper">
                            <div className="box_b_col1">
                                <div className="value_box_heading res">Global Excellence and Innovation</div>
                                <div className="underline_value_heading"></div>
                                <div className="value_para_box">We make excellence and quality a part of day-to-day work processes and seek continuous improvement in all that we do.</div>
                            </div>
                            <div className="border_sd"></div>
                            <div className="box_b_col2">
                                <div className="value_box_heading">Teamwork</div>
                                <div className="underline_value_heading"></div>
                                <div className="value_para_box">We believe in mutual trust, sharing knowledge and always support our team members.</div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>

        <div className="container" id='about_us_counting'>
          <div className="row">
              <div className="col-md-10 m-auto">
                <h2 className="font-weight-bold text-center staff-heading pt-5">Empowering Ideas with <b className="orange-text">Technology</b></h2>
              </div>
              <div className="col-md-8 m-auto">
                <div className="staff_row_details text-center mt-2">
                    <p>We provide our clients with a full range of software services. These include dedicated teams, product development, R&D and technology consulting. With a proven track record, mature engineering and design teams, a fast growing roster of delighted clients, and veteran management, SoftGetix is a solutions partner of choice.</p>
                </div>
              </div>
          </div>
          <div className="container opportunities-counting_container">
              <div className="row text-center">
                  <div className="col-lg-3 col-md-6 about_us_counting">
                      <div className="counter">
                      <h2 className="count-title">24+</h2>
                      <p className="count-text ">
                          <Image src="/icons/flight.png" alt="flight" width="25" height="25" />
                          &nbsp; COUNTRIES SERVED </p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 about_us_counting">
                      <div className="counter">
                      <h2 className="count-title">530+</h2>
                      <p className="count-text ">
                          <Image src="/icons/rating.png" alt="rating" width="25" height="25" />
                          HAPPY CLIENTS </p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 about_us_counting">
                      <div className="counter">
                      <h2 className="count-title">1280+</h2>
                      <p className="count-text ">
                          <Image src="/icons/pencil-and-ruler.png" alt="pencil" width="25" height="25" />
                          &nbsp; PROJECTS COMPLETE </p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 about_us_counting">
                      <div className="counter">
                      <h2 className="count-title">14+</h2>
                      <p className="count-text ">
                          <Image src="/icons/years.png" alt="years" width="25" height="25" />
                          &nbsp; YEARS </p>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="about_companies">
                <div className="banner_text">
                <BrandImages />
                </div>
            </div>
          </div>
        </div>

        <ContactTest />
        </Template>
    </div>
  )
}

export default About
