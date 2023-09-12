import React, { useEffect, useState } from "react";
import Template from "../components/common/Template";
import Head from "next/head";
import Banner from "../components/home/Banner";
import About from "../components/home/about";
import Partnership from "../components/home/partnership";
import Plans from "../components/home/Plan";
import ContactUsTest from "../components/home/Contact";
import CaseStudy from "../components/home/CaseStudy";
import Testimonials from "../components/home/Testimonials";
import { useRouter } from 'next/router'

function Index(props) {
  const router = useRouter();
  const [ogUrl, setOgUrl] = useState("");
  const ContactSection = React.useRef("");

  function smoothScroll(target) {
    const { top } = target.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth",
    });
  }
  const [renderContact, setRenderContact] = useState(false);

  useEffect(() => {

     const element = document.getElementById('conthub');
      const { top } = element.getBoundingClientRect()
      window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth"
      });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setRenderContact(true);
      }
    });

    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);

  },[router.pathname]);

   return (
    <>
    <Head>
        <title>Digital Product Engineering & IT Staff Augmentation Company </title>
        <meta name="description" content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services." />
        <link rel="canonical" href={ogUrl}></link>
    </Head>
    <Template>
        <Banner />
        <About />
        <Partnership />
        <CaseStudy />
        <Testimonials />
        <Plans />
        <section className="contact_us" id="conthub" ref={ContactSection}>
          {renderContact && <ContactUsTest />}
        </section>
        </Template>
    </>
  );
}

export default Index;
