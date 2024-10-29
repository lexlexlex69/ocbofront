import { Card, CardBody, CardText, Col, Row, Table } from "reactstrap";
import React from "react";

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
                  <Table className="table table-striped mb-0">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Questions</th>
                        <th>Answers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(storedValues).map(
                        ([key, value], index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{key}</td>
                            <td>{value}</td>
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
