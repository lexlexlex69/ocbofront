import { useField, useFormikContext } from "formik";
import React from "react";
import { Col, Input, Label } from "reactstrap";

const CustomCheckbox = ({ label, purpose, ...props }) => {
  const { values } = useFormikContext();
  const { setFieldValue } = useFormikContext();
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
              const data =
                purpose === "workScope"
                  ? values.addInfoworkScopeChecklist
                  : purpose === "followUp"
                  ? values.addInfoFollowUpQuestions
                  : null;
              const newObject = { id: props.id, label: label };
              const index = data.some((item) => item.label === label);
              // console.log(index)

              if (index) {
                const dataRemoved = data.filter((item) => item.label !== label);
                console.log(dataRemoved);
                setFieldValue(
                  purpose === "workScope"
                    ? "addInfoworkScopeChecklist"
                    : purpose === "followUp"
                    ? "addInfoFollowUpQuestions"
                    : "",
                  dataRemoved
                );
              } else {
                setFieldValue(
                  purpose === "workScope"
                    ? "addInfoworkScopeChecklist"
                    : purpose === "followUp"
                    ? "addInfoFollowUpQuestions"
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
