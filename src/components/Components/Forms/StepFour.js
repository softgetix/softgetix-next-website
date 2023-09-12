/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const StepFour = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  // const [error, setError] = useState(false);

  const [resource_budget, setResourceBudget] = useState("");

  const onValueChangeResourceBudget = (event) => {
    setResourceBudget(event.target.value);
    values.resource_budget = event.target.value;
  };

  useEffect(() => {
    setResourceBudget(values.resource_budget);
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
              <label className="label-heading">
                Do you have experience in managing this type of resource?
              </label>
              <div
                className="form-group radio-block"
                style={{ textAlign: "left" }}
              >
                <div className="radio-option-div">
                  <input
                    type="radio"
                    id="staffing"
                    name="resource_budget"
                    value="I have never managed this type of resource"
                    checked={resource_budget === "I have never managed this type of resource"}
                    onChange={onValueChangeResourceBudget}
                    required
                  />
                  <label
                    className="wpforms-field-label-inline ml-2"
                    htmlFor="staffing"
                  >
                    I have never managed this type of resource
                  </label>
                  <br />
                </div>
                <div className="radio-option-div">
                  <input
                    type="radio"
                    id="staffing1"
                    name="resource_budget"
                    value="I have some experience managing this type of resource"
                    checked={resource_budget === "I have some experience managing this type of resource"}
                    onChange={onValueChangeResourceBudget}
                    required
                  />
                  <label
                    className="wpforms-field-label-inline ml-2"
                    htmlFor="staffing1"
                  >
                    I have some experience managing this type of resource
                  </label>
                  <br />
                </div>
                <div className="radio-option-div">
                  <input
                    type="radio"
                    id="staffing2"
                    name="resource_budget"
                    value="I have used agile or other methodologies to manage this type of resource"
                    checked={resource_budget === "I have used agile or other methodologies to manage this type of resource"}
                    onChange={onValueChangeResourceBudget}
                    required
                  />
                  <label
                    className="wpforms-field-label-inline ml-2"
                    htmlFor="staffing2"
                  >
                    I have used agile or other methodologies to manage this type of resource
                  </label>
                  <br />
                </div>
                {/* <div className="radio-option-div">
                  <input
                    type="radio"
                    id="staffing3"
                    name="resource_budget"
                    value="More than $75 per hour"
                    checked={resource_budget === "More than $75 per hour"}
                    onChange={onValueChangeResourceBudget}
                    required
                  />
                  <label
                    className="wpforms-field-label-inline ml-2"
                    htmlFor="staffing3"
                  >
                    More than $75 per hour
                  </label>
                  <br />
                </div> */}
              </div>
            </Form.Group>

            {/* <Form.Group className="mb-3">
              <label className="label-heading">
                What is your approximate hourly budget in USD?
              </label>
              <div
                className="form-group radio-block"
                style={{ textAlign: "left" }}
              >
                <div className="radio-option-div">
                  <input
                    type="radio"
                    id="staffing"
                    name="resource_budget"
                    value="I have never managed this type of resource"
                    checked={resource_budget === "I have never managed this type of resource"}
                    onChange={onValueChangeResourceBudget}
                    required
                  />
                  <label
                    className="wpforms-field-label-inline ml-2"
                    htmlFor="staffing"
                  >
                    I have never managed this type of resource
                  </label>
                  <br />
                </div>
                <div className="radio-option-div">
                  <input
                    type="radio"
                    id="staffing1"
                    name="resource_budget"
                    value="I have some experience managing this type of resource"
                    checked={resource_budget === "I have some experience managing this type of resource"}
                    onChange={onValueChangeResourceBudget}
                    required
                  />
                  <label
                    className="wpforms-field-label-inline ml-2"
                    htmlFor="staffing1"
                  >
                    I have some experience managing this type of resource
                  </label>
                  <br />
                </div>
                <div className="radio-option-div">
                  <input
                    type="radio"
                    id="staffing2"
                    name="resource_budget"
                    value="I have used agile or other methodologies to manage this type of resource"
                    checked={resource_budget === "I have used agile or other methodologies to manage this type of resource"}
                    onChange={onValueChangeResourceBudget}
                    required
                  />
                  <label
                    className="wpforms-field-label-inline ml-2"
                    htmlFor="staffing2"
                  >
                    I have used agile or other methodologies to manage this type of resource
                  </label>
                  <br />
                </div>
                <div className="radio-option-div">
                  <input
                    type="radio"
                    id="staffing3"
                    name="resource_budget"
                    value="More than $75 per hour"
                    checked={resource_budget === "More than $75 per hour"}
                    onChange={onValueChangeResourceBudget}
                    required
                  />
                  <label
                    className="wpforms-field-label-inline ml-2"
                    htmlFor="staffing3"
                  >
                    More than $75 per hour
                  </label>
                  <br />
                </div>
              </div>
            </Form.Group> */}

            <div className="button-block">
              <Button className="btn back_btn" onClick={prevStep}>
                <i className="fa fa-angle-double-left"></i> Back
              </Button>
              <Button className="btn continue-btn" type="submit">
                Next <i className="fa fa-angle-double-right"></i>
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepFour;
