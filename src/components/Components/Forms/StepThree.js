/* eslint-disable react/prop-types */
import React,  { useEffect, useState }  from "react";
import { Form, Card, Button } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData,prevStep, values }) => {
  //creating error state for validation
  // const [error, setError] = useState(false);
 
  const [resource_start, setResourceStart] = useState("");
 
  const onValueChangeResourceStart = (event) => {
    setResourceStart(event.target.value);
    values.resource_start = event.target.value;
  };

  useEffect(() => {
    setResourceStart(values.resource_start);
	}, []);	
  
  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
    // checking if value of first name and last name is empty show error else take to step 2
    // if (
    //   validator.isEmpty(values.resource_start) ||
    //   validator.isEmpty(values.resource_budget) 
    // ) {
    //   setError(true);
    // } else {
    //   nextStep();
    // }
  };

  return (
    <div>
      <Card className="card-height">
        <Card.Body>
          <Form onSubmit={submitFormData}>
            
            <Form.Group className="mb-3">
              <label className="label-heading">When do you need the resource to start?</label>
              <div className="form-group radio-block" style={{"textAlign": "left"}}>
                
                <div className="radio-option-div">
                <input type="radio" id="staffing" name="resource_start" value="Immediately" checked={resource_start === "Immediately"}
onChange={onValueChangeResourceStart} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="staffing">Immediately</label><br/>
                </div>
                <div className="radio-option-div">
                <input type="radio" id="staffing1" name="resource_start" value="In 1 or 2 weeks from now" checked={resource_start === "In 1 or 2 weeks from now"}
onChange={onValueChangeResourceStart} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="staffing1">In 1 or 2 weeks from now</label><br/>
                </div> 
                <div className="radio-option-div">
                <input type="radio" id="staffing2" name="resource_start" value="In 1 or 2 months from now" checked={resource_start === "In 1 or 2 months from now"}
onChange={onValueChangeResourceStart} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="staffing2">In 1 or 2 months from now</label><br/>
                </div>  
                <div className="radio-option-div">
                <input type="radio" id="staffing3" name="resource_start" value="I'm not sure at this point" checked={resource_start === "I'm not sure at this point"}
onChange={onValueChangeResourceStart} required/>
                <label className="wpforms-field-label-inline ml-2" htmlFor="staffing3">I'm not sure at this point</label><br/>
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

export default StepTwo;