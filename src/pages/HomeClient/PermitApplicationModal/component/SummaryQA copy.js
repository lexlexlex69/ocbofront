import { Card, CardBody, CardText, Col, Row, Table } from "reactstrap";
import React from "react";
import { questionsLabels } from "pages/HomeClient/utils/initialValues";
import { storedValues } from "pages/HomeClient/FakeValues/storedDataFD";

export default function SummaryQA({ values }) {
  console.log(values);
  const fetchstoredValues = values;
  // console.log(fetchstoredValues);
  return (
    <>
      <Row style={{ padding: "0px" }}>
        <Col style={{ padding: "0px" }}>
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
                {Object.entries(fetchstoredValues).map(
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
                        {/* ANSWERS */}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}
