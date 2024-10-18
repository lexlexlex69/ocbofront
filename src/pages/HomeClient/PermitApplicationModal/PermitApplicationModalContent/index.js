import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody, CardText, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Select, { StylesConfig } from "react-select";
import * as yup from "yup";
import {
  formOwnership,
  methodAcquisitionFD,
  ownershipFD,
} from "pages/HomeClient/FakeValues/fakedata";
import { Form, Formik } from "formik";
import CustomSelect from "pages/HomeClient/Components/CustomSelect";
import CustomInput from "pages/HomeClient/Components/CustomInput";

const style = { backgroundColor: "#55a5e6", color: "white" };

export default function PermitApplicationModalContent({ setmodal_backdrop }) {
  const [ownershipOptions, setOwnershipOptions] = useState("");
  const [methodAcquisitionOptions, setMethodAcquisitionOptions] = useState("");
  const [formOwnershipOptions, setFormOwnershipOptions] = useState("");

  function extractLabels(data) {
    return data.map((item) => item.label);
  }

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

    const formOwnershipFDFetch = formOwnership;
    setFormOwnershipOptions(formOwnershipFDFetch);
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
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form>
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
                        <CustomSelect
                          label="Ownership Status"
                          name="ownershipStatus"
                          options={ownershipOptions}
                        />
                      </Row>
                      {values.ownershipStatus === 3 && (
                        <Row className="mb-3">
                          <CustomSelect
                            label="Method of lot/property acquisition"
                            name="methodAcquisition"
                            options={methodAcquisitionOptions}
                          />
                        </Row>
                      )}

                      <Row className="mb-3">
                        <CustomSelect
                          label="Form of Ownership"
                          name="formOwnership"
                          options={formOwnershipOptions}
                        />
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
                                <Col md="4">
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck1"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck3"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck4"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck5"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Form Checkbox
                                    </label>
                                  </div>
                                </Col>
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
                                <Col md="6">
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                </Col>
                                <Col md="6">
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                  <div className="form-check form-check-end mb-3">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck2"
                                      //   defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck2"
                                    >
                                      Without any split type ACU and other
                                      mechanical installation or alteration
                                    </label>
                                  </div>
                                </Col>
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
