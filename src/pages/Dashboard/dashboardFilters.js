import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { Form, Col, Button, Input, InputGroup, Label } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import BasicInputField from "components/Forms/BasicInputField";
import ExportButton from "../../pages/Summary/common/ExportButton";
import { dateFilterSlice } from "features/filters/dateFilterSlice";
import { useDispatch, useSelector } from "react-redux";
const DashboardFilters = ({ action, forAction, withStatus, statuses }) => {
  const dispatch = useDispatch();

  const fetchData = (values) => {
    dispatch(action(values));
  };

  const [parameters, setParams] = useState("");
  const [status, setStatus] = useState("");

  // console.log(parameters);
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      keyword: "",
      date_from: "",
      date_to: "",
      status: status,
    },
    validationSchema: Yup.object({
      keyword: Yup.string().notRequired(),
      date_from: Yup.string().notRequired(),
      date_to: Yup.string().notRequired(),
    }),

    onSubmit: (values) => {
      console.log(status);

      values["status"] = values.status.value ? values.status.value : "";

      const params = { ...values, for_action: forAction };
      setParams(params);
      dispatch(action(params));
    },
  });
  const clearFilter = () => {
    validation.resetForm();
    setParams("");
    setStatus("");

    fetchData({
      for_action: forAction,
      status: "",
      keyword: "",
      date_from: "",
      date_to: "",
    });
  };
  console.log(validation.initialValues);
  return (
    <Form
      className="row row-cols-lg-auto g-3"
      onSubmit={(e) => {
        e.preventDefault();
        validation.handleSubmit();
        return false;
      }}
    >
      {withStatus ? (
        <>
          <Col style={{ width: "300px", paddingRight: "10px" }}>
            <div className="mb-9">
              <Label>Status</Label>
              <Select
                styles={
                  validation.touched.roles && validation.errors.roles
                    ? customStyles
                    : ""
                }
                isClearable="true"
                name="status"
                placeholder="Select Status"
                onChange={(statuses) => {
                  setStatus(statuses);

                  validation.setFieldValue("status", statuses);
                }}
                onBlur={() => {
                  validation.handleBlur({ target: { name: "status" } });
                  validation.onSubmit;
                }}
                options={statuses}
                value={validation.values.status || null}
                aria-invalid={
                  validation.touched.status && validation.errors.status
                    ? true
                    : false
                }
                classNamePrefix="select2-selection"
              />
            </div>
          </Col>
        </>
      ) : null}
      <BasicInputField
        col={"6"}
        type={"text"}
        label={"Keyword"}
        touched={validation.touched.keyword}
        errors={validation.errors.keyword}
        name={"keyword"}
        validation={validation}
        placeholder={"Enter keyword"}
        value={validation.values.keyword}
      />
      <BasicInputField
        col={"6"}
        type={"date"}
        label={"Date From:"}
        touched={validation.touched.date_from}
        errors={validation.errors.date_from}
        name={"date_from"}
        validation={validation}
        placeholder={""}
        value={validation.values.date_from}
      />

      <Col xs={12} style={{ width: "208px", paddingRight: "10px" }}>
        <label
          // className="visually-hidden"
          htmlFor="inlineFormInputGroupUsername"
        >
          Date To:
        </label>
        <InputGroup>
          <Input
            id="date_to"
            name="date_to"
            className="form-control"
            placeholder="Enter Date To"
            type="date"
            onChange={validation.handleChange}
            value={validation.values.date_to || ""}
          />
          <Button type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
      </Col>
      <Col>
        <label
          // className="visually-hidden"
          style={{ color: "#f8f8fb" }}
        >
          *
        </label>
        <br />
        <Button
          outline
          onClick={() => {
            clearFilter();
          }}
        >
          Clear Filter
        </Button>
      </Col>
      <Col>
        <div style={{ paddingTop: "33px" }}></div>
        <ExportButton params={parameters} />
      </Col>
    </Form>
  );
};

export default DashboardFilters;
