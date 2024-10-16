import { useField } from "formik";
import { FormFeedback, Input, Label } from "reactstrap";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log(props);
  return (
    <>
      <Label className="form-label">{label}</Label>
      {/* <Input
        {...field}
        {...props}

        // onChange={validation.handleChange}
        // onBlur={validation.handleBlur}
        // value={validation.values.name.toUpperCase() || ""}
        // invalid={
        //   validation.touched.name && validation.errors.name ? true : false
        // }
      /> */}
      <label>{label}sdf</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomInput;
