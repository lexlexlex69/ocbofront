import React from "react";
import { Col, Label, Input, FormFeedback } from "reactstrap";
const BasicInputField = ({
  col,
  label,
  touched,
  errors,
  name,
  validation,
  placeholder,
  value,
  type,
}) => {
  return (
    <Col md={col}>
      <div className="mb-3">
        <Label className="form-label">{label}</Label>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
          value={value || ""}
          invalid={touched && errors ? true : false}
        />
        {touched && errors ? (
          <FormFeedback type="invalid">{errors}</FormFeedback>
        ) : null}
      </div>
    </Col>
  );
};

export default BasicInputField;
