import { Modal } from "reactstrap";
import React, { useState } from "react";
import PermitApplicationModalContent from "./PermitApplicationModalContent";

export default function PAModal({ title }) {
  const [modal_backdrop, setmodal_backdrop] = useState(false);

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop);
    removeBodyCss();
  }
  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

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
        <div className="modal-body">
          <PermitApplicationModalContent
            setmodal_backdrop={setmodal_backdrop}
          />
        </div>
      </Modal>
    </>
  );
}
