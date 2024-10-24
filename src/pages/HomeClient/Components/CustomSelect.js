import { useField, useFormikContext } from "formik";
import Select from "react-select";
import { Label } from "reactstrap";
import React from "react";
const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const errorStyle = { border: "1px solid #f46a6a" };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Label>{label}</Label>{" "}
        {meta.touched && meta.error && (
          <p style={{ marginBottom: "0", color: "#f46a6a" }}>*{meta.error}</p>
        )}
      </div>

      <select
        className="form-select"
        {...field}
        {...props}
        placeholder="select"
        style={meta.touched && meta.error ? errorStyle : {}}
      >
        <option value="">{`Select a ${label}`}</option>
        {props.options &&
          props.options.map((option, index) => (
            <option key={index} value={option.id}>
              {option.label}
            </option>
          ))}
      </select>
    </>
  );
};

export default CustomSelect;
