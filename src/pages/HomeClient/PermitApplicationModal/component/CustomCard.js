import React from "react";
import { Card, CardBody, CardText, Col, Row } from "reactstrap";

export default function CustomCard({ title, children }) {
  return (
    <Card
      style={{
        border: "2px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <div
        className="card-header  border-bottom text-uppercase"
        style={{ backgroundColor: "#55a5e6", color: "white" }}
      >
        {title}
      </div>
      <CardBody>
        {/* <CardTitle className="mt-0">Special title treatment</CardTitle> */}
        <CardText>{children}</CardText>
      </CardBody>
    </Card>
  );
}
