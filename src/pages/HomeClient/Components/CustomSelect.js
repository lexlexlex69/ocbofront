import { useField, useFormikContext } from "formik";
import Select from "react-select";
import { Label } from "reactstrap";
import React from "react";
const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  console.log(meta);
  //   console.log(props);
  const handleChange = (selectedOption) => {
    setFieldValue(field.name, selectedOption);
  };

  const typeOptions = props.options;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Label>{label}</Label>{" "}
        {meta.touched && meta.error && (
          <p style={{ marginBottom: "0", color: "#f46a6a" }}>*{meta.error}</p>
        )}
      </div>
      <Select
        classNamePrefix="select2-selection"
        options={typeOptions}
        placeholder={`Please select a ${label}`}
        value={meta.value || null}
        // value={
        //   typeOptions
        //     ? typeOptions.find((option) => option.id === field.id)
        //     : ""
        // }
        onChange={handleChange}
        style={{ margin: "20px" }}
        isClearable
        {...props}
      />
    </>
  );
};

export default CustomSelect;
