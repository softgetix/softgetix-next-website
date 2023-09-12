/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "react-bootstrap";
import Image from 'next/image';

const Final = ({ values }) => {
  if(values.technology == "team"){
    var tech = "team";
  }else{
    var tech = values.technology+ " Developer";
  }
  return (
    <>
      <Card className="card-height">
        <Card.Body>
          <div className="hire_team_form_heading last-form">
            <div className="last-form-img">
              <Image src="/logo/thank-you-gif.gif" alt="softgetix_logo" width="200" height="200" />
            </div>
            <p>
              <span>Thank You! {values.contact_name} </span>
              <br />for choosing SoftGetix to help you
              to hire a {tech}. We will reach you
              shortly.
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
