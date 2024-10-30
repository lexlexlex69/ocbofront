import { Card, CardBody, CardText, Col, Row } from "reactstrap";
import React from "react";
export default function GeneratedChecklistCard({ title, data }) {
  console.log(data);
  return (
    <Card
      style={{
        border: "2px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "none",
      }}
    >
      <p
        className="card-header  border-bottom text-uppercase"
        // style={style}
        style={{ textAlign: "center" }}
      >
        {title}
      </p>
      <CardBody>
        <CardText>
          {data.map((item, index) => (
            <Row className="mb-3" key={index}>
              <Col md="12">
                {index + 1}.{item.label}
              </Col>
            </Row>
          ))}
        </CardText>
      </CardBody>
    </Card>
  );
}
