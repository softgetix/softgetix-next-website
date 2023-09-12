import {React,useState,useEffect} from "react";
import Link  from "next/link";
import NavLink from "next/link";
import  { useRouter  }  from "next/router";
import Image from 'next/image'


function Nav() {
   const [servicClass , setServiceClass] = useState(false);

   const route =  useRouter();
   const currentRoute = route.pathname;
   
   useEffect(() => {
      
      // Update the document title using the browser API
      if(currentRoute == '/dedicated-team' || currentRoute == '/it-staff-augmentation' || currentRoute == '/backend-development-services' || currentRoute == '/frontend-development-services' || currentRoute == '/web-development-services'){
         setServiceClass(true);
      } 
    });
   return (
    <>
      <section className="navigation">
        <div className="row">
          <nav
            id="navbar_top"
            className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          >
            <div className="container-softgetix">
              <div className="row">
                <div className="col-md-3 logo">
                  <Link className="navbar-brand" href="/">
                    <Image src="/logo/softgetix_logo_new.png" alt="logo" width="200" height="100" />
                  </Link>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown" >
                      <NavLink className={currentRoute == "/about" ? "nav-link active" : "nav-link"} 
                        href="/about" >
                        ABOUT US
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className={currentRoute == "/it-staff-augmentation-services" ? "nav-link active" : "nav-link"}
                        href="/it-staff-augmentation-services"
                      >
                        STAFFING
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className={`nav-link dropdown-toggle ${servicClass ? 'active':''}`}
                        href=""
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        SERVICES <i className="fa fa-angle-down"></i>
                      </Link>

                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        {/* <NavLink activeclassname="active" className="dropdown-item" href="/custom-software-development">Custom Software Development</NavLink> */}
                        <NavLink
                         className={currentRoute == "/dedicated-team" ? "dropdown-item active" : "dropdown-item"}
                          href="/dedicated-team"
                        >
                          Dedicated Development Team
                        </NavLink>
                        <NavLink
                          className={currentRoute == "/it-staff-augmentation" ? "dropdown-item active" : "dropdown-item"}
                          href="/it-staff-augmentation"
                        >
                          IT Staff Augmentation
                        </NavLink>
                        {/* <NavLink activeclassname="active"  className="dropdown-item" href="/ITConsultantAdvisoryService">IT Consulting and Digital Advisory</NavLink> */}
                        <NavLink
                          className={currentRoute == "/backend-development-services" ? "dropdown-item active" : "dropdown-item"}
                          href="/backend-development-services"
                        >
                          Back End Development Services
                        </NavLink>
                        <NavLink
                          className={currentRoute == "/frontend-development-services" ? "dropdown-item active" : "dropdown-item"}
                          href="/frontend-development-services"
                        >
                          Front End Development Services
                        </NavLink>
                        {/* <NavLink activeclassname="active"  className="dropdown-item" href="/SaasApplicationDevelopmentServices">SaaS Application Development Services</NavLink> */}
                        {/* <NavLink activeclassname="active"  className="dropdown-item" href="/BusinessIntelligenceServices">Business Intelligence Services </NavLink> */}
                        {/* <NavLink activeclassname="active"  className="dropdown-item" href="/DatabaseDevelopmentServices">Database Development Services</NavLink> */}
                        <NavLink
                          className={currentRoute == "/web-development-services" ? "dropdown-item active" : "dropdown-item"}
                          href="/web-development-services"
                        >
                          Web Development Services
                        </NavLink>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className={currentRoute == "/career" ? "nav-link active" : "nav-link"}
                        href="/career"
                      >
                        CAREERS
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link"
                        href="https://blog.softgetix.com/"
                      >
                        BLOG
                      </NavLink>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <Link
                      href="/contact"
                      className="btn contact_us_btn my-2 my-sm-0"
                      type="submit"
                    >
                      Contact Us
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Nav;
