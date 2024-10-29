import { Card, CardBody, CardText, Col, Row, Table } from "reactstrap";
import React from "react";
import { questionsLabels } from "pages/HomeClient/utils/initialValues";

export default function SummaryQA() {
  const storedValues = JSON.parse(localStorage.getItem("formValues"));
  console.log(storedValues);
  return (
    <>
      <Row>
        <Col>
          <Card
            style={{
              border: "2px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "none",
            }}
          >
            <p className="card-header  border-bottom text-uppercase">
              Land Ownership
            </p>
            <CardBody>
              {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
              <CardText>
                <div className="table-responsive">
                  <Table className="table table-striped mb-0 table-bordered">
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th style={{ textAlign: "center" }}>Questions</th>
                        <th style={{ textAlign: "center" }}>Answers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(storedValues).map(
                        ([key, value], index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td
                              style={{
                                maxWidth: "500px",
                                minWidth: "400px",
                              }}
                            >
                              {/* {key}
                              {"==="} */}
                              {questionsLabels[index]}
                            </td>
                            <td
                              style={{
                                maxWidth: "500px",
                                minWidth: "400px",
                              }}
                            >
                              {Array.isArray(value) ? (
                                <span style={{ display: "flex" }}>
                                  {value.map((val) => (
                                    <p key={val.id}>{val.label},</p>
                                  ))}
                                </span>
                              ) : (
                                value
                              )}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
