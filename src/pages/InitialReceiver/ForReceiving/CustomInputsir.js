import { useField } from "formik";
import { FormFeedback, Input, Label } from "reactstrap";
import React from "react";

const CustomInput = ({ label, handleChange, props }) => {
  //   const [field, meta] = useField(props);
  //   console.log(props);
  return (
    <>
      <Label className="form-label">{label}</Label>
      <Input
        name={label}
        type="text"
        placeholder="Enter Business Name"
        onChange={handleChange}
        // onChange={validation.handleChange}
        // onBlur={validation.handleBlur}
        // value={validation.values.name.toUpperCase() || ""}
        // invalid={
        //   validation.touched.name && validation.errors.name ? true : false
        // }
      />
      {/* <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>} */}
    </>
  );
};
export default CustomInput;
