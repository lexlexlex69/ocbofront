import { useField, useFormikContext } from "formik";
import React, { useState } from "react";
import { Col, Input, Label } from "reactstrap";

const CustomRadioButtonVer2 = ({ label, name, choices, selectedId }) => {
  const [otherInput, setOtherInput] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState("");
  const obj = choices.find((item) => item.id == selectedId).choices;
  console.log(obj);
  const { values } = useFormikContext();
  // console.log(values.workScopeChecklist)
  // const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField({ name });
  function handleChange(value) {
    // if(values.structuralWork ===)
    setFieldValue(name, value);
    setOtherInput(false);
    // console.log(values);
  }
  // console.log(props);
  return (
    <>
      <Col md="12" lg="6" xl="6">
        <label className="form-check-label" htmlFor="exampleRadios2">
          {label}
        </label>
      </Col>
      <Col md="12">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
            marginLeft: "20px",
          }}
        >
          {obj &&
            obj.map((item) => (
              <>
                <span
                  style={{
                    display: "flex",
                    gap: "5px",
                    width: "100%",
                  }}
                  key={item.id}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name={name}
                    id={`${item.id}button1`}
                    value={item.label}
                    onClick={(e) => handleChange(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`${item.id}button1`}
                  >
                    {item.label}
                  </label>
                </span>
              </>
            ))}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={`${name}button1`}
              onClick={(e) => setOtherInput(true)}
            />
            <label className="form-check-label" htmlFor={`${name}button1`}>
              Other
            </label>

            {otherInput && (
              <Input
                // value={otherInputValue}
                onChange={(e) => setFieldValue(name, e.currentTarget.value)}
                placeholder={`Enter other`}
                className={meta.touched && meta.error ? "border-danger" : ""}
              />
            )}
          </span>
        </div>
      </Col>
    </>
  );
};

export default CustomRadioButtonVer2;
