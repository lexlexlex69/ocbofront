import { Modal } from "reactstrap";
import React, { useEffect, useState, useRef } from "react";
import PermitApplicationModalContent from "./PermitApplicationModalContent";
import { Form, Formik, useFormikContext } from "formik";
import { initialValuesBuildingApp } from "../../../utils/initialValues";
import SummaryQA from "./component/SummaryQA";
import QAModal from "./QAModal";

export default function PAModal({ title }) {
  const [steps, setSteps] = useState(1);

  const [modal_backdrop, setmodal_backdrop] = useState(false);
  // console.log(currentStep);

  const googleRef = useRef(null);
  const scrollToGoogle = () => {
    googleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop);
    removeBodyCss();
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  const onSubmit = async (values, actions) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(values[methodAcquisition]);
    if (values.landOwnershipForm !== "3")
      values = { ...values, landOwnershipMethod: "0" };
    if (values.landOwnershipStatus === "2")
      values = { ...values, landOwnershipForm: "2" };
    setSteps(2);
    localStorage.setItem("formValues", JSON.stringify(values));
    // Object.entries(values).forEach(([key, value]) => {
    //   console.log(`${key}: ${typeof value}`);
    // });

    // Object.entries(values).forEach(([key, value]) => {
    //   if (
    //     Array.isArray(value) &&
    //     value.length > 0 &&
    //     typeof value[0] === "object"
    //   ) {
    //     console.log(`${key}:`);
    //     value.forEach((item, index) => {
    //       console.log(`  Item ${index + 1}:`);
    //       Object.entries(item).forEach(([itemKey, itemValue]) => {
    //         console.log(`    ${itemKey}: ${itemValue}`);
    //       });
    //     });
    //   } else {
    //     console.log(`${key}: ${value}`);
    //   }
    // });
    // setmodal_backdrop(false);
    // actions.resetForm();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary "
        onClick={() => {
          tog_backdrop();
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
          tog_backdrop();
        }}
        backdrop={"static"}
        id="staticBackdrop"
        size="xl"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Building Permit Application
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_backdrop(false);
            }}
            aria-label="Close"
          ></button>
        </div>
        {steps === 1 && (
          <Formik
            initialValues={initialValuesBuildingApp}
            // validationSchema={schema}
            onSubmit={onSubmit}
          >
            {({ values }) => (
              <Form>
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
                      setmodal_backdrop(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Proceed
                  </button>

                  {/* <button onClick={scrollToGoogle}>Go to Google Section</button> */}
                </div>
              </Form>
            )}
          </Formik>
        )}
        {steps === 2 && (
          <>
            <div
              className="modal-body"
              style={{ height: "70vh", overflowY: "auto" }}
            >
              <SummaryQA />
            </div>
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

              {/* <button onClick={scrollToGoogle}>Go to Google Section</button> */}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
