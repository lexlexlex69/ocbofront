/* eslint-disable padded-blocks */
import React, { useEffect, useRef, useState } from "react";
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
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import CustomInput from "./CustomInput";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px 1px 1px 1px solid #f46a6a",
    boxShadow: "1px 1px 1px 1px #f46a6a",
  }),
};

const Receive = (props) => {
  const formikRef = useRef();
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
  const onSubmit = (values) => console.log(values);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className=" d-flex flex-column">
          <Breadcrumbs title="Initial Receiving" breadcrumbItem="Receive" />
          <Formik
            initialValues={{
              permit_type_id: "",
              gender_type_id: "",
              business_code: "",
              name: "",
              owner: "",
              // business_permit: "",
              // plate_no: "",
              date_received: moment(new Date()).format("yyyy-MM-DD"),
              locationData: "test",
            }}
            onSubmit={onSubmit}
          >
            {(props) => (
              <>
                <Row>
                  <Col xl="12">
                    <Card>
                      <CardBody>
                        <Form className="form-horizontal">
                          {
                            <>
                              <Row>
                                <Col md="4">
                                  <div className="mb-3">
                                    <CustomInput
                                      label="name"
                                      name="name"
                                      type="text"
                                      placeholder="Enter Business Name"
                                    />
                                  </div>
                                </Col>
                                <Col md="4">
                                  <CustomInput
                                    label="owner"
                                    name="owner"
                                    type="text"
                                    placeholder="Enter Business Name"
                                  />
                                  <Input />
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
                            </>
                          )}
                          <button type="submit">Submit</button>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </>
            )}
          </Formik>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Receive;
