import React from "react";
const Accordion = (props) => {
  return (
    <React.Fragment>
      <div className="card" key={props.id}>
        <div className="card-header">
          <h2 className="mb-0">
            <button
              className="d-flex align-items-center justify-content-between btn btn-link collapsed"
              data-toggle="collapse"
              data-target={"#" + props.id}
              aria-expanded="false"
              aria-controls={props.id}
            >
              {props.que}
            </button>
          </h2>
        </div>
        <div
          id={props.id}
          className="collapse"
          aria-labelledby={props.id}
          data-parent="#accordion"
        >
          <div className="card-body">
            <p>{props.ans}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Accordion;
