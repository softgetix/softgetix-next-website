import React, { useEffect, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData,prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const [resource_time, setResourceTime] = useState("");
  
  const onValueChangeResource = (event) => {
    setResourceTime(event.target.value);
    values.resource_time = event.target.value;
  };

  useEffect(() => {
    setResourceTime(values.resource_time);
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
              <label className="label-heading">How long are you going to need the resource?</label>
              <div className="form-group radio-block" style={{"textAlign": "left"}}>
                <div className="radio-option-div">
                <input type="radio" id="resource" name="resource_time" value="Less than 1 month" checked={resource_time === "Less than 1 month"}
onChange={onValueChangeResource} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource">Less than 1 month</label><br/>
                </div>
                <div className="radio-option-div">
                <input type="radio" id="resource1" name="resource_time" value="1 - 3 months" checked={resource_time === "1 - 3 months"}
onChange={onValueChangeResource} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource1">1 - 3 months</label><br/>
                </div>
                <div className="radio-option-div">
                <input type="radio" id="resource2" name="resource_time" value="3 - 6 months" checked={resource_time === "3 - 6 months"}
onChange={onValueChangeResource} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource2">3 - 6 months</label><br/>
                </div>
                <div className="radio-option-div">
                <input type="radio" id="resource3" name="resource_time" value="More than 6 month" checked={resource_time === "More than 6 month"}
onChange={onValueChangeResource} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource3">More than 6 month</label><br/>
                </div>
                <div className="radio-option-div">
                <input type="radio" id="resource4" name="resource_time" value="I'm not sure at this point" checked={resource_time === "I'm not sure at this point"}
onChange={onValueChangeResource} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="resource4">I'm not sure at this point</label><br/>
                </div>
            </div>
            </Form.Group>

             <div className="button-block">
              <Button  className="btn back_btn" onClick={prevStep}>
              <i className="fa fa-angle-double-left"></i> Back
              </Button>
              <Button  className="btn continue-btn" type="submit">
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