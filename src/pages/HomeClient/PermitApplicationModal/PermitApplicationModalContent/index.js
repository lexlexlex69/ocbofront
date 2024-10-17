import React from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  Container,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Select, { StylesConfig } from "react-select";

export default function PermitApplicationModalContent() {
  return (
    <>
      <div>
        {/* <h2>Building Permit Application</h2> */}
        <Row>
          <Col lg={12}>
            <Card
              style={{
                border: "2px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "none",
              }}
            >
              <h5
                className="card-header  border-bottom text-uppercase"
                style={{ backgroundColor: "#55a5e6", color: "white" }}
              >
                Land Ownership
              </h5>
              <CardBody>
                {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                <CardText>
                  <Row className="mb-3">
                    <Label>Ownership Status:</Label>
                    <Select
                      isClearable="true"
                      name=""
                      placeholder="Select Status"
                      //   onChange={(typeOptions) =>
                      //     validation.setFieldValue("permit_type_id", typeOptions)
                      //   }
                      //   onBlur={() => {
                      //     validation.handleBlur({
                      //       target: { name: "permit_type_id" },
                      //     });
                      //   }}
                      //   options={typeOptions}
                      //   value={validation.values.permit_type_id || null}
                      //   aria-invalid={
                      //     validation.touched.permit_type_id &&
                      //     validation.errors.permit_type_id
                      //       ? true
                      //       : false
                      //   }
                      classNamePrefix="select2-selection"
                    />
                  </Row>
                  <Row className="mb-3">
                    <Label>Form of Ownership:</Label>
                    <Select
                      isClearable="true"
                      name=""
                      placeholder="Select Status"
                      //   onChange={(typeOptions) =>
                      //     validation.setFieldValue("permit_type_id", typeOptions)
                      //   }
                      //   onBlur={() => {
                      //     validation.handleBlur({
                      //       target: { name: "permit_type_id" },
                      //     });
                      //   }}
                      //   options={typeOptions}
                      //   value={validation.values.permit_type_id || null}
                      //   aria-invalid={
                      //     validation.touched.permit_type_id &&
                      //     validation.errors.permit_type_id
                      //       ? true
                      //       : false
                      //   }
                      classNamePrefix="select2-selection"
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
                style={{ backgroundColor: "#55a5e6", color: "white" }}
              >
                Project Location
              </h5>
              <CardBody>
                {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                <CardText>
                  <Row className="mb-3">
                    <Col md="6">
                      <Label>Project Title:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                        // onChange={validation.handleChange}
                        // onBlur={validation.handleBlur}
                        // value={
                        //   validation.values.business_code.toUpperCase() || ""
                        // }
                        // invalid={
                        //   validation.touched.business_code &&
                        //   validation.errors.business_code
                        //     ? true
                        //     : false
                        // }
                      />
                      {/* {validation.touched.business_code &&
                      validation.errors.business_code ? (
                        <FormFeedback type="invalid">
                          {validation.errors.business_code}
                        </FormFeedback>
                      ) : null} */}
                    </Col>
                    <Col md="3">
                      <Label>Lot No:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                    <Col md="3">
                      <Label>Blk No:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="6">
                      <Label>Tct No:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                    <Col md="3">
                      <Label>Street:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                    <Col md="3">
                      <Label>Barangay:</Label>
                      <Select
                        isClearable="true"
                        name=""
                        placeholder="Select Status"
                        classNamePrefix="select2-selection"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="6">
                      <Label>Tax dec No:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                    <Col md="3">
                      <Label>District:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                    <Col md="3">
                      <Label>City:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
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
                style={{ backgroundColor: "#55a5e6", color: "white" }}
              >
                Applicant
              </h5>
              <CardBody>
                {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                <CardText>
                  <Row className="mb-3">
                    <Col md="5">
                      <Label>Project Title:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                    <Col md="5">
                      <Label>Lot No:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                    <Col md="1">
                      <Label>Blk No:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                    <Col md="1">
                      <Label>Blk No:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="12">
                      <Label>Address:</Label>
                      <Row>
                        <Col md="3">
                          <Input
                            name="business_code"
                            type="text"
                            placeholder="Enter title"
                          />
                        </Col>
                        <Col md="2">
                          <Input
                            name="business_code"
                            type="text"
                            placeholder="Enter title"
                          />
                        </Col>
                        <Col md="3">
                          <Select
                            isClearable="true"
                            name=""
                            placeholder="Select Status"
                            classNamePrefix="select2-selection"
                          />
                        </Col>
                        <Col md="2">
                          <Input
                            name="business_code"
                            type="text"
                            placeholder="Enter title"
                          />
                        </Col>
                        <Col md="2">
                          <Input
                            name="business_code"
                            type="text"
                            placeholder="Enter title"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="5">
                      <Label>Tel No:</Label>
                      <Input
                        name="business_code"
                        type="text"
                        placeholder="Enter title"
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
                style={{ backgroundColor: "#55a5e6", color: "white" }}
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
                      placeholder="Select Status"
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
                      placeholder="Select Status"
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
      </div>
    </>
  );
}
