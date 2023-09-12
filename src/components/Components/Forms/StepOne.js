/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const [resource, setResource] = useState("");

  const onValueChange = (event) => {
    setResource(event.target.value);
    values.resource = event.target.value;
  };

  useEffect(() => {
    setResource(values.resource);
	}, []);	

 
  // after form submit validating the form data using validator
  const submitFormData = (e) => { 
    e.preventDefault();
    nextStep();
    // checking if value of first name and last name is empty show error else take to step 2
    // if (
    //   validator.isEmpty(values.resource) 
    // ) {
    //   setError(true);
    // } else {
    //  
    // }
  };

  return (
    <div>
      <Card className="card-height">
        <Card.Body>
          <Form onSubmit={submitFormData}>
                       
            <Form.Group className="mb-4">
              <label className="label-heading">What type of resource do you need?</label>
              <div className="form-group radio-block">
                <div className="radio-option-div">
                <input type="radio" id="resource" name="resource" value="Full time (40 hours or more per week)" checked={resource === "Full time (40 hours or more per week)"}
onChange={onValueChange} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource">Full time (40 hours or more per week)</label><br/>
                </div>
                <div className="radio-option-div">
                <input type="radio" id="resource1" name="resource" value="Part-time (Less than 40 hours per week)" checked={resource === "Part-time (Less than 40 hours per week)"}
onChange={onValueChange} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource1">Part-time (Less than 40 hours per week)</label><br/>
                </div>
                <div className="radio-option-div">
                <input type="radio" id="resource2" name="resource" value="Hourly" checked={resource === "Hourly"}
onChange={onValueChange} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource2">Hourly</label><br/>
                </div>
                <div className="radio-option-div">
                <input type="radio" id="resource3" name="resource" value="I'm not sure at this point" checked={resource === "I'm not sure at this point"}
onChange={onValueChange} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource3">I'm not sure at this point</label><br/>
                </div>
            </div>
            </Form.Group>
            <div className="team_hire_step1_btn">
              <Button type="submit" className="btn continue-btn">
                Next <i className="fa fa-angle-double-right"></i>
              </Button>
            </div>  
          </Form>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default StepOne;