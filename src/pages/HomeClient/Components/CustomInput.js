import { useField, useFormikContext } from "formik";
import Select from "react-select";
import { Input, Label } from "reactstrap";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  //   console.log(props);
  const handleChange = (selectedOption) => {
    setFieldValue(field.name, selectedOption ? selectedOption.value : "");
  };

  const typeOptions = props.options;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Label>{label}</Label>{" "}
        {meta.touched && meta.error && (
          <p style={{ marginBottom: "0", color: "#f46a6a" }}>{meta.error}</p>
        )}
      </div>
      <Input
        {...field}
        {...props}
        placeholder={`Please enter a ${label}`}
        className={meta.touched && meta.error ? "border-danger" : ""}
      />
    </>
  );
};

export default CustomInput;
