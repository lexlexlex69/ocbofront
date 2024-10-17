/* eslint-disable padded-blocks */
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  FormFeedback,
  Spinner,
  Alert,
  Progress,
} from "reactstrap";
import Select, { StylesConfig } from "react-select";
import Breadcrumbs from "components/Common/Breadcrumb";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px 1px 1px 1px solid #f46a6a",
    boxShadow: "1px 1px 1px 1px #f46a6a",
  }),
};
const Receive = (props) => {
  const dispatch = useDispatch();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [showError, setShowError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(null);
  const [genderTypeOptions, setGenderTypeOptions] = useState();
  const [typeOptions, setTypeOptions] = useState();

  useEffect(() => {
    axios.get("api/gender-types").then(
      (res) => {
        const options = res.data.map((options) => ({
          value: options.id,
          label: options.gender_type,
        }));
        setGenderTypeOptions(options);
      },
      (error) => {}
    );
  }, []);

  useEffect(() => {
    axios.get("api/permit-types").then(
      (res) => {
        const options = res.data.map((options) => ({
          value: options.id,
          label: options.name.toUpperCase(),
        }));
        setTypeOptions(options);
      },
      (error) => {}
    );
  }, []);

  const getFormData = (object) => {
    const formData = new FormData();
    Object.keys(object).forEach((key) => {
      if (typeof object[key] !== "object") formData.append(key, object[key]);
      else {
        if (key !== "sample_card") {
          formData.append(key, JSON.stringify(object[key]));
        } else {
          object[key].forEach((element, index) => {
            formData.append(key + "[]", element);
          });
          // formData.append(key, (object[key][0]))
        }
      }
    });
    return formData;
  };

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      permit_type_id: "",
      gender_type_id: "",
      business_code: "",
      name: "",
      owner: "",
      // business_permit: "",
      // plate_no: "",
      date_received: moment(new Date()).format("yyyy-MM-DD"),
      locationData: "test",
    },
    validationSchema: Yup.object({
      // business_code: Yup.string().notRequired(),
      permit_type_id: Yup.object().shape({
        label: Yup.string().required("Please Select a Permit Type"),
      }),
      gender_type_id: Yup.object().shape({
        label: Yup.string().required("Please Select a Gender - Type"),
      }),
      name: Yup.string().required("Please Enter a Name"),
      owner: Yup.string().required("Please Enter an Owner"),
      // control_no: Yup.string().when("permit_type_id.label", {
      //   is: "RENEW",
      //   then: Yup.string().required("Please Enter Control No"),
      //   otherwise: Yup.string().notRequired(),
      // }),
      business_code: Yup.string().when("permit_type_id.label", {
        is: "RENEW",
        then: Yup.string().required("Please Enter Business Code"),
        otherwise: Yup.string().notRequired(),
      }),
      // business_permit: Yup.string().when("permit_type_id.label", {
      //   is: "RENEW",
      //   then: Yup.string().required("Please Enter Business Permit"),
      //   otherwise: Yup.string().notRequired(),
      // }),
      // business_permit: Yup.string().notRequired(),
      // plate_no: Yup.string().when("permit_type_id.label", {
      //   is: "RENEW",
      //   then: Yup.string().required("Please Enter Plate No"),
      //   otherwise: Yup.string().notRequired(),
      // }),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      values["permit_type_id"] = values.permit_type_id.value;
      values["gender_type_id"] = values.gender_type_id.value;
      console.log(values["gender_type_id"]);
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;

          let percent = Math.floor((loaded * 100) / total);

          if (percent < 100) {
            setUploadProgress(percent);
          }
          // (<ProgressBarComponent/>)
        },
      };
      Swal.fire({
        title: "Click to Save",
        icon: "warning",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      }).then(function (result) {
        if (result.value) {
          setShowProgressBar(true);
          var bodyFormData = getFormData(values);
          axios
            .post("api/initial-receiver/receive", bodyFormData, options, {
              credentials: "include",
            })
            .then(
              (res) => {
                resetForm();
                setShowProgressBar(false);
                setShowError(null);
                setShowSuccess("Success!");
                setUploadProgress(0);
              },
              (error) => {
                setShowError(error.response.data.message);
                setShowProgressBar(false);
                setShowSuccess(null);
                setUploadProgress(0);
              }
            );
        } else {
          console.log("cancel");
        }
      });
    },
  });
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className=" d-flex flex-column">
          <Breadcrumbs title="Initial Receiving" breadcrumbItem="Receive" />

          <Row>
            <Col xl="12">
              <Card>
                <CardBody>
                  <Form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    {
                      <>
                        <Row>
                          <Col md="4">
                            <div className="mb-3">
                              <Label>Permit Type:</Label>
                              <Select
                                styles={
                                  validation.touched.permit_type_id &&
                                  validation.errors.permit_type_id
                                    ? customStyles
                                    : ""
                                }
                                isClearable="true"
                                name="permit_type_id"
                                placeholder="Select Permit Type"
                                onChange={(typeOptions) =>
                                  validation.setFieldValue(
                                    "permit_type_id",
                                    typeOptions
                                  )
                                }
                                onBlur={() => {
                                  validation.handleBlur({
                                    target: { name: "permit_type_id" },
                                  });
                                }}
                                options={typeOptions}
                                value={validation.values.permit_type_id || null}
                                aria-invalid={
                                  validation.touched.permit_type_id &&
                                  validation.errors.permit_type_id
                                    ? true
                                    : false
                                }
                                classNamePrefix="select2-selection"
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div className="mb-3">
                              <Label>Gender - Type:</Label>
                              <Select
                                styles={
                                  validation.touched.gender_type_id &&
                                  validation.errors.gender_type_id
                                    ? customStyles
                                    : ""
                                }
                                isClearable="true"
                                name="gender_type_id"
                                placeholder="Select Gender - Type"
                                onChange={(genderTypeOptions) =>
                                  validation.setFieldValue(
                                    "gender_type_id",
                                    genderTypeOptions
                                  )
                                }
                                onBlur={() => {
                                  validation.handleBlur({
                                    target: { name: "gender_type_id" },
                                  });
                                }}
                                options={genderTypeOptions}
                                value={validation.values.gender_type_id || null}
                                aria-invalid={
                                  validation.touched.gender_type_id &&
                                  validation.errors.gender_type_id
                                    ? true
                                    : false
                                }
                                classNamePrefix="select2-selection"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          {validation.values.permit_type_id ? (
                            validation.values.permit_type_id.label ===
                            "RENEW" ? (
                              <>
                                <Col md="8">
                                  <div className="mb-3">
                                    <Label className="form-label">
                                      Business Code:
                                    </Label>
                                    <Input
                                      name="business_code"
                                      type="text"
                                      placeholder="Enter Business Code"
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.business_code.toUpperCase() ||
                                        ""
                                      }
                                      invalid={
                                        validation.touched.business_code &&
                                        validation.errors.business_code
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.business_code &&
                                    validation.errors.business_code ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.business_code}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                              </>
                            ) : null
                          ) : null}
                        </Row>
                        <Row>
                          <Col md="4">
                            <div className="mb-3">
                              <Label className="form-label">
                                Business Name:
                              </Label>
                              <Input
                                name="name"
                                type="text"
                                placeholder="Enter Business Name"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={
                                  validation.values.name.toUpperCase() || ""
                                }
                                invalid={
                                  validation.touched.name &&
                                  validation.errors.name
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.name &&
                              validation.errors.name ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.name}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col md="4">
                            <div className="mb-3">
                              <Label className="form-label">
                                Business Owner:
                              </Label>
                              <Input
                                name="owner"
                                type="text"
                                placeholder="Enter Business Owner"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={
                                  validation.values.owner.toUpperCase() || ""
                                }
                                invalid={
                                  validation.touched.owner &&
                                  validation.errors.owner
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.owner &&
                              validation.errors.owner ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.owner}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                        </Row>
                      </>
                    }
                    {showProgressBar ? (
                      <Row>
                        <Col md="1">
                          <button
                            className="btn btn-primary btn-block "
                            type="button"
                            disabled
                          >
                            <Spinner size="sm">Loading...</Spinner>
                          </button>
                        </Col>
                        <Col md="11">
                          <Progress
                            animated
                            value={uploadProgress}
                            style={{
                              height: "35px",
                            }}
                          >
                            {uploadProgress}%
                          </Progress>
                        </Col>
                      </Row>
                    ) : (
                      <>
                        {showError && (
                          <Alert
                            color="danger"
                            className="alert fade show"
                            role="alert"
                          >
                            <i className="mdi mdi-close-box-multiple-outline me-2"></i>
                            {showError}
                          </Alert>
                        )}
                        {showSuccess && (
                          <Alert
                            color="success"
                            className="alert fade show"
                            role="alert"
                          >
                            <i className="mdi mdi-check-box-multiple-outline me-2"></i>
                            {showSuccess}
                          </Alert>
                        )}

                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Submit
                        </button>
                      </>
                    )}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Receive;
