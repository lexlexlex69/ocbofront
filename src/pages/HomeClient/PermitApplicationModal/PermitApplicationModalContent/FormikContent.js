import { Form, Formik } from "formik";
import React from "react";
import PermitApplicationModalContent from ".";
import { initialValuesBuildingApp } from "pages/HomeClient/utils/initialValues";

export default function FormikContent() {
  return (
    <Formik
      initialValues={initialValuesBuildingApp}
      // validationSchema={schema}
    >
      {({ values }) => (
        <Form>
          <div
            className="modal-body"
            style={{ height: "70vh", overflowY: "auto" }}
          >
            <PermitApplicationModalContent values={values} />
          </div>
        </Form>
      )}
    </Formik>
  );
}
