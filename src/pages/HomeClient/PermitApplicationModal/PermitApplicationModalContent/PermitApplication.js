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
import { Field, Form, Formik, useFormikContext } from "formik";
import CustomSelect from "pages/HomeClient/Components/CustomSelect";
import CustomInput from "pages/HomeClient/Components/CustomInput";
import CustomCheckbox from "pages/HomeClient/Components/CustomCheckbox";
import { initialValuesBuildingApp } from "pages/HomeClient/utils/initialValues";
import CustomRadioButton from "pages/HomeClient/Components/CustomRadioButton";
import CustomDate from "pages/HomeClient/Components/CustomDate";
import moment from "moment";
import CustomSwitch from "pages/HomeClient/Components/CustomSwitch";

const style = { backgroundColor: "#55a5e6", color: "white" };

export default function PermitApplication() {
  // const { values } = useFormikContext();
  ///////////////////////////
  const [filterParams, setFilterParams] = useState([]);

  const showScopeOfWork = false;

  // const showScopeOfWork = values.addInfoworkScopeChecklist.some(
  //   (item) => item.label === "Interior Renovation"
  // );

  ///////////////////
  const [ownershipOptions, setOwnershipOptions] = useState([]);
  const [methodAcquisitionOptions, setMethodAcquisitionOptions] = useState("");
  const [formOwnershipOptions, setFormOwnershipOptions] = useState("");
  const [workScopeChecklistOptions, setWorkScopeChecklistOptions] = useState(
    []
  );
  const [followUpQuestionsOptions, setFollowUpQuestionsOptions] = useState([]);

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
      {/* <TestCustomCheckbox id="check2" type="checkbox" data={values} /> */}

      {/* <h2>Building Permit Application</h2> */}
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
                Land Ownership
              </p>
              <CardBody>
                {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                <CardText>
                  <Row className="mb-3">
                    <Col md="12">
                      <CustomSelect
                        label="Ownership Status"
                        name="landOwnershipStatus"
                        options={ownershipOptions}
                      />
                    </Col>
                  </Row>
                  {/* {console.log(values.ownershipStatus === "3")} */}
                  {/* {values.landOwnershipStatus === "3" && (
                    <Row className="mb-3">
                      <Col md="12">
                        <CustomSelect
                          label="Method of lot/property acquisition"
                          name="landOwnershipMethod"
                          options={methodAcquisitionOptions}
                        />
                      </Col>
                    </Row>
                  )} */}

                  <Row className="mb-3">
                    <Col md="12">
                      <CustomSelect
                        label="Form of Ownership"
                        name="landOwnershipForm"
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
                        name="projLocProjectTitle"
                        type="text"
                      />
                    </Col>
                    <Col md="3">
                      <CustomInput
                        label="Lot No"
                        name="projLocLotNo"
                        type="text"
                      />
                    </Col>
                    <Col md="3">
                      <CustomInput
                        label="Blk No"
                        name="projLocBlkNo"
                        type="text"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="6">
                      <CustomInput
                        label="Tct No"
                        name="projLocTctNo"
                        type="text"
                      />
                    </Col>
                    <Col md="3">
                      <CustomInput
                        label="Street"
                        name="projLocStreet"
                        type="text"
                      />
                    </Col>
                    <Col md="3">
                      <CustomSelect
                        label="Barangay"
                        name="projLocBarangay"
                        options={ownershipOptions}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="6">
                      <CustomInput
                        label="Tax dec No"
                        name="projLocTaxDecNo"
                        type="text"
                      />
                    </Col>
                    <Col md="3">
                      <CustomInput
                        label="Disctrict"
                        name="projLocDisctrict"
                        type="text"
                      />
                    </Col>
                    <Col md="3">
                      <CustomInput
                        label="City"
                        name="projLocCity"
                        type="text"
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
                Applicant
              </h5>
              <CardBody>
                {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                <CardText>
                  <Row className="mb-3">
                    <Col md="5">
                      <CustomInput
                        label="Surname"
                        name="applicantSurname"
                        type="text"
                      />
                    </Col>
                    <Col md="5">
                      <CustomInput
                        label="First Name"
                        name="applicantFirstname"
                        type="text"
                      />
                    </Col>
                    <Col md="1">
                      <CustomInput label="M.I" name="applicantMI" type="text" />
                    </Col>
                    <Col md="1">
                      <CustomInput
                        label="Suffix"
                        name="applicantSuffix"
                        type="text"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="12">
                      <Label>Address:</Label>
                      <Row>
                        <Col md="3">
                          <CustomInput
                            label="Address"
                            name="applicantAddPurok"
                            type="text"
                          />
                        </Col>
                        <Col md="2">
                          <CustomInput
                            label="Subdivision"
                            name="applicantAddSubdivision"
                            type="text"
                          />
                        </Col>
                        <Col md="3">
                          <CustomSelect
                            label="Barangay"
                            name="applicantAddBarangay"
                            options={ownershipOptions}
                          />
                        </Col>
                        <Col md="2">
                          <CustomInput
                            label="City"
                            name="applicantAddCity"
                            type="text"
                          />
                        </Col>
                        <Col md="2">
                          <CustomInput
                            label="Zip code"
                            name="applicantAddZipCode"
                            type="text"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="5">
                      <CustomInput
                        label="Tel No"
                        name="applicantTel"
                        type="text"
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
                AUTHORIZED REPRESENTATIVE&#39;S DETAILS &#40;OPTIONAL&#41;
              </h5>
              <CardBody>
                {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
                <CustomSwitch
                  label="Add authorized representative."
                  name="authorizedSwitch"
                />
                {/* {values.authorizedSwitch && (
                  <CardText>
                    <Row className="mb-3">
                      <Col md="5">
                        <CustomInput
                          label="Surname"
                          name="authorizeSurname"
                          type="text"
                        />
                      </Col>
                      <Col md="5">
                        <CustomInput
                          label="First Name"
                          name="authorizeFirstname"
                          type="text"
                        />
                      </Col>
                      <Col md="1">
                        <CustomInput
                          label="M.I"
                          name="authorizeMI"
                          type="text"
                        />
                      </Col>
                      <Col md="1">
                        <CustomInput
                          label="Suffix"
                          name="authorizeSuffix"
                          type="text"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md="12">
                        <Label>Address:</Label>
                        <Row>
                          <Col md="3">
                            <CustomInput
                              label="Address"
                              name="authorizeAddPurok"
                              type="text"
                            />
                          </Col>
                          <Col md="2">
                            <CustomInput
                              label="Subdivision"
                              name="authorizeAddSubdivision"
                              type="text"
                            />
                          </Col>
                          <Col md="3">
                            <CustomSelect
                              label="Barangay"
                              name="authorizeAddBarangay"
                              options={ownershipOptions}
                            />
                          </Col>
                          <Col md="2">
                            <CustomInput
                              label="City"
                              name="authorizeAddCity"
                              type="text"
                            />
                          </Col>
                          <Col md="2">
                            <CustomInput
                              label="Zip code"
                              name="authorizeAddZipCode"
                              type="text"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md="5">
                        <CustomInput
                          label="Tel No"
                          name="authorizeTel"
                          type="text"
                        />
                      </Col>
                    </Row>
                  </CardText>
                )} */}
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
                    <Col md="12">
                      <CustomSelect
                        label="Type of Activity"
                        name="AddInfoTypeActivity"
                        options={ownershipOptions}
                      />
                    </Col>
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
                              />
                            ))}
                          </Row>
                        </div>
                      </Col>

                      <Col
                        md="12"
                        style={showScopeOfWork ? {} : { display: "none" }}
                      >
                        <div className="mt-4">
                          <Row>
                            <h2 className="font-size-18 mb-4">
                              <i className="mdi mdi-arrow-right text-primary mr-1"></i>{" "}
                              Interior Renovation
                            </h2>
                          </Row>
                          <Row style={{ padding: "0px 20px" }}>
                            <Row className="mb-3">
                              <Col sm="12" lg="6">
                                <CustomInput
                                  label="Unit/ Stall Number"
                                  name="addInfoInteriorUnitStallNumber"
                                  type="text"
                                />
                              </Col>

                              <Col sm="12" lg="6">
                                <CustomInput
                                  label="Establisment Name"
                                  name="addInfoInteriorEstabName"
                                  type="text"
                                />
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <CustomRadioButton
                                label="Does the project involve any structural work?"
                                name="addInfoInteriorStructWork"
                              />
                            </Row>
                            <Row className="mb-3">
                              <CustomRadioButton
                                label="Is this an interior renovation within the mall?"
                                name="addInfoInteriorRenovationMall"
                              />
                            </Row>

                            {/* {values.addInfoInteriorRenovationMall == "yes" && (
                              <Row className="mb-3">
                                <Col>
                                  <CustomSelect
                                    label="For Interior Renovation (Leased Space)"
                                    name="addInfoInteriorLeasedSpace"
                                    options={ownershipOptions}
                                  />
                                </Col>
                              </Row>
                            )}
                            {values.addInfoInteriorRenovationMall == "no" && (
                              <Row className="mb-3">
                                <Col sm="12" lg="6">
                                  <CustomInput
                                    label="Building Permit No."
                                    name="addInfoInteriorBuildingNo"
                                    type="text"
                                  />
                                </Col>
                                <Col sm="12" lg="6">
                                  <CustomDate
                                    label="Date Issued"
                                    name="addInfoInteriorDate"
                                    type="date"
                                  />
                                </Col>
                              </Row>
                            )} */}
                          </Row>
                        </div>
                      </Col>
                    </div>
                    {/* <div id="google1">fdfdfdf</div> */}
                  </Row>
                  <Row className="mb-3">
                    <Col md="12">
                      <CustomSelect
                        label="Use of Character or Occupancy"
                        name="addInfoCharacterOccupancy"
                        options={ownershipOptions}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <div>
                      <Col md="12">
                        <div className="mt-4">
                          <Row>
                            {/* <div
                              ref={googleRef}
                              id="google"
                              style={{ marginTop: "20px" }}
                            >
                              dfgfgfgf
                            </div> */}
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
      </>
    </>
  );
}
