import { useField, useFormikContext } from "formik";
import React from "react";
import { Col, Input, Label } from "reactstrap";

const CustomCheckbox = ({ label, purpose, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  // console.log(props);
  return (
    <>
      <Col
        md={purpose === "workScope" ? "4" : purpose === "followUp" ? "6" : "12"}
        sm="6"
      >
        <div className="form-check form-check-end mb-3">
          <Input
            {...props}
            id={`${
              purpose === "workScope"
                ? "workScope"
                : purpose === "followUp"
                ? "followUp"
                : ""
            }${props.id}`}
            style={{ marginRight: "5px" }}
            onClick={() => {
              const data = props.data;
              const newObject = { id: props.id, label: label };
              const index = data.findIndex((item) => item.id === newObject.id);
              console.log(index);

              if (index !== -1) {
                data.splice(index, 1);
              } else {
                setFieldValue(
                  purpose === "workScope"
                    ? "workScopeChecklist"
                    : purpose === "followUp"
                    ? "followUpChecklist"
                    : "",
                  [...data, newObject]
                );
              }
            }}
          />
          <Label
            className="form-check-label"
            htmlFor={`${
              purpose === "workScope"
                ? "workScope"
                : purpose === "followUp"
                ? "followUp"
                : ""
            }${props.id}`}
          >
            {label}
          </Label>
        </div>
      </Col>
    </>
  );
};

export default CustomCheckbox;
