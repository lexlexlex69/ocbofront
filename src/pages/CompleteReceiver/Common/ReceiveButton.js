import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { getForCompleteReceiving } from "features/CompleteReceiver/completeReceiverSlice";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
const ReceiveButton = ({ id, api, openModal, refreshFunction }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const dispatch = useDispatch();
  const params = {
    for_action: 1,
  };
  const receiveDocument = () => {
    openModal
      ? toggleModal()
      : Swal.fire({
          title: "Click Yes to Receive",
          icon: "warning",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showCancelButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then(function (result) {
          if (result.value) {
            Swal.fire({
              title: "Receiving...",
              didOpen: () => {
                Swal.showLoading();
              },
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              showCancelButton: false,
              showConfirmButton: false,
            });
            axios
              .post(
                api,
                {
                  business_id: id,
                },
                {
                  credentials: "include",
                }
              )
              .then(
                (res) => {
                  dispatch(getForCompleteReceiving(params));
                  Swal.fire({
                    icon: "success",
                    title: "Document Successfully Released",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(function () {});
                },
                (error) => {
                  if (error.response.status === 401) {
                  }
                  //   console.log(error.response.data.message);
                  Swal.fire({
                    icon: "warning",
                    title: "Receive Failed",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(function () {});
                }
              );
          } else {
            console.log("cancel");
          }
        });
  };
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      business_code: "",
    },
    validationSchema: Yup.object({
      business_code: Yup.string().required("Please Enter Business Code"),
    }),

    onSubmit: (values, { resetForm }) => {
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;

          let percent = Math.floor((loaded * 100) / total);

          if (percent < 100) {
            setUploadProgress(percent);
          }
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
          axios
            .post(
              api,
              {
                business_id: id,
                business_code: values.business_code,
              },
              {
                credentials: "include",
              }
            )
            .then(
              (res) => {
                dispatch(getForCompleteReceiving(params));
                resetForm();
                Swal.fire({
                  icon: "success",
                  title: "Document Successfully Released",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(function () {});
              },
              (error) => {
                if (error.response.status === 401) {
                }
                console.log(error.response.data.message);
                Swal.fire({
                  icon: "warning",
                  title: "Release Failed",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(function () {});
              }
            );
        } else {
          console.log("cancel");
        }
      });
    },
  });
  return (
    <>
      <Modal
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={toggleModal}>Add Business Code</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <Label className="form-label">Business Code:</Label>
            <Input
              name="business_code"
              type="text"
              placeholder="Enter Business Code"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.business_code.toUpperCase() || ""}
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
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={validation.submitForm}>
            Submit
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Button
        type="button"
        color="primary"
        className="btn-sm btn-rounded"
        onClick={(e) => {
          receiveDocument();
        }}
        style={{ marginBottom: "2px" }}
      >
        Receive
      </Button>
    </>
  );
};

export default ReceiveButton;
