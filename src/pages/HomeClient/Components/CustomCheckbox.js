import { useField, useFormikContext } from "formik"
import React from "react"
import { Input, Label } from "reactstrap"

const CustomCheckbox = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext() // Access Formik's context
  const [field, meta] = useField({ ...props, type: "checkbox" })
  // console.log(field.)
  // console.log(props);

  const handleChange = () => {
    // console.log("clicked");

    setFieldValue("workScopeCheckist", [
      ...props.stateData, // Spread the current array
      { value: 1, data: props.name }, // Add the new object
    ])
  }

  return (
    <>
      <div className="checkbox">
        <Input
          type="checkbox"
          checked={field.value}
          value={false}
          id={field.name}
          onClick={handleChange} // Custom handler using setFieldValue
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <Label htmlFor={field.name}>
          {label ? label : "I accept the terms of service"}
        </Label>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  )
}

export default CustomCheckbox
