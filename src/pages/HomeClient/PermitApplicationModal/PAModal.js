import { Modal } from "reactstrap"
import React, { useEffect, useState, useRef } from "react"
import PermitApplicationModalContent from "./PermitApplicationModalContent"
import { Form, Formik } from "formik"
import { initialValuesBuildingApp } from "../utils/initialValues"

export default function PAModal({ title }) {
  const googleRef = useRef(null)
  const scrollToGoogle = () => {
    googleRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const [modal_backdrop, setmodal_backdrop] = useState(false)

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop)
    removeBodyCss()
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  const onSubmit = async (values, actions) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(values[methodAcquisition]);
    if (values.ownershipStatus !== "3")
      values = { ...values, methodAcquisition: "" }
    if (values.ownershipStatus === "2")
      values = { ...values, formOwnership: "2" }
    console.log(values)
    // setmodal_backdrop(false);
    // actions.resetForm();
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary "
        onClick={() => {
          tog_backdrop()
        }}
        data-toggle="modal"
        data-target=".bs-example-modal-lg"
        style={{ width: "100%" }}
      >
        {title}
      </button>
      <Modal
        isOpen={modal_backdrop}
        toggle={() => {
          tog_backdrop()
        }}
        backdrop={"static"}
        id="staticBackdrop"
        size="xl"
      >
        <Formik
          initialValues={initialValuesBuildingApp}
          // validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form>
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Building Permit Application
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setmodal_backdrop(false)
                  }}
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body"
                style={{ height: "70vh", overflowY: "auto" }}
              >
                <PermitApplicationModalContent
                  setmodal_backdrop={setmodal_backdrop}
                  values={values}
                  googleRef={googleRef}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    setmodal_backdrop(false)
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Proceed
                </button>
                <button onClick={scrollToGoogle}>Go to Google Section</button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}
