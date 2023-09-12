import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { usePageLoading } from '../../pages/usePageLoading';
import Loader from "../../pages/loader";

function Template(props) {
  const { isPageLoading  } = usePageLoading();
  return (
    <React.Fragment>
      <Nav />
      {isPageLoading  ? (
          <Loader />
        ) : (
          <div className="main-content">
          {props.children}
          </div>
        )}
        {/* <div className="main-content">
          {props.children}
          </div> */}
      <Footer />
    </React.Fragment>
  )
}

export default Template
