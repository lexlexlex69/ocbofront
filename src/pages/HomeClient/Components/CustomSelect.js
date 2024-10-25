import { useField, useFormikContext } from "formik";
import Select from "react-select";
import { Label } from "reactstrap";
import React from "react";
const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const errorStyle = { border: "1px solid #f46a6a" };
  const { values } = useFormikContext();
  console.log(field);

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
        style={meta.touched && meta.error ? errorStyle : {}}
        // defaultValue={values.ownershipStatus === '2' && option.}
        // defaultValue={"asd"}
        value={"zxc"}
      >
        <option value="qwe">{`Select a ${label}`}</option>
        <option value="asd">{`Select a asdf`}</option>
        <option value="zxc">{`Select a xzcv`}</option>
        {/* {options &&
          options.map((option, index) => (
            <option key={index} value={option.id} selected={option.id === "2"}>
              {option.label}
            </option>
          ))} */}
      </select>
    </>
  );
};

export default CustomSelect;
