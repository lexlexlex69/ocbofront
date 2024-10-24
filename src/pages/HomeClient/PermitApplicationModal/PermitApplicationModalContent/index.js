import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody, CardText, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Select, { StylesConfig } from "react-select";
import * as yup from "yup";
import {
  ownershipFD,
  methodAcquisitionFD,
  formOwnershipFD,
  workScopeCheckistFD,
  followUpQuestionsFD,
  buildingPermitAppicationQuestions,
  barangayFD,
} from "pages/HomeClient/FakeValues/fakedata";
import { Field, Form, Formik } from "formik";
import CustomSelect from "pages/HomeClient/Components/CustomSelect";
import CustomInput from "pages/HomeClient/Components/CustomInput";
import CustomCheckbox from "pages/HomeClient/Components/CustomCheckbox";

const style = { backgroundColor: "#55a5e6", color: "white" };

export default function PermitApplicationModalContent({ setmodal_backdrop }) {
  ///////////////////////////
  const [filterParams, setFilterParams] = useState([]);

  const handleInputChange = (e) => {
    let exists = filterParams.find((filter) => filter === e.target.value);
    if (exists) {
      const updatedFilters = filterParams.filter(
        (filter) => filter !== e.target.value
      );
      setFilterParams(updatedFilters);
    } else {
      setFilterParams([...filterParams.params, e.target.value]);
    }
  };

  ///////////////////
  const [ownershipOptions, setOwnershipOptions] = useState([]);
  const [methodAcquisitionOptions, setMethodAcquisitionOptions] = useState("");
  const [formOwnershipOptions, setFormOwnershipOptions] = useState("");
  const [workScopeChecklistOptions, setWorkScopeChecklistOptions] = useState(
    []
  );
  const [followUpQuestionsOptions, setFollowUpQuestionsOptions] = useState([]);

  const onSubmit = async (values, actions) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(values[methodAcquisition]);
    if (values.ownershipStatus !== 3)
      values = { ...values, methodAcquisition: 0 };
    console.log(values);
    // setmodal_backdrop(false);
    // actions.resetForm();
  };

  useEffect(() => {
    const ownershipFDFetch = ownershipFD;
    setOwnershipOptions(ownershipFDFetch);

    const methodAcquisitionFDFetch = methodAcquisitionFD;
    setMethodAcquisitionOptions(methodAcquisitionFDFetch);

    const formOwnershipFDFetch = formOwnershipFD;
    setFormOwnershipOptions(formOwnershipFDFetch);

    const workScopeChecklistFDFetch = workScopeCheckistFD;
    setWorkScopeChecklistOptions(workScopeChecklistFDFetch);

    const followUpQuestionsFDFetch = followUpQuestionsFD;
    setFollowUpQuestionsOptions(followUpQuestionsFDFetch);

    // console.log(workScopeChecklistOptions);
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
                    Land Ownership
                  </p>
                  <CardBody>
                    {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                    <CardText>
                      <Row className="mb-3">
                        <Col md="12">
                          <CustomSelect
                            label="Ownership Status"
                            name="ownershipStatus"
                            options={ownershipOptions}
                          />
                        </Col>
                      </Row>
                      {values.ownershipStatus.id === 3 && (
                        <Row className="mb-3">
                          <Col md="12">
                            <CustomSelect
                              label="Method of lot/property acquisition"
                              name="methodAcquisition"
                              options={methodAcquisitionOptions}
                            />
                          </Col>
                        </Row>
                      )}

                      <Row className="mb-3">
                        <Col md="12">
                          <CustomSelect
                            label="Form of Ownership"
                            name="formOwnership"
                            options={formOwnershipOptions}
                          />
                        </Col>
                      </Row>
                    </CardText>
                  </CardBody>
                </Card>
                <Card
                  style={{
                    border: "2px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: "none",
                  }}
                >
                  <h5
                    className="card-header  border-bottom text-uppercase"
                    style={style}
                  >
                    Project Location
                  </h5>
                  <CardBody>
                    {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                    <CardText>
                      <Row className="mb-3">
                        <Col md="6">
                          <CustomInput
                            label="Project Title"
                            name="projectTitle"
                            type="text"
                          />
                        </Col>
                        <Col md="3">
                          <CustomInput
                            label="Lot No"
                            name="lotNo"
                            type="text"
                          />
                        </Col>
                        <Col md="3">
                          <CustomInput
                            label="Blk No"
                            name="blkNo"
                            type="text"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col md="6">
                          <CustomInput
                            label="Tct No"
                            name="tctNo"
                            type="text"
                          />
                        </Col>
                        <Col md="3">
                          <CustomInput
                            label="Street"
                            name="street"
                            type="text"
                          />
                        </Col>
                        <Col md="3">
                          <CustomInput
                            label="Barangay"
                            name="barangay"
                            type="text"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col md="6">
                          <CustomInput
                            label="Tax dec No"
                            name="taxDecNo"
                            type="text"
                          />
                        </Col>
                        <Col md="3">
                          <CustomInput
                            label="Disctrict"
                            name="disctrict"
                            type="text"
                          />
                        </Col>
                        <Col md="3">
                          <CustomInput label="City" name="city" type="text" />
                        </Col>
                      </Row>
                    </CardText>
                  </CardBody>
                </Card>
                <Card
                  style={{
                    border: "2px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: "none",
                  }}
                >
                  <h5
                    className="card-header  border-bottom text-uppercase"
                    style={style}
                  >
                    Applicant
                  </h5>
                  <CardBody>
                    {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                    <CardText>
                      <Row className="mb-3">
                        <Col md="5">
                          <Label>Project Title:</Label>
                          <Input name="business_code" type="text" />
                        </Col>
                        <Col md="5">
                          <Label>Lot No:</Label>
                          <Input name="business_code" type="text" />
                        </Col>
                        <Col md="1">
                          <Label>Blk No:</Label>
                          <Input name="business_code" type="text" />
                        </Col>
                        <Col md="1">
                          <Label>Blk No:</Label>
                          <Input name="business_code" type="text" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col md="12">
                          <Label>Address:</Label>
                          <Row>
                            <Col md="3">
                              <Input name="business_code" type="text" />
                            </Col>
                            <Col md="2">
                              <Input name="business_code" type="text" />
                            </Col>
                            <Col md="3">
                              <Select
                                isClearable="true"
                                name=""
                                classNamePrefix="select2-selection"
                              />
                            </Col>
                            <Col md="2">
                              <Input name="business_code" type="text" />
                            </Col>
                            <Col md="2">
                              <Input name="business_code" type="text" />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col md="5">
                          <Label>Tel No:</Label>
                          <Input name="business_code" type="text" />
                        </Col>
                      </Row>
                    </CardText>
                  </CardBody>
                </Card>
                <Card
                  style={{
                    border: "2px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: "none",
                  }}
                >
                  <h5
                    className="card-header  border-bottom text-uppercase"
                    style={style}
                  >
                    Additional Information
                  </h5>
                  <CardBody>
                    {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                    <CardText>
                      <Row className="mb-3">
                        <Label>Ownership Status:</Label>
                        <Select
                          isClearable="true"
                          name=""
                          classNamePrefix="select2-selection"
                        />
                      </Row>

                      <Row className="mb-3">
                        <div>
                          <Col md="12">
                            <div className="mt-4">
                              <Row>
                                <h2 className="font-size-18 mb-4">
                                  <i className="mdi mdi-arrow-right text-primary mr-1"></i>{" "}
                                  Scope of Work
                                </h2>
                              </Row>
                              <Row style={{ padding: "0px 20px" }}>
                                {workScopeChecklistOptions.map((wsc) => (
                                  <CustomCheckbox
                                    purpose="workScope"
                                    key={wsc.id}
                                    id={wsc.id}
                                    name={wsc.id}
                                    label={wsc.label}
                                    type="checkbox"
                                    data={values.workScopeChecklist}
                                  />
                                ))}
                              </Row>
                            </div>
                          </Col>
                        </div>
                      </Row>
                      <Row className="mb-3">
                        <Label>Form of Ownership:</Label>
                        <Select
                          isClearable="true"
                          name=""
                          classNamePrefix="select2-selection"
                        />
                      </Row>
                      <Row className="mb-3">
                        <div>
                          <Col md="12">
                            <div className="mt-4">
                              <Row>
                                <h2 className="font-size-18 mb-4">
                                  <i className="mdi mdi-arrow-right text-primary mr-1"></i>{" "}
                                  Follow-up Questions
                                </h2>
                              </Row>
                              <Row style={{ padding: "0px 20px" }}>
                                {followUpQuestionsOptions.map((wsc) => (
                                  <CustomCheckbox
                                    purpose="followUp"
                                    key={wsc.id}
                                    id={wsc.id}
                                    name={wsc.id}
                                    label={wsc.label}
                                    type="checkbox"
                                    data={values.followUpChecklist}
                                  />
                                ))}
                              </Row>
                            </div>
                          </Col>
                        </div>
                      </Row>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
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
