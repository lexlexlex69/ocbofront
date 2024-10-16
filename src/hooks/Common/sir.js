import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FieldArray, Formik } from "formik";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Form,
} from "reactstrap";
import { opcrSlice, getAipDetails } from "features/opcr/opcrSlice";
import useSubmit from "hooks/Common/useSubmit";
import DescriptionTable from "./AipForm3Tables/DescriptionTable";
import BeneficiariesTable from "./AipForm3Tables/BeneficiariesTable";
import ComponentsTable from "./AipForm3Tables/ComponentsTable";
import FundingRequirementsTable from "./AipForm3Tables/FundingRequirementsTable";
import AlignmentToDevelopmentPlansTable from "./AipForm3Tables/AlignmentToDevelopmentPlansTable";
import RiskManagementTable from "./AipForm3Tables/RiskManagementTable";
import SustainabilityStrategiesTable from "./AipForm3Tables/SustainabilityStrategiesTable";

const AddAipModal = ({ openModal, toggleModal, ppaID }) => {
  const formikRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (openModal) {
      console.log(ppaID);

      dispatch(getAipDetails(ppaID));
    }
  }, [ppaID, openModal]);

  const handleSubmit = useSubmit();
  const data = useSelector((state) => state.opcr.aipDetails);

  return (
    <>
      <Modal
        isOpen={openModal}
        toggle={toggleModal}
        className="modal-dialog-centered"
        unmountOnClose={true}
        style={{ overflowY: "auto", maxWidth: "1400px" }}
        size="xl"
      >
        <ModalHeader toggle={toggleModal}>AIP FORM 3</ModalHeader>
        <ModalBody>
          <Formik
            innerRef={formikRef}
            enableReinitialize
            initialValues={{
              ppaID: ppaID,

              aipDetails: {
                beneficiaries: {
                  targetPopulationSectors:
                    data?.beneficiaries?.targetPopulationSectors || "",
                  direct: data?.beneficiaries?.direct || "",
                  indirect: data?.beneficiaries?.indirect || "",
                  outcome: data?.beneficiaries?.outcome || "",
                },

                description: {
                  projectTitle: data?.description?.projectTitle || "",
                  description: data?.description?.description || "",
                  objectives: data?.description?.objectives || "",
                  proponent: data?.description?.proponent || [],
                  implementingOffice:
                    data?.description?.implementingOffice || [],
                  partnerAgencies: {
                    department:
                      data?.description?.partnerAgencies?.department || [],
                    external: {
                      isChecked:
                        data?.description?.partnerAgencies?.external
                          ?.isChecked || false,
                      details:
                        data?.description?.partnerAgencies?.external?.details ||
                        [],
                    },
                  },
                  location: data?.description?.location || "",
                  duration: {
                    dateFrom: data?.description?.duration?.dateFrom || "",
                    dateTo: data?.description?.duration?.dateTo || "",
                  },
                },

                components: {
                  preImplementation: data?.components?.preImplementation || [
                    {
                      activity: "",
                      dateFrom: "",
                      dateTo: "",
                      output: "",
                    },
                  ],
                  implementation: data?.components?.implementation || [
                    {
                      activity: "",
                      dateFrom: "",
                      dateTo: "",
                      output: "",
                    },
                  ],
                  postImplementation: data?.components?.postImplementation || [
                    {
                      activity: "",
                      dateFrom: "",
                      dateTo: "",
                      output: "",
                    },
                  ],
                },

                fundingRequirements: {
                  proposedFundingSource:
                    data?.fundingRequirements?.proposedFundingSource || [],
                  specify: data?.fundingRequirements?.specify || "",
                },

                alignmentToDevelopmentPlans: {
                  sustainableDevelopmentGoals: {
                    ischecked:
                      data?.alignmentsToDevelopmentPlans
                        ?.sustainableDevelopmentGoals.ischecked || false,
                    details:
                      data?.alignmentsToDevelopmentPlans
                        ?.sustainableDevelopmentGoals.details || [],
                  },
                  comprehensiveLandUsePlan: {
                    ischecked:
                      data?.alignmentsToDevelopmentPlans
                        ?.comprehensiveLandUsePlan.ischecked || false,
                    details:
                      data?.alignmentsToDevelopmentPlans
                        ?.comprehensiveLandUsePlan.details || "",
                  },
                  comprehensiveDevelopmentPlan: {
                    ischecked:
                      data?.alignmentsToDevelopmentPlans
                        ?.comprehensiveDevelopmentPlan.ischecked || false,
                    details:
                      data?.alignmentsToDevelopmentPlans
                        ?.comprehensiveDevelopmentPlan.details || [],
                  },
                  sixDevelopmentImperatives: {
                    ischecked:
                      data?.alignmentsToDevelopmentPlans
                        ?.sixDevelopmentImperatives.ischecked || false,
                    details:
                      data?.alignmentsToDevelopmentPlans
                        ?.sixDevelopmentImperatives.details || [],
                  },
                  localThematicPlan: {
                    ischecked:
                      data?.alignmentsToDevelopmentPlans?.localThematicPlan
                        .ischecked || false,
                    details:
                      data?.alignmentsToDevelopmentPlans?.localThematicPlan
                        .details || "",
                  },
                  barangayDevelopmentPlan: {
                    ischecked:
                      data?.alignmentsToDevelopmentPlans
                        ?.barangayDevelopmentPlan.ischecked || false,
                    details:
                      data?.alignmentsToDevelopmentPlans
                        ?.barangayDevelopmentPlan.details || "",
                  },
                  climateChangeTypologyCode: {
                    ischecked:
                      data?.alignmentsToDevelopmentPlans
                        ?.climateChangeTypologyCode.ischecked || false,
                    details:
                      data?.alignmentsToDevelopmentPlans
                        ?.climateChangeTypologyCode.details || [],
                  },
                  otherPlans: {
                    ischecked:
                      data?.alignmentsToDevelopmentPlans?.otherPlans
                        .ischecked || false,
                    details:
                      data?.alignmentsToDevelopmentPlans?.otherPlans.details ||
                      "",
                  },
                  developmentChallenges:
                    data?.alignmentsToDevelopmentPlans?.developmentChallenges ||
                    "",
                  contributionToGender:
                    data?.alignmentsToDevelopmentPlans?.contributionToGender ||
                    "",
                  contributionToChildren:
                    data?.alignmentsToDevelopmentPlans
                      ?.contributionToChildren || "",
                },
                riskManagement: {
                  preImplementation: data?.riskManagement
                    ?.preImplementation || [
                    { riskFactor: "", mitigationStrat: "" },
                  ],
                  implementation: data?.riskManagement?.implementation || [
                    { riskFactor: "", mitigationStrat: "" },
                  ],
                  postImplementation: data?.riskManagement
                    ?.postImplementation || [
                    { riskFactor: "", mitigationStrat: "" },
                  ],
                },
                sustainabilityStrategies: data?.sustainabilityStrategies || "",
              },
            }}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <>
                <Form>
                  <div>
                    <div className="page">
                      <Table borderless>
                        <thead>
                          <tr>
                            <th
                              colSpan="3"
                              style={{
                                textAlign: "center",
                                fontSize: "20px",
                                fontWeight: "bold",
                                margin: "0",
                                padding: "0",
                              }}
                            >
                              PROGRAM/PROJECT PROFILE
                            </th>
                          </tr>
                        </thead>
                      </Table>
                      <DescriptionTable props={props} />
                      <BeneficiariesTable props={props} />
                      <ComponentsTable props={props} />
                      <FundingRequirementsTable props={props} />
                      <AlignmentToDevelopmentPlansTable props={props} />
                    </div>
                    <div className="page">
                      <RiskManagementTable props={props} />
                      <SustainabilityStrategiesTable props={props} />
                    </div>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              const formik = formikRef.current.values;

              handleSubmit(
                {
                  url: "api/custom/opcr/create-single-aip",
                  message: {
                    title: "Are you sure you want to Proceed?",
                    failedTitle: "FAILED",
                    success: "Success!",
                    error: "unknown error occured",
                  },
                  params: {
                    ...formik,
                  },
                },
                [],
                toggleModal
              );
            }}
          >
            Save
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default React.memo(AddAipModal);