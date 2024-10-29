import { useField, useFormikContext } from "formik";
import { Label } from "reactstrap";
import React from "react";
const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorStyle = { border: "1px solid #f46a6a" };
  const { values } = useFormikContext();
  // console.log(values)

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Label style={{ marginBottom: "3px" }}>{label}:</Label>{" "}
        {meta.touched && meta.error && (
          <p style={{ marginBottom: "0", color: "#f46a6a" }}>*{meta.error}</p>
        )}
      </div>

      <select
        className="form-select"
        {...field}
        {...props}
        style={meta.touched && meta.error ? errorStyle : {}}
        value={
          values.landOwnershipStatus === "2" &&
          field.name === "landOwnershipForm"
            ? "2"
            : field.value
        }
        disabled={
          values.landOwnershipStatus === "2" &&
          field.name === "landOwnershipForm"
            ? true
            : false
        }
        // defaultValue={"asd"}
        // value={"zxc"}
      >
        <option value="qwe" hidden>{`Select a ${label}`}</option>
        {/* <option value="asd">{`Select a asdf`}</option>
        <option value="zxc">{`Select a xzcv`}</option> */}
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
