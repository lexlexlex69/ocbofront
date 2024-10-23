import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody, CardText, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Select, { StylesConfig } from "react-select";
import * as yup from "yup";
import {
  barangayFD,
  buildingPermitAppicationQuestions,
  followUpQuestionsFD,
  formOwnershipFD,
  methodAcquisitionFD,
  ownershipFD,
  workScopeCheckistFD,
} from "pages/HomeClient/FakeValues/fakedata";
import { Field, Form, Formik } from "formik";
import CustomSelect from "pages/HomeClient/Components/CustomSelect";
import CustomInput from "pages/HomeClient/Components/CustomInput";
import CustomCheckbox from "pages/HomeClient/Components/CustomCheckbox";

const style = { backgroundColor: "#55a5e6", color: "white" };

export default function PermitApplicationModalContent({ setmodal_backdrop }) {
  const [selectOptions, setSelectOptions] = useState({
    ownershipOptions: [],
    methodAcquisitionOptions: [],
    formOwnershipOptions: [],
    barangayOptions: [],
  });
  // const [workScopeChecklistOptions, setWorkScopeChecklistOptions] = useState([])
  // const [followUpQuestionsOptions, setFollowUpQuestionsOptions] = useState([])

  const onSubmit = async (values, actions) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(values[methodAcquisition]);
    if (values.ownershipStatus.id !== 3)
      values = { ...values, methodAcquisition: 0 };
    console.log(values);
    // setmodal_backdrop(false);
    // actions.resetForm();
  };
  console.log(buildingPermitAppicationQuestions);
  useEffect(() => {
    const ownershipFDFetch = ownershipFD;
    const methodAcquisitionFDFetch = methodAcquisitionFD;
    const formOwnershipFDFetch = formOwnershipFD;
    const barangayFDFetch = barangayFD;
    setSelectOptions({
      ...selectOptions,
      ownershipOptions: ownershipFDFetch,
      methodAcquisitionOptions: methodAcquisitionFDFetch,
      formOwnershipOptions: formOwnershipFDFetch,
      barangayOptions: barangayFDFetch,
    });

    // console.log(selectOptions)
  }, []);

  const schema = yup.object().shape({
    ownershipStatus: yup
      .object()

      .required("Required"),
    methodAcquisition: yup.object().required("Required"),
    formOwnership: yup.object().required("Required"),
    projectTitle: yup.string().required("Required"),
    lotNo: yup.string().required("Required"),
    blkNo: yup.string().required("Required"),
    tctNo: yup.string().required("Required"),
    street: yup.string().required("Required"),
    barangay: yup.object().required("Required"),
    taxDecNo: yup.string().required("Required"),
    disctrict: yup.string().required("Required"),
    city: yup.string().required("Required"),
    // username: yup
    //   .string()
    //   .min(3, "Username must be at least 3 characters long")
    //   .required("Required"),
    // jobType: yup
    //   .string()
    //   .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    //   .required("Required"),
    // acceptedTos: yup
    //   .boolean()
    //   .oneOf([true], "Please accept the terms of service"),
  });

  return (
    <>
      <Formik
        initialValues={{
          ownershipStatus: "",
          methodAcquisition: "",
          formOwnership: "",
          projectTitle: "",
          lotNo: "",
          blkNo: "",
          tctNo: "",
          street: "",
          barangay: "",
          taxDecNo: "",
          disctrict: "",
          city: "",
          workScopeChecklist: [],
          followUpChecklist: [],
        }}
        // validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            {/* <TestCustomCheckbox id="check2" type="checkbox" data={values} /> */}

            {/* <h2>Building Permit Application</h2> */}
            {buildingPermitAppicationQuestions.map((card) => (
              <>
                <Row>
                  <Col lg={12}>
                    <Card
                      style={{
                        border: "2px solid rgba(0, 0, 0, 0.05)",
                        boxShadow: "none",
                      }}
                    >
                      <p
                        className="card-header  border-bottom text-uppercase"
                        style={style}
                      >
                        {card.header}
                      </p>
                      <CardBody>
                        {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                        <CardText>
                          {card.field.map((field) => {
                            if (field.dependentOn)
                              return (
                                <>
                                  {values[field.dependentOn][
                                    field.dependentOnName
                                  ] === field.dependeonValue && (
                                    <Row className="mb-3">
                                      <CustomSelect
                                        label={field.label}
                                        name={field.name}
                                        options={selectOptions[field.options]}
                                      />
                                    </Row>
                                  )}
                                </>
                              );
                            else {
                              return (
                                <>
                                  <Row className="mb-3">
                                    <CustomSelect
                                      label={field.label}
                                      name={field.name}
                                      options={selectOptions[field.options]}
                                      dependentId={
                                        values[field.fixedDependentOn] &&
                                        values[field.fixedDependentOn][
                                          field.fixedDependentOnName
                                        ]
                                          ? values[field.fixedDependentOn][
                                              field.fixedDependentOnName
                                            ] === field.fixedDependentOnId
                                          : false
                                      }
                                      fixedDependentSelectId={
                                        field.fixedDependentSelectId
                                      }
                                    />
                                  </Row>
                                </>
                              );
                            }
                          })}

                          {/* {values.ownershipStatus.id === 3 && (
                            <Row className="mb-3">
                              <CustomSelect
                                label="Method of lot/property acquisition"
                                name="methodAcquisition"
                                options={
                                  selectOptions["methodAcquisitionOptions"]
                                }
                              />
                            </Row>
                          )} */}
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </>
            ))}

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  setmodal_backdrop(false);
                }}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Proceed
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
