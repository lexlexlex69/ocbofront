import { useField, useFormikContext } from "formik";
import React from "react";
import { Col, Input, Label } from "reactstrap";

const CustomRadioButton = ({ label, ...props }) => {
  const { values } = useFormikContext();
  // console.log(values.workScopeChecklist)
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  function handleChange(value){
    if(values.structuralWork ==)
  }
  // console.log(props);
  return (
    <>
      <Col md="12" lg="6" xl="6">
        <label className="form-check-label" htmlFor="exampleRadios2">
          {label}
        </label>
      </Col>
      <Col md="12" lg="6" xl="2">
        <div style={{ display: "flex", gap: "40px" }}>
          <span style={{ display: "flex", gap: "5px" }}>
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="yes"
              onClick={(e) => console.log(e.target.value)}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </span>
          <span style={{ display: "flex", gap: "5px" }}>
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="no"
              onClick={(e) => console.log(e.target.value)}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </span>
        </div>
      </Col>
    </>
  );
};

export default CustomRadioButton;
