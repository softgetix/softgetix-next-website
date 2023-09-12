import React from "react";
import Accordion from "./FaqUI/Accordion";
const Faq = (props) => {
  const randomString = () => {
    return (Math.random() + 1).toString(36).substring(7);
  };

  return (
    <React.Fragment>
      <section id="fenceCRM" style={{ marginTop: "0px" }}>
        <div className="container">
        <main className="faq-content">
          <div id="accordion" className="myaccordion faq-card">
            {/* <div className="faq-ilustrations">
              <img
                className="mobile pattern"
                src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/bg-pattern-mobile.svg"
                alt=""
              ></img>
              <img
                className="mobile ilust"
                src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/illustration-woman-online-mobile.svg"
                alt=""
              ></img>
            </div> */}
            <h2 className="font-weight-bold text-center staff-heading"><b className="orange-text faq">Frequently Asked Questions</b></h2>
            {props.faqs.map((faq) => (
              <Accordion
              que={faq.que}
              ans={faq.ans}
              id={'fence' + randomString()}
              key={'fence' + randomString()}
            ></Accordion>
           
           ))}
          
          </div>
        </main>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Faq;
