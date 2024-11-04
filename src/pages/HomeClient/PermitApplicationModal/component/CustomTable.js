import React from "react";
import { Col, Row, Table } from "reactstrap";

export default function CustomTable({ children }) {
  return (
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
            <tbody>{children}</tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
}
