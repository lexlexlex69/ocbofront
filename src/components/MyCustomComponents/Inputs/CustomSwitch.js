import { useField, useFormikContext } from "formik";
import React from "react";
import { Col, Input, Label } from "reactstrap";

const CustomSwitch = ({ label, name }) => {
  const { values } = useFormikContext();
  // console.log(values.workScopeChecklist)
  // const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  function handleChange() {
    setFieldValue(name, !values.authorizedSwitch);
  }
  // console.log(props);
  return (
    <>
      <div className="form-check form-switch form-switch-md mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id={name}
          onChange={() => handleChange()}
        />
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
      </div>
    </>
  );
};

export default CustomSwitch;
