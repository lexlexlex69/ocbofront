import React from "react";
import { Card, CardBody, CardText, Col, Row } from "reactstrap";
import GeneratedChecklistCard from "./GeneratedChecklistCard";
import { generatedChecklistFD } from "pages/HomeClient/FakeValues/generatedChecklist";

export default function GeneratedChecklist() {
  return (
    <>
      <div>
        <Row>
          {generatedChecklistFD.map((list) => (
            <Col md="4" key={list.id}>
              <GeneratedChecklistCard title={list.title} data={list.data} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
