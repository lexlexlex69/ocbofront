import React, { useEffect, useRef, useState } from "react";

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Formik } from "formik";
import PermitApplicationModalContent from "pages/HomeClient/PermitApplicationModal/PermitApplicationModalContent";
import { initialValuesBuildingApp } from "pages/HomeClient/utils/initialValues";
import SummaryQA from "pages/HomeClient/PermitApplicationModal/component/SummaryQA";
import GeneratedChecklist from "pages/HomeClient/PermitApplicationModal/component/GeneratedChecklist";
import { useReactToPrint } from "react-to-print";
import BuildingPermitPrintable from "pages/HomeClient/PermitApplicationModal/component/BuildingPermitPrintable";

const FormWizard = () => {
  const parentRef = useRef();
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({
    content: () => contentRef.current,
  });
  //meta title
  document.title = "Form Wizard | Skote - React Admin & Dashboard Template";

  const [activeTab, setactiveTab] = useState(1);
  const [activeTabVartical, setoggleTabVertical] = useState(1);

  const [passedSteps, setPassedSteps] = useState([1]);
  const [passedStepsVertical, setPassedStepsVertical] = useState([1]);

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      var modifiedSteps = [...passedStepsVertical, tab];

      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab);
        setPassedStepsVertical(modifiedSteps);
      }
    }
  }

  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.scrollIntoView({
        behavior: "instant",
        block: "center",
      });
    }
  }, [activeTab]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Basic Wizard</h4>
                  <div className="wizard clearfix">
                    <div className="steps clearfix" ref={parentRef}>
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            // onClick={() => {
                            //   setactiveTab(1);
                            // }}
                            // disabled={!(passedSteps || []).includes(1)}
                          >
                            <span className="number">1.</span> Answer Form
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 2 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            // onClick={() => {
                            //   setactiveTab(2);
                            // }}
                            // disabled={!(passedSteps || []).includes(2)}
                          >
                            <span className="number">02</span> Summary
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 3 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 3 })}
                            // onClick={() => {
                            //   setactiveTab(3);
                            // }}
                            // disabled={!(passedSteps || []).includes(3)}
                          >
                            <span className="number">03</span> Generated
                            Checklist
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 4 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 4 })}
                            // onClick={() => {
                            //   setactiveTab(4);
                            // }}
                            // disabled={!(passedSteps || []).includes(4)}
                          >
                            <span className="number">04</span> Printables
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <Formik
                        initialValues={initialValuesBuildingApp}
                        // validationSchema={schema}
                      >
                        {({ values }) => (
                          <Form>
                            <TabContent activeTab={activeTab}>
                              <TabPane tabId={1}>
                                <PermitApplicationModalContent
                                  values={values}
                                />
                              </TabPane>
                              <TabPane tabId={2}>
                                <SummaryQA values={values} />
                              </TabPane>
                              <TabPane tabId={3}>
                                <div>
                                  <GeneratedChecklist />
                                </div>
                              </TabPane>
                              <TabPane tabId={4}>
                                <div className="row justify-content-center">
                                  <Col lg="12">
                                    <BuildingPermitPrintable values={values} />
                                  </Col>
                                  <div>
                                    <div ref={contentRef}>Content to print</div>
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        reactToPrintFn();
                                      }}
                                    >
                                      Print
                                    </button>
                                  </div>
                                </div>
                              </TabPane>
                            </TabContent>
                          </Form>
                        )}
                      </Formik>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* className={
                          activeTab === 1 ? "previous disabled" : "previous"
                        } */}

                      <button
                        to="#"
                        onClick={() => {
                          toggleTab(activeTab - 1);
                          // parentRef.current.scrollIntoView({
                          //   behavior: "smooth",
                          // });
                        }}
                        style={{ width: "49%" }}
                        disabled={activeTab === 1}
                      >
                        Previous
                      </button>

                      {/* className={activeTab === 4 ? "next disabled" : "next"}
                      style={{ width: "49%", backgroundColor: "blue" }} */}

                      <button
                        to="#"
                        onClick={() => {
                          toggleTab(activeTab + 1);
                          // parentRef.current.scrollIntoView({
                          //   behavior: "smooth",
                          // });
                        }}
                        disabled={activeTab === 4}
                        style={{ width: "49%" }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormWizard;
